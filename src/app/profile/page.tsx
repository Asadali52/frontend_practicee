'use client';

import Image from 'next/image';
import Loader from '@/components/Loader';
import useLogoutHook from '@/hooks/useLogoutHook';
import { Eye, Lock, User, Mail, EyeClosed } from 'lucide-react';
import useUpdatePasswordHook from '@/hooks/useUpdatePasswordHook';

const ProfilePage = () => {

  const {
    user,
    isUpdating,
    currentPassword,
    setCurrentPassword,
    confirmPassword,
    setConfirmPassword,
    showNewPassword,
    setShowConfirmPassword,
    showCurrentPassword,
    setShowCurrentPassword,
    showConfirmPassword,
    handleUpdatePassword,
    setShowNewPassword,
    newPassword,
    setNewPassword,
  } = useUpdatePasswordHook();

  const { handleLogout } = useLogoutHook();

  if (!user) {
    return (
      <Loader />
    );
  }

  return (
    <div className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Profile background"
        fill
        className="object-cover absolute z-1"
        priority
      />
      <div className="absolute inset-0 bg-black z-2 opacity-60" />

      <div className="relative z-10 min-h-screen flex items-center justify-center py-8 px-4">
        <div className="max-w-xl w-full space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {user.firstName[0]}{user.lastName[0]}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
              <p className="text-gray-600">Manage your account information</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Account Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={user.firstName}
                      disabled
                      className="w-full h-[42px] px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={user.lastName}
                      disabled
                      className="w-full h-[42px] px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full h-[42px] px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Update Password
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      disabled={isUpdating}
                      className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={isUpdating}
                      className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isUpdating}
                      className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleUpdatePassword}
                  disabled={isUpdating}
                  className="w-full flex justify-center py-3 cursor-pointer mt-8 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isUpdating ? 'Updating Password...' : 'Update Password'}
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={handleLogout}
                  className="w-full flex justify-center cursor-pointer py-3 px-4 border border-red-300 rounded-lg shadow-sm text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 