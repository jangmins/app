'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';

interface TodaySaving {
  date: string;
  items: {
    name: string;
    amount: number;
  }[];
}

export default function TodayPage() {
  const [todaySaving, setTodaySaving] = useState<TodaySaving>({
    date: new Date().toISOString().split('T')[0],
    items: [],
  });

  const { isDarkMode } = useDarkMode();

  const [newItem, setNewItem] = useState({
    name: '',
    amount: '',
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.amount) {
      setTodaySaving({
        ...todaySaving,
        items: [
          ...todaySaving.items,
          {
            name: newItem.name,
            amount: parseInt(newItem.amount),
          },
        ],
      });
      setNewItem({ name: '', amount: '' });
    }
  };

  const totalAmount = todaySaving.items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-amber-950 to-gray-900' 
        : 'bg-gradient-to-b from-amber-50 via-amber-100 to-white'
    }`}>
      <Navbar />
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-amber-200' : 'text-amber-800'}`}>티끌모아태산</h1>
          <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-amber-100' : 'text-amber-700'}`}>오늘의 저축</h2>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-amber-800' : 'bg-white border-amber-100'
          } mb-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>절약 항목 추가</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className={`w-full border-2 p-3 rounded-lg focus:outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-amber-700 text-white placeholder-gray-400 focus:border-amber-500' 
                    : 'border-amber-200 focus:border-amber-500'
                }`}
                placeholder="절약할 품목을 입력하세요 (예: 커피, 배달음식 등)"
              />
              <div className="flex gap-4">
                <input
                  type="number"
                  value={newItem.amount}
                  onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                  className={`border-2 p-3 rounded-lg flex-1 focus:outline-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-amber-700 text-white placeholder-gray-400 focus:border-amber-500' 
                      : 'border-amber-200 focus:border-amber-500'
                  }`}
                  placeholder="절약할 금액을 입력하세요"
                />
                <button
                  onClick={handleAddItem}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 hover:from-amber-700 hover:to-amber-800'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800'
                  }`}
                >
                  추가하기
                </button>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-amber-800' : 'bg-white border-amber-100'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>오늘의 절약</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-amber-200' : 'text-amber-600'}`}>
                {totalAmount.toLocaleString()}원
              </p>
            </div>
            <div className={`w-full rounded-full h-4 overflow-hidden ${isDarkMode ? 'bg-amber-900' : 'bg-amber-100'}`}>
              <div
                className={`h-4 rounded-full animate-flowing ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500'
                    : 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500'
                }`}
                style={{ width: '100%' }}
              ></div>
            </div>
            <p className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              오늘 절약한 금액: {totalAmount.toLocaleString()}원
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-amber-800' : 'bg-white border-amber-100'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>절약 항목</h3>
            <div className="space-y-4">
              {todaySaving.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    isDarkMode ? 'bg-amber-900/50' : 'bg-amber-50'
                  }`}
                >
                  <div>
                    <p className={`${isDarkMode ? 'text-amber-100' : 'text-amber-800'}`}>{item.name}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.amount.toLocaleString()}원</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-green-900/50 text-green-200' : 'bg-green-100 text-green-600'
                  }`}>
                    절약 완료
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 