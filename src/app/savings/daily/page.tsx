'use client';

import { useState } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { useAppTitle } from '../../context/AppTitleContext';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface SavingItem {
  name: string;
  amount: number;
}

interface DailySaving {
  date: string;
  totalAmount: number;
  items: SavingItem[];
}

export default function DailySavingsPage() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();

  // 일별 저축 데이터 (나중에 실제 데이터로 교체)
  const [dailySavings] = useState<DailySaving[]>([
    {
      date: '2024-03-15',
      totalAmount: 35000,
      items: [
        { name: '커피 절약', amount: 15000 },
        { name: '배달음식 절약', amount: 20000 },
      ],
    },
    {
      date: '2024-03-14',
      totalAmount: 40000,
      items: [
        { name: '간식 절약', amount: 10000 },
        { name: '외식 절약', amount: 30000 },
      ],
    },
    {
      date: '2024-03-13',
      totalAmount: 40000,
      items: [
        { name: '커피 절약', amount: 15000 },
        { name: '배달음식 절약', amount: 25000 },
      ],
    },
  ]);

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  return (
    <div className={`min-h-screen pt-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-900' 
        : 'bg-gradient-to-b from-indigo-100 via-indigo-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Link 
              href="/savings"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-indigo-900 text-indigo-100 hover:bg-indigo-800' 
                  : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
              }`}
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>돌아가기</span>
            </Link>
            <h2 className={`text-2xl font-bold ml-4 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-900'}`}>
              일별 저축 내역
            </h2>
          </div>

          {/* 일별 저축 목록 */}
          <div className="space-y-4">
            {dailySavings.map((day, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-indigo-900' 
                    : 'bg-white border-indigo-200'
                }`}
              >
                {/* 날짜 및 총액 */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-indigo-200' : 'text-indigo-900'
                  }`}>
                    {formatDate(day.date)}
                  </h3>
                  <span className={`text-xl font-bold ${
                    isDarkMode ? 'text-indigo-200' : 'text-indigo-900'
                  }`}>
                    {day.totalAmount.toLocaleString()}원
                  </span>
                </div>

                {/* 저축 항목 목록 */}
                <div className="space-y-2">
                  {day.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-indigo-50'
                      }`}
                    >
                      <span className={`${
                        isDarkMode ? 'text-indigo-200' : 'text-indigo-900'
                      }`}>
                        {item.name}
                      </span>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-indigo-200' : 'text-indigo-900'
                      }`}>
                        {item.amount.toLocaleString()}원
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 