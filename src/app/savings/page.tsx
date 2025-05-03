'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../context/DarkModeContext';
import { useAppTitle } from '../context/AppTitleContext';
import Link from 'next/link';
import { useSavings } from '../context/SavingsContext';

interface MonthlySaving {
  month: string;
  savedAmount: number;
  goal: number;
  items: {
    name: string;
    amount: number;
    date: string;
  }[];
}

export default function SavingsPage() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [account, setAccount] = useState({
    name: '티끌모아태산 통장',
    id: '123-456-789012',
    type: '자유저축',
    balance: 1500000,
    lastTransaction: '2024-03-15',
  });

  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();
  const { monthlySavings } = useSavings();

  const currentMonthSaving = monthlySavings[0];

  const handleDeposit = () => {
    if (depositAmount) {
      const amount = parseInt(depositAmount);
      setAccount(prev => ({
        ...prev,
        balance: prev.balance + amount,
        lastTransaction: new Date().toISOString().split('T')[0],
      }));
      setDepositAmount('');
      setIsDepositModalOpen(false);
    }
  };

  const handleWithdraw = () => {
    if (withdrawAmount) {
      const amount = parseInt(withdrawAmount);
      if (amount <= account.balance) {
        setAccount(prev => ({
          ...prev,
          balance: prev.balance - amount,
          lastTransaction: new Date().toISOString().split('T')[0],
        }));
        setWithdrawAmount('');
        setIsWithdrawModalOpen(false);
      }
    }
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
          <div className="flex justify-between items-center mb-4">
            <div className="w-24"></div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>전체 저축 현황</h2>
            <button
              onClick={() => setIsDepositModalOpen(true)}
              className={`px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              입금하기
            </button>
          </div>
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
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>저축 목표</h3>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>내 티끌</h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                {account.balance.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>{account.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{account.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isDarkMode ? 'bg-purple-950 text-purple-100' : 'bg-purple-200 text-purple-900'
              }`}>
                {account.type}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>최근 거래</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{account.lastTransaction}</p>
              </div>
              <p className={`text-xl font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                {account.balance.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>일별 절약 내용</h3>
              <Link 
                href="/savings/daily"
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-purple-950 text-purple-100 hover:bg-purple-900' 
                    : 'bg-purple-200 text-purple-900 hover:bg-purple-300'
                }`}
              >
                자세히 보기
              </Link>
            </div>
            <div className="space-y-4">
              {currentMonthSaving.items.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
                  }`}
                >
                  <div>
                    <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>{item.name}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                  </div>
                  <p className={`font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                    {item.amount.toLocaleString()}원
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800 border-purple-950' : 'bg-white border-purple-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>저축 내역</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className={`text-lg font-medium ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>절약 성공까지</p>
                <p className={`text-lg font-bold ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                  {Math.round((new Date().getDate() / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) * 100)}%
                </p>
              </div>
              <div className={`w-full rounded-full h-4 overflow-hidden ${isDarkMode ? 'bg-purple-950' : 'bg-purple-200'}`}>
                <div
                  className={`h-4 rounded-full animate-flowing ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700'
                      : 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500'
                  }`}
                  style={{ width: `${(new Date().getDate() / new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()) * 100}%` }}
                ></div>
              </div>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {new Date().getDate()}일 / {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}일
              </p>
            </div>

            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>월별 절약 내역</h4>
              <div className="space-y-3">
                {monthlySavings.map((saving) => (
                  <div
                    key={saving.month}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      isDarkMode ? 'bg-purple-950' : 'bg-purple-200'
                    }`}
                  >
                    <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                      {saving.month.replace('-', '년 ')}월
                    </p>
                    <div className="flex items-center gap-4">
                      <p className={`${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                        {saving.savedAmount.toLocaleString()}원
                      </p>
                      <span className={`text-sm ${
                        saving.savedAmount >= saving.goal 
                          ? isDarkMode ? 'text-green-300' : 'text-green-600'
                          : isDarkMode ? 'text-red-300' : 'text-red-600'
                      }`}>
                        {saving.savedAmount >= saving.goal ? '달성' : '미달성'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setIsWithdrawModalOpen(true)}
              className={`px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              출금하기
            </button>
          </div>
        </div>
      </main>

      {/* 입금 모달 */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-4 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>입금하기</h3>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className={`w-full p-2 rounded-lg border mb-4 ${
                isDarkMode 
                  ? 'bg-gray-700 border-purple-900 text-white' 
                  : 'bg-white border-purple-300 text-gray-900'
              }`}
              placeholder="입금할 금액을 입력하세요"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsDepositModalOpen(false)}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                취소
              </button>
              <button
                onClick={handleDeposit}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                입금
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 출금 모달 */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={`p-6 rounded-xl shadow-lg w-full max-w-md mx-4 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-900'}`}>출금하기</h3>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className={`w-full p-2 rounded-lg border mb-4 ${
                isDarkMode 
                  ? 'bg-gray-700 border-purple-900 text-white' 
                  : 'bg-white border-purple-300 text-gray-900'
              }`}
              placeholder="출금할 금액을 입력하세요"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsWithdrawModalOpen(false)}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                취소
              </button>
              <button
                onClick={handleWithdraw}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                출금
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 