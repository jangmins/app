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
}

const SavingsContext = createContext<SavingsContextType | undefined>(undefined);

export function SavingsProvider({ children }: { children: ReactNode }) {
  const [monthlySavings, setMonthlySavings] = useState<MonthlySaving[]>([
    {
      month: '2024-03',
      savedAmount: 500000,
      goal: 600000,
      items: [
        { name: '커피 절약', amount: 150000, date: '2024-03-01' },
        { name: '배달음식 절약', amount: 200000, date: '2024-03-02' },
        { name: '간식 절약', amount: 150000, date: '2024-03-03' },
      ],
    },
    {
      month: '2024-02',
      savedAmount: 600000,
      goal: 500000,
      items: [],
    },
    {
      month: '2024-01',
      savedAmount: 450000,
      goal: 500000,
      items: [],
    },
  ]);

  const addSaving = (newItem: SavingItem) => {
    setMonthlySavings(prevSavings => {
      const currentMonth = new Date().toISOString().slice(0, 7);
      const updatedSavings = prevSavings.map(saving => {
        if (saving.month === currentMonth) {
          const updatedItems = [...saving.items, newItem];
          const updatedAmount = updatedItems.reduce((sum, item) => sum + item.amount, 0);
          return {
            ...saving,
            savedAmount: updatedAmount,
            items: updatedItems,
          };
        }
        return saving;
      });
      return updatedSavings;
    });
  };

  return (
    <SavingsContext.Provider value={{ monthlySavings, addSaving }}>
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