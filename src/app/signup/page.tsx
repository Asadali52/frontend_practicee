'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter } from 'lucide-react';
import useSignupHook from '@/hooks/useSignupHook';
import GlobalInput from '@/components/GlobalInput'; // ✅ import global input

const SignupPage = () => {
  const {
    formData,
    formErrors,
    isLoading,
    handleSubmit,
    handleInputChange
  } = useSignupHook();

  return (
    <div className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
        alt="Signup background"
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="absolute z-10 inset-0 bg-black opacity-60" />

      <div className="relative inset-0 flex items-center justify-center sm:p-10 p-4 z-10">
        <div className="max-w-lg w-full space-y-8">
          <div className="bg-white rounded-2xl shadow-xl sm:p-8 p-5">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create account</h1>
              <p className="text-gray-600">Join us today</p>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <GlobalInput
                    id="firstName"
                    name="firstName"
                    label="First name"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {formErrors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <GlobalInput
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {formErrors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <GlobalInput
                  id="email"
                  name="email"
                  label="Email address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <GlobalInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <p className="text-sm text-red-600 mt-1">{formErrors.password}</p>
                )}
              </div>

              <div>
                <GlobalInput
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {formErrors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">{formErrors.confirmPassword}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-green-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
                </label>
              </div>
              {formErrors.terms && (
                <p className="text-sm text-red-600 -mt-5">{formErrors.terms}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex cursor-pointer justify-center py-3 px-4 rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Facebook className="h-5 w-5" />
                <span className="ml-2">Facebook</span>
              </div>
              <div className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Twitter className="h-5 w-5" />
                <span className="ml-2">Twitter</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-green-600 hover:text-green-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;