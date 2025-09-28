'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import UserDropdown from './UserDropdown';
import UserDropdownMobile from './UserDropdownMobile';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on component mount
    const token = localStorage.getItem('token');
    // console.log("🚀 ~ Navbar ~ token:", token)
    const userData = localStorage.getItem('user');
    // console.log("🚀 ~ Navbar ~ userData:", userData)

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [pathname]); // Re-check when pathname changes

  useEffect(() => {
    // Listen for authentication state changes
    const handleAuthStateChange = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');

      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    window.addEventListener('authStateChanged', handleAuthStateChange);

    return () => {
      window.removeEventListener('authStateChanged', handleAuthStateChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setIsMenuOpen(false);

    // Dispatch custom event to notify other components of authentication change
    window.dispatchEvent(new CustomEvent('authStateChanged'));

    router.push('/login');
  };

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
    { href: '/users', label: 'Users' },
  ];

  const getLinkClasses = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/home" className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">DevForce</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={getLinkClasses(href)}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated && user ? (
              <UserDropdown user={user} onLogout={handleLogout} />
            ) : (
              <>
                <Link href="/login" className={getLinkClasses('/login')}>
                  Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  Sign up
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              <svg className="block h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen &&
        <div className="fixed inset-0 bg-black opacity-60 z-40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
      }

      <div className={`fixed top-0 left-0 w-[270px] h-full overflow-scroll bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <Link href="/home" className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">AppName</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-100 focus:outline-none transition-colors duration-200"
          >
            <X className="w-5 h-5 transition" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)} className={`block px-4 py-2 rounded-lg text-base transition-colors duration-200 ${pathname === href ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
              {label}
            </Link>
          ))}

          <hr className="my-3 border-gray-200" />

          {isAuthenticated && user ? (
            <UserDropdownMobile
              user={user}
              onLogout={handleLogout}
              onCloseMenu={() => setIsMenuOpen(false)}
            />
          ) : (
            <>
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-2 rounded-lg text-base transition-colors duration-200 ${pathname === '/login' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                Login
              </Link>

              <Link href="/signup" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;