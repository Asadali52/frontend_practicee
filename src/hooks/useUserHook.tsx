import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UsersResponse {
  message: string;
  users: User[];
  count: number;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const useUserHook = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [filterUsers, setFilterUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      toast.error("Please Login to explore")
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data: UsersResponse = await res.json();
        setUsers(data.users);
        setFilterUsers(data.users);
        setStatus('success');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        setStatus('error');
      }
    };

    fetchUsers();
  }, [router]);


  useEffect(() => {
    const filtered = users.filter(user => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchValue.toLowerCase()));
    setFilterUsers(filtered);
  }, [searchValue, users]);

  return { filterUsers, users, status, error, searchValue, setSearchValue };
};

export default useUserHook;
