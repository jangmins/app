'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiftIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from './context/DarkModeContext';

interface GoalItem {
  name: string;
  amount: number;
}

export default function HomePage() {
  const [goalItem, setGoalItem] = useState<GoalItem>({
    name: '아이폰 15',
    amount: 1500000,
  });
  const { isDarkMode } = useDarkMode();

  const [newGoal, setNewGoal] = useState({
    name: '',
    amount: '',
  });

  const handleSetGoal = () => {
    if (newGoal.name && newGoal.amount) {
      setGoalItem({
        name: newGoal.name,
        amount: parseInt(newGoal.amount),
      });
      setNewGoal({ name: '', amount: '' });
    }
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-blue-950 to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 via-blue-100 to-white'
    }`}>
      <Navbar />
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>티끌모아태산</h1>
          <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>저축 목표</h2>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-blue-900' : 'bg-white border-blue-100'
          } mb-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>목표 품목 설정</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newGoal.name}
                onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                className={`w-full border-2 p-3 rounded-lg focus:outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-blue-800 text-white placeholder-gray-400 focus:border-blue-600' 
                    : 'border-blue-200 focus:border-blue-500'
                }`}
                placeholder="목표 품목을 입력하세요 (예: 아이폰 15, 노트북 등)"
              />
              <div className="flex gap-4">
                <input
                  type="number"
                  value={newGoal.amount}
                  onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
                  className={`border-2 p-3 rounded-lg flex-1 focus:outline-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-blue-800 text-white placeholder-gray-400 focus:border-blue-600' 
                      : 'border-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="목표 금액을 입력하세요"
                />
                <button
                  onClick={handleSetGoal}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-blue-100 hover:from-blue-900 hover:to-blue-950'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                  }`}
                >
                  설정하기
                </button>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-blue-900' : 'bg-white border-blue-100'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>현재 목표</h3>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-32 h-32 flex items-center justify-center rounded-lg ${
                isDarkMode ? 'bg-blue-950' : 'bg-blue-50'
              }`}>
                <GiftIcon className={`w-16 h-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>{goalItem.name}</h4>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  {goalItem.amount.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-blue-900' : 'bg-white border-blue-100'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>저축 현황</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                500,000원
              </p>
            </div>
            <div className={`w-full rounded-full h-4 overflow-hidden ${isDarkMode ? 'bg-blue-950' : 'bg-blue-100'}`}>
              <div
                className={`h-4 rounded-full animate-flowing ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700'
                    : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500'
                }`}
                style={{ width: `${(500000 / goalItem.amount) * 100}%` }}
              ></div>
            </div>
            <p className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              목표까지 {goalItem.amount - 500000}원 남음
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
