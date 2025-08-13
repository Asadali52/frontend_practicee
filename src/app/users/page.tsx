'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

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

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState<string | null>(null);
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
        setStatus('success');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        setStatus('error');
      }
    };

    fetchUsers();
  }, [router]);

  return { users, status, error };
}

const ErrorUI = ({ error }: { error: string }) => (
  <div className="h-[calc(100vh-454px)] flex items-center justify-center">
    <div className="text-center">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 font-nunito">Error</h2>
      <p className="text-gray-600 font-nunito">{error}</p>
    </div>
  </div>
);

const EmptyUI = () => (
  <div className="text-center py-12">
    <div className="text-gray-400 text-6xl mb-4">👥</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-nunito">No Users Yet</h3>
    <p className="text-gray-600 font-nunito">Be the first to join our community!</p>
  </div>
);

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const getInitials = (first: string, last: string) => `${first[0]}${last[0]}`.toUpperCase();

const UsersPage = () => {
  const { users, status, error } = useUsers();
  const [searchValue, setSearchValue] = useState("");

  const filteredUsers = users.filter((user) => {
    return `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchValue.toLowerCase())
  });

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <ErrorUI error={error || ''} />;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-nunito">
            Our Community
          </h1>
          <p className="text-xl text-gray-600 font-nunito">
            Meet our amazing users ({users.length} members)
          </p>
        </div>

        <div className='w-[350px] mx-auto mb-6'>
          <input
            id="email"
            name="email"
            type="search"
            autoComplete="email"
            className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
            placeholder="Search by Name"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>

        {filteredUsers.length === 0 ? (
          <EmptyUI />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white font-nunito">
                      {getInitials(user.firstName, user.lastName)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-nunito">
                    {user.firstName} {user.lastName}
                  </h3>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500 font-nunito">Email</label>
                    <p className="text-gray-900 font-nunito break-all">{user.email}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500 font-nunito">Member Since</label>
                    <p className="text-gray-900 font-nunito">{formatDate(user.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;