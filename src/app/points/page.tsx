'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { useAppTitle } from '../context/AppTitleContext';

interface PointHistory {
  date: string;
  description: string;
  points: number;
  type: 'earned' | 'used';
}

export default function PointsPage() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();
  const [totalPoints] = useState(1250);

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
    <div className={`min-h-screen pt-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-green-950 to-gray-900' 
        : 'bg-gradient-to-b from-green-100 via-green-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-green-200' : 'text-green-900'}`}>포인트</h2>
          <div className="flex justify-center mb-4">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode ? 'bg-green-950 border-green-800 text-green-100' : 'bg-green-200 border-green-400 text-green-900'
            }`}>
              <h1 className={`text-xl font-semibold text-center`}>{appTitle}</h1>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-green-950' : 'bg-white border-green-200'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-green-200' : 'text-green-900'}`}>보유 포인트</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-200' : 'text-green-900'}`}>
                {totalPoints.toLocaleString()} P
              </p>
            </div>
            <p className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              현재 보유 포인트: {totalPoints.toLocaleString()} P
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-green-950' : 'bg-white border-green-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-green-200' : 'text-green-900'}`}>포인트 내역</h3>
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