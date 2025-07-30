'use client';

import React from 'react';
import { LogOut, User, } from 'lucide-react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

interface Props {
  user: User;
  onLogout: () => void;
  onCloseMenu: () => void;
}

const UserDropdownMobile = ({ user, onLogout, onCloseMenu }: Props) => {

  const handleLogout = () => {
    onLogout();
    onCloseMenu();
  };

  return (
    <>
      <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-xl mb-3">
        <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
              <span className="text-white font-bold text-base">
                {user.firstName?.charAt(0) || 'U'}
              </span>
            </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-gray-900 truncate">{user.firstName} {user.lastName}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center w-full px-4 py-3 rounded-xl text-base text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-700 transition-all duration-200 group"
      >
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-200">
          <LogOut className="w-5 h-5 text-red-600" />
        </div>
        <div className="flex-1 text-left">
          <p className="font-medium">Sign out</p>
          <p className="text-xs text-red-500">End your session</p>
        </div>
      </button>
    </>
  );
};

export default UserDropdownMobile; 