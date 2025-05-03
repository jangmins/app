'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkMode } = useDarkMode();

  return (
    <nav className={`fixed top-0 left-0 right-0 shadow-md py-2 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around">
          <Link
            href="/"
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              pathname === '/'
                ? `${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`
                : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">홈</span>
          </Link>
          <Link
            href="/today"
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              pathname === '/today'
                ? `${isDarkMode ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-600'}`
                : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">오늘</span>
          </Link>
          <Link
            href="/savings"
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              pathname === '/savings'
                ? `${isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'}`
                : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">저축</span>
          </Link>
          <Link
            href="/points"
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              pathname === '/points'
                ? `${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-600'}`
                : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-xs mt-1">포인트</span>
          </Link>
          <Link
            href="/settings"
            className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              pathname === '/settings'
                ? `${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`
                : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs mt-1">설정</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 