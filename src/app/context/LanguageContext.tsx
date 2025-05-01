'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // 홈 페이지
    'app.title': '티끌모아태산',
    'home.savings.goal': '저축 목표',
    'home.goal.setting': '목표 품목 설정',
    'home.goal.input.name': '목표 품목을 입력하세요 (예: 아이폰 15, 노트북 등)',
    'home.goal.input.amount': '목표 금액을 입력하세요',
    'home.goal.button.set': '설정하기',
    'home.current.goal': '현재 목표',
    'home.savings.status': '저축 현황',
    'home.remaining.amount': '목표까지 {amount}원 남음',

    // 오늘의 저축 페이지
    'today.title': '오늘의 저축',
    'today.add.item': '절약 항목 추가',
    'today.input.name': '절약할 품목을 입력하세요 (예: 커피, 배달음식 등)',
    'today.input.amount': '절약할 금액을 입력하세요',
    'today.button.add': '추가하기',
    'today.savings': '오늘의 절약',
    'today.saved.amount': '오늘 절약한 금액: {amount}원',
    'today.items': '절약 항목',
    'today.status.complete': '절약 완료',

    // 포인트 페이지
    'points.title': '내 포인트',
    'points.current': '보유 포인트',
    'points.next.level': '다음 레벨까지 {points} P 남음',
    'points.history': '포인트 내역',
    'points.earned': '적립',
    'points.used': '사용',

    // 저축 현황 페이지
    'savings.title': '전체 저축 현황',
    'savings.my.money': '내 티끌',
    'savings.account.type': '자유저축',
    'savings.recent.transaction': '최근 거래',
    'savings.monthly': '이달의 절약',
    'savings.progress': '절약 성공까지',
    'savings.day.progress': '{current}일 / {total}일',
    'savings.history': '절약 내역',
    'savings.monthly.history': '월별 절약 내역',
    'savings.status.achieved': '달성',
    'savings.status.not.achieved': '미달성',
    'savings.empty': '아직 절약한 내역이 없습니다.',

    // 설정 페이지
    'settings.title': '설정',
    'settings.notifications': '알림 설정',
    'settings.notifications.desc': '저축 목표 달성 및 포인트 적립 알림',
    'settings.darkmode': '다크 모드',
    'settings.darkmode.desc': '어두운 테마로 전환',
    'settings.language': '언어 설정',
    'settings.language.desc': '앱 언어 선택',
    'settings.app.info': '앱 정보',
    'settings.version': '티끌모아태산 v1.0.0',
    'settings.copyright': '© 2024 티끌모아태산. All rights reserved.',

    // 공통
    'common.won': '원',
    'common.month': '월',
    'common.year': '년',
  },
  en: {
    // Home page
    'app.title': 'Saving Helper',
    'home.savings.goal': 'Savings Goal',
    'home.goal.setting': 'Set Target Item',
    'home.goal.input.name': 'Enter target item (e.g., iPhone 15, Laptop)',
    'home.goal.input.amount': 'Enter target amount',
    'home.goal.button.set': 'Set',
    'home.current.goal': 'Current Goal',
    'home.savings.status': 'Savings Status',
    'home.remaining.amount': '{amount} won remaining to goal',

    // Today's savings page
    'today.title': "Today's Savings",
    'today.add.item': 'Add Saving Item',
    'today.input.name': 'Enter item to save on (e.g., Coffee, Delivery)',
    'today.input.amount': 'Enter amount to save',
    'today.button.add': 'Add',
    'today.savings': "Today's Savings",
    'today.saved.amount': 'Amount saved today: {amount} won',
    'today.items': 'Saved Items',
    'today.status.complete': 'Completed',

    // Points page
    'points.title': 'My Points',
    'points.current': 'Current Points',
    'points.next.level': '{points} P until next level',
    'points.history': 'Points History',
    'points.earned': 'Earned',
    'points.used': 'Used',

    // Savings status page
    'savings.title': 'Overall Savings Status',
    'savings.my.money': 'My Savings',
    'savings.account.type': 'Free Savings',
    'savings.recent.transaction': 'Recent Transaction',
    'savings.monthly': 'Monthly Savings',
    'savings.progress': 'Progress to Success',
    'savings.day.progress': 'Day {current} / {total}',
    'savings.history': 'Savings History',
    'savings.monthly.history': 'Monthly History',
    'savings.status.achieved': 'Achieved',
    'savings.status.not.achieved': 'Not Achieved',
    'savings.empty': 'No savings history yet.',

    // Settings page
    'settings.title': 'Settings',
    'settings.notifications': 'Notifications',
    'settings.notifications.desc': 'Notifications for goals and points',
    'settings.darkmode': 'Dark Mode',
    'settings.darkmode.desc': 'Switch to dark theme',
    'settings.language': 'Language',
    'settings.language.desc': 'Select app language',
    'settings.app.info': 'App Info',
    'settings.version': 'Saving Helper v1.0.0',
    'settings.copyright': '© 2024 Saving Helper. All rights reserved.',

    // Common
    'common.won': 'won',
    'common.month': 'month',
    'common.year': 'year',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<'ko' | 'en'>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ko' || savedLanguage === 'en') {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: 'ko' | 'en') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    let text = translations[language][key as keyof typeof translations['ko']] || key;
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 