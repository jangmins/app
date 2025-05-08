'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from './context/DarkModeContext';
import { useAppTitle } from './context/AppTitleContext';

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
  const { appTitle } = useAppTitle();
  const [isEditing, setIsEditing] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    amount: '',
  });

  const handleEditClick = () => {
    setNewGoal({
      name: goalItem.name,
      amount: goalItem.amount.toString(),
    });
    setIsEditing(true);
  };

  const handleSaveGoal = () => {
    if (newGoal.name && newGoal.amount) {
      setGoalItem({
        name: newGoal.name,
        amount: parseInt(newGoal.amount),
      });
      setIsEditing(false);
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-950 via-sky-950 to-slate-950' 
        : 'bg-gradient-to-b from-sky-200 via-blue-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold mb-4 text-center ${
            isDarkMode ? 'text-sky-200' : 'text-sky-800'
          }`}>저축 목표</h2>
          <div className="flex justify-center mb-6">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode 
                ? 'bg-sky-900/40 border-sky-700 text-sky-100' 
                : 'bg-sky-100/60 border-sky-200 text-sky-800'
            }`}>
              <h1 className="text-xl font-semibold text-center">{appTitle}</h1>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl shadow-lg border mb-6 ${
            isDarkMode 
              ? 'bg-slate-800/30 border-sky-900/50' 
              : 'bg-white/70 border-sky-100'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                isDarkMode ? 'bg-sky-900/50' : 'bg-sky-100'
              }`}>
                <GiftIcon className={`w-6 h-6 ${
                  isDarkMode ? 'text-sky-200' : 'text-sky-600'
                }`} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-sky-200' : 'text-sky-800'
                }`}>
                  {goalItem.name}
                </h3>
                <p className={`text-2xl font-bold ${
                  isDarkMode ? 'text-sky-100' : 'text-sky-700'
                }`}>
                  {goalItem.amount.toLocaleString()}원
                </p>
              </div>
            </div>

            <button 
              onClick={handleEditClick}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode 
                  ? 'bg-sky-800/50 text-sky-100 hover:bg-sky-700/50' 
                  : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
              }`}
            >
              목표 수정하기
            </button>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode 
              ? 'bg-slate-800/30 border-sky-900/50' 
              : 'bg-white/70 border-sky-100'
          }`}>
            <div className="flex justify-between items-center mb-3">
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-sky-200' : 'text-sky-800'
              }`}>
                현재 저축액
              </h3>
              <p className={`text-2xl font-bold ${
                isDarkMode ? 'text-sky-100' : 'text-sky-700'
              }`}>
                500,000원
              </p>
            </div>

            <p className={`text-sm text-right ${
              isDarkMode ? 'text-sky-300' : 'text-sky-600'
            }`}>
              목표까지 {(goalItem.amount - 500000).toLocaleString()}원 남음
            </p>
          </div>
        </div>
      </main>

      {/* 목표 수정 모달 */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md p-6 rounded-xl shadow-lg ${
            isDarkMode 
              ? 'bg-slate-800 border-sky-900' 
              : 'bg-white border-sky-100'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${
                isDarkMode ? 'text-sky-200' : 'text-sky-800'
              }`}>
                목표 수정
              </h3>
              <button 
                onClick={() => setIsEditing(false)}
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'text-sky-200 hover:bg-slate-700' 
                    : 'text-sky-600 hover:bg-sky-50'
                }`}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-sky-200' : 'text-sky-800'
                }`}>
                  목표 품목
                </label>
                <input
                  type="text"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-sky-800 text-sky-100' 
                      : 'bg-white border-sky-200 text-sky-900'
                  }`}
                  placeholder="목표 품목을 입력하세요"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-sky-200' : 'text-sky-800'
                }`}>
                  목표 금액
                </label>
                <input
                  type="number"
                  value={newGoal.amount}
                  onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
                  className={`w-full p-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-sky-800 text-sky-100' 
                      : 'bg-white border-sky-200 text-sky-900'
                  }`}
                  placeholder="목표 금액을 입력하세요"
                />
              </div>

              <button
                onClick={handleSaveGoal}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-sky-800 text-sky-100 hover:bg-sky-700' 
                    : 'bg-sky-500 text-white hover:bg-sky-600'
                }`}
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}