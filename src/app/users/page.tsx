'use client';

import React from 'react';
import Loader from '@/components/Loader';
import useUserHook from '@/hooks/useUserHook';
import { UsersEmptyUI, UsersErrorUI } from '@/utils/MockData';
import UserCard from '@/components/UserCard';
import GlobalInput from '@/components/GlobalInput';

const UsersPage = () => {
  const {
    users,
    status,
    error,
    searchValue,
    setSearchValue,
    filterUsers,
  } = useUserHook();

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <UsersErrorUI error={error || ''} />;

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
          <GlobalInput
            id="searcg"
            label=""
            type=""
            autoComplete=""
            placeholder="Search users by name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {filterUsers.length === 0 ? (
          <UsersEmptyUI />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;