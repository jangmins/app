'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SavingItem {
  name: string;
  amount: number;
  date: string;
}

interface MonthlySaving {
  month: string;
  savedAmount: number;
  goal: number;
  items: SavingItem[];
}

interface SavingsContextType {
  monthlySavings: MonthlySaving[];
  addSaving: (item: SavingItem) => void;
  totalSaved: number;
}

const SavingsContext = createContext<SavingsContextType | undefined>(undefined);

export function SavingsProvider({ children }: { children: ReactNode }) {
  const [monthlySavings, setMonthlySavings] = useState<MonthlySaving[]>([
    {
      month: '2024-03',
      savedAmount: 500000,
      goal: 1000000,
      items: [
        { name: '커피 절약', amount: 15000, date: '2024-03-15' },
        { name: '배달음식 절약', amount: 20000, date: '2024-03-15' },
        { name: '간식 절약', amount: 10000, date: '2024-03-14' },
      ],
    }
  ]);

  const addSaving = (item: SavingItem) => {
    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    
    setMonthlySavings(prev => {
      const monthIndex = prev.findIndex(m => m.month === currentMonth);
      if (monthIndex === -1) {
        // 새로운 월 추가
        return [...prev, {
          month: currentMonth,
          savedAmount: item.amount,
          goal: 1000000,
          items: [item]
        }];
      } else {
        // 기존 월 업데이트
        const newSavings = [...prev];
        newSavings[monthIndex] = {
          ...newSavings[monthIndex],
          savedAmount: newSavings[monthIndex].savedAmount + item.amount,
          items: [...newSavings[monthIndex].items, item]
        };
        return newSavings;
      }
    });
  };

  const totalSaved = monthlySavings.reduce((sum, month) => sum + month.savedAmount, 0);

  return (
    <SavingsContext.Provider value={{ monthlySavings, addSaving, totalSaved }}>
      {children}
    </SavingsContext.Provider>
  );
}

export function useSavings() {
  const context = useContext(SavingsContext);
  if (context === undefined) {
    throw new Error('useSavings must be used within a SavingsProvider');
  }
  return context;
} 