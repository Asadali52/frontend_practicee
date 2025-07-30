'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, LogOut, User } from 'lucide-react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

interface UserDropdownProps {
  user: User;
  onLogout: () => void;
}

const UserDropdown = ({ user, onLogout }: UserDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    onLogout();
    setIsDropdownOpen(false);
    router.push("/login");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-md group"
      >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ring-2 ring-white group-hover:ring-4 group-hover:ring-blue-100">
            <span className="text-white font-bold text-sm">
              {user.firstName?.charAt(0) || 'U'}
            </span>
          </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{user.firstName}</span>
          <span className="text-xs text-gray-500">User</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-3 w-[260px] bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">

          <div className="px-3 py-4 border-b border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-t-2xl">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <span className="text-white font-bold text-base">
                    {user.firstName?.charAt(0) || 'U'}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-gray-900 truncate">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              href="/users"
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 group"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">All Users</p>
                <p className="text-xs text-gray-500">Manage user accounts</p>
              </div>
            </Link>


            <div className="border-t border-gray-100 my-2 mx-3"></div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-3 text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-700 transition-all duration-200 group"
            >
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-200">
                <LogOut className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Sign out</p>
                <p className="text-xs text-red-500">End your session</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown; 