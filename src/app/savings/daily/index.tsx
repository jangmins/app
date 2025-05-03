'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useDarkMode } from '../../context/DarkModeContext';
import { useAppTitle } from '../../context/AppTitleContext';
import Link from 'next/link';

interface DailySaving {
  date: string;
  items: {
    name: string;
    amount: number;
  }[];
}

export default function DailySavingsPage() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();

  const [dailySavings] = useState<DailySaving[]>([
    {
      date: '2024-03-15',
      items: [
        { name: '커피 절약', amount: 15000 },
        { name: '배달음식 절약', amount: 20000 },
      ],
    },
    {
      date: '2024-03-14',
      items: [
        { name: '간식 절약', amount: 10000 },
        { name: '외식 절약', amount: 30000 },
      ],
    },
    {
      date: '2024-03-13',
      items: [
        { name: '커피 절약', amount: 15000 },
        { name: '배달음식 절약', amount: 25000 },
      ],
    },
  ]);

  return (
    <div className={`min-h-screen pt-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900' 
        : 'bg-gradient-to-b from-purple-100 via-purple-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <Link 
              href="/savings"
              className={`px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-white text-purple-900 hover:bg-gray-100' 
                  : 'bg-white text-purple-900 hover:bg-gray-100'
              }`}
            >
              돌아가기
            </Link>
            <h2 className={`text-2xl font-bold mx-auto ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>일별 저축 내역</h2>
            <div className="w-24"></div>
          </div>

          <div className="space-y-6">
            {dailySavings.map((daily, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg border ${
                  isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                  {daily.date}
                </h3>
                <div className="space-y-3">
                  {daily.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
                      }`}
                    >
                      <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>{item.name}</p>
                      <p className={`font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                        {item.amount.toLocaleString()}원
                      </p>
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