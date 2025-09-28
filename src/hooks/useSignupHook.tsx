import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


const useSignupHook = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: '',
    }));
  };


  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword, terms } = formData;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: '',
    };

    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!terms) {
      newErrors.terms = 'You must accept the terms';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };


  const handleSubmit = async () => {

    if (!validateForm()) return;

    try {
      setIsLoading(true);

      const { firstName, lastName, email, password } = formData;

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      console.log("🚀 ~ handleSubmit ~ data:", data)

      if (!response.ok) throw new Error(data.error || 'Signup failed');

      toast.success('Account created successfully!');

      router.push('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };


  return { formData, formErrors, handleInputChange, isLoading, handleSubmit };

}

export default useSignupHook;