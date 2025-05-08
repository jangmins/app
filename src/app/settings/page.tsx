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
    <div className={`min-h-screen pt-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-gray-100 via-gray-50 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="p-6 rounded-xl shadow-lg border bg-white border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">앱 설정</h3>
            
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">앱 제목</span>
                {isEditingTitle ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="px-3 py-1 rounded-lg border bg-white border-gray-300 text-gray-900"
                    />
                    <button
                      onClick={handleTitleSave}
                      className="px-3 py-1 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300"
                    >
                      저장
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">{appTitle}</span>
                    <button
                      onClick={() => setIsEditingTitle(true)}
                      className="px-3 py-1 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300"
                    >
                      수정
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-900 block">알림 설정</span>
                  <span className="text-gray-600 text-sm">저축 목표 달성 및 포인트 적립 알림</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-900 block">다크 모드</span>
                  <span className="text-gray-600 text-sm">어두운 테마로 전환</span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="relative inline-flex items-center cursor-pointer"
                >
                  <div className={`w-11 h-6 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full relative`}>
                    <div className={`absolute top-[2px] ${isDarkMode ? 'right-[2px]' : 'left-[2px]'} bg-white border-gray-300 border rounded-full h-5 w-5 transition-all`}></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-lg border bg-white border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">앱 정보</h2>
            <div className="space-y-2 text-gray-900">
              <p className="text-sm">티끌모아태산 v1.0.0</p>
              <p className="text-sm">© 2024 티끌모아태산. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 