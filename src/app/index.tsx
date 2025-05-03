'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiftIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from './context/DarkModeContext';
import { useAppTitle } from './context/AppTitleContext';

interface GoalItem {
  name: string;
  amount: number;
}

interface SavingItem {
  name: string;
  amount: number;
}

interface DailySaving {
  date: string;
  items: {
    name: string;
    amount: number;
  }[];
}

export default function HomePage() {
  const [goalItem, setGoalItem] = useState<GoalItem>({
    name: '아이폰 15',
    amount: 1500000,
  });
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { appTitle, setAppTitle } = useAppTitle();

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

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(appTitle);
  const [notifications, setNotifications] = useState(true);

  const handleTitleSave = () => {
    setAppTitle(newTitle);
    setIsEditingTitle(false);
  };

  return (
    <div className={`min-h-screen pt-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900' 
        : 'bg-gradient-to-b from-purple-100 via-purple-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>저축 목표</h2>
          <div className="flex justify-center mb-4">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode ? 'bg-purple-950 border-purple-800 text-purple-100' : 'bg-purple-200 border-purple-400 text-purple-900'
            }`}>
              <h1 className={`text-xl font-semibold text-center`}>{appTitle}</h1>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          } mb-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>목표 품목 설정</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newGoal.name}
                onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                className={`w-full border-2 p-3 rounded-lg focus:outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-purple-800 text-white placeholder-gray-400 focus:border-purple-600' 
                    : 'border-purple-200 focus:border-purple-500'
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
                      ? 'bg-gray-700 border-purple-800 text-white placeholder-gray-400 focus:border-purple-600' 
                      : 'border-purple-200 focus:border-purple-500'
                  }`}
                  placeholder="목표 금액을 입력하세요"
                />
                <button
                  onClick={handleSetGoal}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-purple-800 to-purple-900 text-purple-100 hover:from-purple-900 hover:to-purple-950'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                  }`}
                >
                  설정하기
                </button>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          } mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>현재 목표</h3>
            </div>
            <div className="flex items-center gap-6">
              <div className={`w-32 h-32 flex items-center justify-center rounded-lg ${
                isDarkMode ? 'bg-purple-950' : 'bg-purple-100'
              }`}>
                <GiftIcon className={`w-16 h-16 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`} />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-100' : 'text-purple-900'}`}>{goalItem.name}</h4>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                  {goalItem.amount.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>저축 현황</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                500,000원
              </p>
            </div>
            <p className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              목표까지 {goalItem.amount - 500000}원 남음
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border mb-6 ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>앱 설정</h3>
            
            {/* 앱 제목 설정 */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <span className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>앱 제목</span>
                {isEditingTitle ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className={`px-3 py-1 rounded-lg border ${
                        isDarkMode ? 'bg-gray-700 border-purple-800 text-white' : 'bg-white border-purple-300 text-gray-800'
                      }`}
                    />
                    <button
                      onClick={handleTitleSave}
                      className={`px-3 py-1 rounded-lg ${
                        isDarkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      저장
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className={`${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>{appTitle}</span>
                    <button
                      onClick={() => setIsEditingTitle(true)}
                      className={`px-3 py-1 rounded-lg ${
                        isDarkMode ? 'bg-purple-800 text-white hover:bg-purple-900' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                      }`}
                    >
                      수정
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 알림 설정 */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>알림 설정</span>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>저축 목표 달성 알림</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors ${
                    notifications ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-11' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* 다크모드 설정 */}
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <span className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>다크 모드</span>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>어두운 테마로 전환</p>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors ${
                    isDarkMode ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-11' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* 앱 정보 */}
          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>앱 정보</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p className="text-sm">티끌모아태산 v1.0.0</p>
              <p className="text-sm">© 2024 티끌모아태산. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
