'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { useAppTitle } from '../context/AppTitleContext';

export default function SettingsPage() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { appTitle, setAppTitle } = useAppTitle();
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
        : 'bg-gradient-to-b from-purple-50 via-purple-100 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>설정</h2>
          
          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-900' : 'bg-white border-purple-100'
          } mb-6`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>앱 설정</h3>
            
            <div className="mb-4">
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

            <div className="flex justify-between items-center">
              <span className={`${isDarkMode ? 'text-purple-200' : 'text-purple-800'}`}>다크 모드</span>
              <button
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded-xl font-semibold ${
                  isDarkMode ? 'bg-purple-800 text-white hover:bg-purple-900' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                }`}
              >
                {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
              </button>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } mb-6`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>앱 설정</h2>
            
            <div className="space-y-6">
              {/* 알림 설정 */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>저축 목표 달성 알림</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>목표 달성 시 알림을 받습니다</p>
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
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>앱 정보</h2>
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