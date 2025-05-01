'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 via-gray-100 to-white'}`}>
      <Navbar />
      <main className="p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>티끌모아태산</h1>
          <h2 className={`text-2xl font-semibold mb-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>설정</h2>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } space-y-6`}>
            {/* 알림 설정 */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>알림 설정</h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>저축 목표 달성 및 포인트 적립 알림</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-11' : 'translate-x-1'
                  }`}
                />
                <span className={`absolute text-xs font-medium ${notifications ? 'text-white left-2' : 'text-gray-500 right-2'}`}>
                  {notifications ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

            {/* 다크 모드 */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>다크 모드</h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>어두운 테마로 전환</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-16 items-center rounded-full transition-colors ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-11' : 'translate-x-1'
                  }`}
                />
                <span className={`absolute text-xs font-medium ${isDarkMode ? 'text-white left-2' : 'text-gray-500 right-2'}`}>
                  {isDarkMode ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

            {/* 앱 정보 */}
            <div className={`pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>앱 정보</h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>티끌모아태산 v1.0.0</p>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>© 2024 티끌모아태산. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 