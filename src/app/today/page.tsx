'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { useAppTitle } from '../context/AppTitleContext';
import { useSavings } from '../context/SavingsContext';

export default function TodayPage() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();
  const { monthlySavings, addSaving } = useSavings();
  const [savingName, setSavingName] = useState('');
  const [savingAmount, setSavingAmount] = useState('');

  const currentMonth = new Date().toISOString().slice(0, 7);
  const today = new Date().toISOString().split('T')[0];
  const currentMonthSavings = monthlySavings.find(saving => saving.month === currentMonth) || {
    month: currentMonth,
    savedAmount: 0,
    goal: 0,
    items: []
  };

  const todaySavings = currentMonthSavings.items.filter(item => item.date === today);

  const handleAddSaving = () => {
    if (savingName && savingAmount) {
      const newSaving = {
        name: savingName,
        amount: parseInt(savingAmount),
        date: today,
      };
      addSaving(newSaving);
      setSavingName('');
      setSavingAmount('');
      alert('저축이 성공적으로 저장되었습니다!');
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-orange-950 to-gray-900' 
        : 'bg-gradient-to-b from-orange-100 via-orange-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode ? 'bg-orange-950 border-orange-800 text-orange-100' : 'bg-orange-200 border-orange-400 text-orange-900'
            }`}>
              <h1 className={`text-xl font-semibold text-center`}>{appTitle}</h1>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border mb-4 ${
            isDarkMode ? 'bg-gray-800 border-orange-950' : 'bg-white border-orange-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>오늘의 저축</h2>
            
            <div className="space-y-4">
              <div>
                <label className={`block mb-2 ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>
                  절약 항목
                </label>
                <input
                  type="text"
                  value={savingName}
                  onChange={(e) => setSavingName(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-orange-900 text-white' 
                      : 'bg-white border-orange-300 text-gray-900'
                  }`}
                  placeholder="절약한 항목을 입력하세요"
                />
              </div>
              
              <div>
                <label className={`block mb-2 ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>
                  절약 금액
                </label>
                <input
                  type="number"
                  value={savingAmount}
                  onChange={(e) => setSavingAmount(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-orange-900 text-white' 
                      : 'bg-white border-orange-300 text-gray-900'
                  }`}
                  placeholder="절약한 금액을 입력하세요"
                />
              </div>

              <button
                onClick={handleAddSaving}
                className={`w-full py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                저장하기
              </button>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-orange-950' : 'bg-white border-orange-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>
              오늘의 저축 내역
            </h2>
            <div className="space-y-2">
              {todaySavings.length > 0 ? (
                todaySavings.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-orange-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>
                        {item.name}
                      </span>
                      <span className={`font-bold ${isDarkMode ? 'text-orange-200' : 'text-orange-900'}`}>
                        {item.amount.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`text-center py-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  오늘의 저축 내역이 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}