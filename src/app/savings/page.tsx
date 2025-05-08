'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { useAppTitle } from '../context/AppTitleContext';
import { useSavings } from '../context/SavingsContext';
import Link from 'next/link';

interface SavingItem {
  name: string;
  amount: number;
  date: string;
}

interface MonthlySaving {
  month: string;
  savedAmount: number;
  goal: number;
  items: SavingItem[];
}

export default function SavingsPage() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();
  const { monthlySavings } = useSavings();

  const [account] = useState({
    name: '티끌모아태산 통장',
    id: '123-456-789012',
    type: '자유저축',
    balance: 1500000,
    lastTransaction: '2024-03-15',
  });

  const currentMonthSaving = monthlySavings[0];

  return (
    <div className={`min-h-screen pt-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900' 
        : 'bg-gradient-to-b from-purple-100 via-purple-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="w-24"></div>
            <h2 className={`text-2xl font-bold text-center ${
              isDarkMode ? 'text-purple-200' : 'text-purple-900'
            }`}>전체 저축 현황</h2>
            <div className="w-24">
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-purple-800 text-purple-100 hover:bg-purple-700' 
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                입금하기
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode 
                ? 'bg-purple-950/40 border-purple-700 text-purple-100' 
                : 'bg-purple-100/60 border-purple-200 text-purple-800'
            }`}>
              <h1 className="text-xl font-semibold text-center">{appTitle}</h1>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-purple-900' 
              : 'bg-white/70 border-purple-200'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>{account.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{account.id}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>최근 거래</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{account.lastTransaction}</p>
              </div>
              <p className={`text-xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                {account.balance.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border mt-6 ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>일별 저축 현황</h3>
              <Link 
                href="/savings/daily"
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-purple-950 text-purple-100 hover:bg-purple-900' 
                    : 'bg-purple-200 text-purple-900 hover:bg-purple-300'
                }`}
              >
                자세히 보기
              </Link>
            </div>
            <div className="space-y-4">
              {currentMonthSaving.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
                  }`}
                >
                  <div>
                    <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>{item.name}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                  </div>
                  <p className={`font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                    {item.amount.toLocaleString()}원
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border mt-6 ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>월별 저축 현황</h3>
            <div className="space-y-4">
              {monthlySavings.slice(0, 2).map((saving, index) => {
                const isCurrentMonth = saving.month === new Date().toISOString().slice(0, 7);
                const isPreviousMonth = index === 1;
                return (
                  <div
                    key={saving.month}
                    className={`p-4 rounded-lg ${
                      isDarkMode ? 'bg-purple-950' : 'bg-purple-50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className={`text-lg font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                            {saving.month.replace('-', '년 ')}월
                          </p>
                          {isCurrentMonth && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDarkMode 
                                ? 'bg-purple-800 text-purple-100' 
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              현재
                            </span>
                          )}
                          {isPreviousMonth && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDarkMode 
                                ? 'bg-purple-700 text-purple-100' 
                                : 'bg-purple-200 text-purple-800'
                            }`}>
                              이전달
                            </span>
                          )}
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                          목표: {saving.goal.toLocaleString()}원
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl font-bold ${isDarkMode ? 'text-purple-100' : 'text-purple-800'}`}>
                          {saving.savedAmount.toLocaleString()}원
                        </p>
                        <p className={`text-sm font-medium ${
                          saving.savedAmount >= saving.goal 
                            ? isDarkMode ? 'text-green-300' : 'text-green-600'
                            : isDarkMode ? 'text-red-300' : 'text-red-600'
                        }`}>
                          {saving.savedAmount >= saving.goal ? '목표 달성!' : '목표 미달성'}
                        </p>
                      </div>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                    }`}>
                      <div
                        className={`h-full rounded-full ${
                          saving.savedAmount >= saving.goal
                            ? isDarkMode ? 'bg-green-500' : 'bg-green-400'
                            : isDarkMode ? 'bg-red-500' : 'bg-red-400'
                        }`}
                        style={{ width: `${Math.min((saving.savedAmount / saving.goal) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 이전 기록 */}
            {monthlySavings.length > 2 && (
              <>
                <div className={`mt-6 pt-6 border-t ${
                  isDarkMode ? 'border-purple-900' : 'border-purple-100'
                }`}>
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                    이전 기록
                  </h4>
                  <div className="space-y-3">
                    {monthlySavings.slice(2).map((saving) => (
                      <div
                        key={saving.month}
                        className={`p-3 rounded-lg ${
                          isDarkMode ? 'bg-purple-950/50' : 'bg-purple-50/50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className={`text-base font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                              {saving.month.replace('-', '년 ')}월
                            </p>
                            <p className={`text-xs ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                              목표: {saving.goal.toLocaleString()}원
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`text-lg font-bold ${isDarkMode ? 'text-purple-100' : 'text-purple-800'}`}>
                              {saving.savedAmount.toLocaleString()}원
                            </p>
                            <p className={`text-xs font-medium ${
                              saving.savedAmount >= saving.goal 
                                ? isDarkMode ? 'text-green-300' : 'text-green-600'
                                : isDarkMode ? 'text-red-300' : 'text-red-600'
                            }`}>
                              {saving.savedAmount >= saving.goal ? '달성' : '미달성'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 flex justify-start">
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isDarkMode 
                  ? 'bg-red-800 text-red-100 hover:bg-red-700' 
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              출금하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}