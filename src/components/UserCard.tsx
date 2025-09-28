
import React from 'react';
import { formatDate } from '@/utils/MockData';

const getInitials = (first: string, last: string) => `${first[0]}${last[0]}`.toUpperCase();

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
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
  );
};

export default UserCard;