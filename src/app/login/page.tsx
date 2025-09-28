'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter } from 'lucide-react';
import useLoginHook from '@/hooks/useLoginHook';
import GlobalInput from '@/components/GlobalInput';

const LoginPage = () => {

  const {
    email,
    setEmail,
    isLoading,
    password,
    setPassword,
    handleSubmit
  } = useLoginHook();

  return (
    <div className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Login background"
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-black z-10 opacity-60" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                <p className="text-gray-600">Sign in to your account</p>
              </div>

              <div className="space-y-6">
                <GlobalInput
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                <GlobalInput
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full flex focus:outline-0 cursor-pointer justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                  <Facebook className='h-5 w-5' />
                  <span className="ml-2">Facebook</span>
                </div>
                <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                  <Twitter className='h-5 w-5' />
                  <span className="ml-2">Twitter</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;