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
  const { isDarkMode } = useDarkMode();
  const [goalItem] = useState({
    name: '아이폰 15',
    amount: 1500000,
  });
  const currentSavings = 500000;

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <header className="p-4 border-b">
        <nav className="flex justify-around">
          <a href="/" className="font-medium">홈</a>
          <a href="/today" className="font-medium">오늘의 저축</a>
          <a href="/points" className="font-medium">내 포인트</a>
          <a href="/savings" className="font-medium">저축 현황</a>
          <a href="/settings" className="font-medium">설정</a>
        </nav>
      </header>
      
      <main className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">티끌모아태산</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-6">저축 목표</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">목표 품목 설정</h3>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              설정하기
            </button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">현재 목표</h3>
            <h4 className="text-xl font-bold mb-2">{goalItem.name}</h4>
            <p className="text-lg">{goalItem.amount.toLocaleString()}원</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-bold mb-4">저축 현황</h2>
          <p className="text-lg mb-2">{currentSavings.toLocaleString()}원</p>
          <p className="text-gray-600">
            목표까지 {(goalItem.amount - currentSavings).toLocaleString()}원 남음
          </p>
        </section>
      </main>
    </div>
  );
}
