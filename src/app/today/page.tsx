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
    <div className={`min-h-screen pt-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-950 via-amber-950 to-gray-900' 
        : 'bg-gradient-to-b from-amber-100 via-amber-200 to-white'
    }`}>
      <Navbar />
      <main className="p-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold mb-4 text-center ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>오늘의 저축</h2>

          <div className="flex justify-center mb-6">
            <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
              isDarkMode 
                ? 'bg-amber-950/40 border-amber-700 text-amber-100' 
                : 'bg-amber-100/60 border-amber-200 text-amber-800'
            }`}>
              <h1 className="text-xl font-semibold text-center">{appTitle}</h1>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border mb-6 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-amber-900' 
              : 'bg-white/70 border-amber-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>오늘의 저축</h2>
            
            <div className="space-y-4">
              <div>
                <label className={`block mb-2 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                  절약 항목
                </label>
                <input
                  type="text"
                  value={savingName}
                  onChange={(e) => setSavingName(e.target.value)}
                  className={`w-full p-2 rounded-lg mb-4 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-amber-800 text-amber-100' 
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                  placeholder="절약한 항목을 입력하세요"
                />
              </div>
              
              <div>
                <label className={`block mb-2 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                  절약 금액
                </label>
                <input
                  type="number"
                  value={savingAmount}
                  onChange={(e) => setSavingAmount(e.target.value)}
                  className={`w-full p-2 rounded-lg mb-4 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-amber-800 text-amber-100' 
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                  placeholder="절약한 금액을 입력하세요"
                />
              </div>

              <button
                onClick={handleAddSaving}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-amber-800 text-amber-100 hover:bg-amber-700' 
                    : 'bg-amber-500 text-white hover:bg-amber-600'
                }`}
              >
                저장하기
              </button>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
              오늘의 저축 내역
            </h2>
            <div className="space-y-2">
              {todaySavings.length > 0 ? (
                todaySavings.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-purple-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                        {item.name}
                      </span>
                      <span className={`font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
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