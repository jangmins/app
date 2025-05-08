'use client';

import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';
import { 
  HomeIcon, 
  BanknotesIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const { isDarkMode } = useDarkMode();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } border-b`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col items-center">
            <HomeIcon className={`w-6 h-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`} />
            <span className={`text-xs mt-1 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>홈</span>
          </Link>
          <Link href="/today" className="flex flex-col items-center">
            <BanknotesIcon className={`w-6 h-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`} />
            <span className={`text-xs mt-1 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>오늘의 저축</span>
          </Link>
          <Link href="/savings" className="flex flex-col items-center">
            <ChartBarIcon className={`w-6 h-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`} />
            <span className={`text-xs mt-1 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>저축 현황</span>
          </Link>
          <Link href="/points" className="flex flex-col items-center">
            <CurrencyDollarIcon className={`w-6 h-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`} />
            <span className={`text-xs mt-1 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>내 포인트</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center">
            <Cog6ToothIcon className={`w-6 h-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`} />
            <span className={`text-xs mt-1 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>설정</span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 