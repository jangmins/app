'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkMode } = useDarkMode();

  return (
    <nav className={`shadow-md py-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className={`flex items-center gap-6 p-2 rounded-2xl border-2 shadow-lg ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'
          }`}>
            <Link
              href="/"
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/'
                  ? `${isDarkMode ? 'bg-blue-900 text-blue-300 border-blue-800' : 'bg-blue-100 text-blue-600 border-blue-200'} shadow-sm border`
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'text-gray-600 hover:bg-gray-50 hover:border-gray-200'} hover:shadow-sm hover:border`
              }`}
            >
              홈
            </Link>
            <Link
              href="/today"
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/today'
                  ? `${isDarkMode ? 'bg-amber-900 text-amber-300 border-amber-800' : 'bg-amber-100 text-amber-600 border-amber-200'} shadow-sm border`
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'text-gray-600 hover:bg-gray-50 hover:border-gray-200'} hover:shadow-sm hover:border`
              }`}
            >
              오늘의 저축
            </Link>
            <Link
              href="/points"
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/points'
                  ? `${isDarkMode ? 'bg-green-900 text-green-300 border-green-800' : 'bg-green-100 text-green-600 border-green-200'} shadow-sm border`
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'text-gray-600 hover:bg-gray-50 hover:border-gray-200'} hover:shadow-sm hover:border`
              }`}
            >
              내 포인트
            </Link>
            <Link
              href="/savings"
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/savings'
                  ? `${isDarkMode ? 'bg-purple-900 text-purple-300 border-purple-800' : 'bg-purple-100 text-purple-600 border-purple-200'} shadow-sm border`
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'text-gray-600 hover:bg-gray-50 hover:border-gray-200'} hover:shadow-sm hover:border`
              }`}
            >
              저축 현황
            </Link>
            <Link
              href="/settings"
              className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/settings'
                  ? `${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-gray-100 text-gray-600 border-gray-200'} shadow-sm border`
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:border-gray-600' : 'text-gray-500 hover:bg-gray-50 hover:border-gray-200'} hover:shadow-sm hover:border`
              }`}
            >
              설정
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 