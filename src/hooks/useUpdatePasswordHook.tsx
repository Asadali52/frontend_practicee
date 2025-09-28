import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}
const useUpdatePasswordHook = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      toast.error('Please login to access your profile');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/login');
      toast.error('Invalid user data');
    }
  }, [router]);

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    setIsUpdating(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/update-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to update password');
        return;
      }

      toast.success('Password updated successfully!');

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setUser(data.user);
      router.push("/home")

    } catch (error) {
      console.error('Update password error:', error);
      toast.error('An error occurred while updating password');
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    user,
    isUpdating,
    newPassword,
    setNewPassword,
    currentPassword,
    showNewPassword,
    confirmPassword,
    setShowNewPassword,
    setConfirmPassword,
    setCurrentPassword,
    showCurrentPassword,
    showConfirmPassword,
    handleUpdatePassword,
    setShowConfirmPassword,
    setShowCurrentPassword,
  };
}

export default useUpdatePasswordHook;
