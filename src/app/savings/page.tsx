'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';

interface MonthlySaving {
  month: string;
  savedAmount: number;
  goal: number;
  items: {
    name: string;
    amount: number;
  }[];
}

export default function SavingsPage() {
  const [account] = useState({
    name: '티끌모아태산 통장',
    id: '123-456-789012',
    type: '자유저축',
    balance: 1500000,
    lastTransaction: '2024-03-15',
  });

  const { isDarkMode } = useDarkMode();

  const currentMonthSaving: MonthlySaving = {
    month: '2024-03',
    savedAmount: 500000,
    goal: 600000,
    items: [
      { name: '커피 절약', amount: 150000 },
      { name: '배달음식 절약', amount: 200000 },
      { name: '간식 절약', amount: 150000 },
    ],
  };

  const monthlySavings: MonthlySaving[] = [
    {
      month: '2024-02',
      savedAmount: 600000,
      goal: 500000,
      items: [],
    },
    {
      month: '2024-01',
      savedAmount: 450000,
      goal: 500000,
      items: [],
    },
    {
      month: '2023-12',
      savedAmount: 550000,
      goal: 500000,
      items: [],
    },
  ];

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900' 
        : 'bg-gradient-to-b from-purple-50 via-purple-100 to-white'
    }`}>
      <Navbar />
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>티끌모아태산</h1>
          <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}>전체 저축 현황</h2>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>내 티끌</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                {account.balance.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          } mb-6`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>{account.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{account.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'
              }`}>
                {account.type}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>최근 거래</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{account.lastTransaction}</p>
              </div>
              <p className={`text-xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                {account.balance.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>이달의 절약</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className={`text-lg font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>절약 성공까지</p>
                <p className={`text-lg font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {Math.round((new Date().getDate() / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) * 100)}%
                </p>
              </div>
              <div className={`w-full rounded-full h-4 overflow-hidden ${isDarkMode ? 'bg-purple-950' : 'bg-purple-100'}`}>
                <div
                  className={`h-4 rounded-full animate-flowing ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700'
                      : 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500'
                  }`}
                  style={{ width: `${(new Date().getDate() / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) * 100}%` }}
                ></div>
              </div>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {new Date().getDate()}일 / {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}일
              </p>
            </div>

            <div>
              <h4 className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>절약 내역</h4>
              {currentMonthSaving.items.length > 0 ? (
                <div className="space-y-3">
                  {currentMonthSaving.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        isDarkMode ? 'bg-purple-950' : 'bg-purple-50'
                      }`}
                    >
                      <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>{item.name}</p>
                      <p className={`font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                        {item.amount.toLocaleString()}원
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={`text-center py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>아직 절약한 내역이 없습니다.</p>
              )}
            </div>

            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>월별 절약 내역</h4>
              <div className="space-y-3">
                {monthlySavings.map((saving) => (
                  <div
                    key={saving.month}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      isDarkMode ? 'bg-purple-950' : 'bg-purple-50'
                    }`}
                  >
                    <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                      {saving.month.replace('-', '년 ')}월
                    </p>
                    <div className="flex items-center gap-4">
                      <p className={`${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                        {saving.savedAmount.toLocaleString()}원
                      </p>
                      <span className={`text-sm ${
                        saving.savedAmount >= saving.goal 
                          ? isDarkMode ? 'text-green-300' : 'text-green-600'
                          : isDarkMode ? 'text-red-300' : 'text-red-600'
                      }`}>
                        {saving.savedAmount >= saving.goal ? '달성' : '미달성'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 