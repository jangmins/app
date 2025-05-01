'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';

interface PointHistory {
  date: string;
  description: string;
  points: number;
  type: 'earned' | 'used';
}

export default function PointsPage() {
  const [totalPoints] = useState(1250);
  const { isDarkMode } = useDarkMode();

  const pointHistory: PointHistory[] = [
    {
      date: '2024-03-15',
      description: '절약 목표 달성',
      points: 100,
      type: 'earned',
    },
    {
      date: '2024-03-14',
      description: '포인트 사용',
      points: 50,
      type: 'used',
    },
    {
      date: '2024-03-13',
      description: '연속 저축 보너스',
      points: 200,
      type: 'earned',
    },
  ];

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-green-950 to-gray-900' 
        : 'bg-gradient-to-b from-green-50 via-green-100 to-white'
    }`}>
      <Navbar />
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>티끌모아태산</h1>
          <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>내 포인트</h2>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-green-900' : 'bg-white border-green-100'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>보유 포인트</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>
                {totalPoints.toLocaleString()} P
              </p>
            </div>
            <div className={`w-full rounded-full h-4 overflow-hidden ${isDarkMode ? 'bg-green-950' : 'bg-green-100'}`}>
              <div
                className={`h-4 rounded-full animate-flowing ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-green-700 via-green-600 to-green-700'
                    : 'bg-gradient-to-r from-green-500 via-green-600 to-green-500'
                }`}
                style={{ width: `${(totalPoints / 2000) * 100}%` }}
              ></div>
            </div>
            <p className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              다음 레벨까지 {2000 - totalPoints} P 남음
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-green-900' : 'bg-white border-green-100'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>포인트 내역</h3>
            <div className="space-y-4">
              {pointHistory.map((history, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    isDarkMode ? 'bg-green-950' : 'bg-green-50'
                  }`}
                >
                  <div>
                    <p className={`${isDarkMode ? 'text-green-200' : 'text-green-800'}`}>{history.description}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{history.date}</p>
                  </div>
                  <p className={`font-medium ${
                    history.type === 'earned' 
                      ? isDarkMode ? 'text-green-300' : 'text-green-600'
                      : isDarkMode ? 'text-red-300' : 'text-red-600'
                  }`}>
                    {history.type === 'earned' ? '+' : '-'}{history.points} P
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 