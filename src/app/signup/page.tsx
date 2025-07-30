'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Facebook, Twitter } from 'lucide-react';

const SignupPage = () => {
  const router = useRouter();

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
      // console.log("🚀 ~ handleSubmit ~ response:", response)

      const data = await response.json();
      // console.log("🚀 ~ handleSubmit ~ data:", data)

      if (!response.ok) throw new Error(data.error || 'Signup failed');

      toast.success('Account created successfully!');
      // if (data.token) localStorage.setItem('token', data.token);
      router.push('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
        alt="Signup background"
        fill
        className="object-cover absolute z-1"
        priority
      />
      <div className="absolute z-2 inset-0 bg-black opacity-60" />
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
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
                    placeholder="John"
                  />
                  {formErrors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
                    placeholder="Doe"
                  />
                  {formErrors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-600 mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
                  placeholder="Create a password"
                />
                {formErrors.password && (
                  <p className="text-sm text-red-600 mt-1">{formErrors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:bg-transparent focus:border-gray-400 text-gray-900 placeholder-gray-300 transition-all duration-200 placeholder:font-[300]"
                  placeholder="Confirm your password"
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