'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppTitleContextType {
  appTitle: string;
  setAppTitle: (title: string) => void;
}

const AppTitleContext = createContext<AppTitleContextType>({
  appTitle: '티끌모아태산',
  setAppTitle: () => {},
});

export function AppTitleProvider({ children }: { children: ReactNode }) {
  const [appTitle, setAppTitle] = useState('티끌모아태산');

  return (
    <AppTitleContext.Provider value={{ appTitle, setAppTitle }}>
      {children}
    </AppTitleContext.Provider>
  );
}

export function useAppTitle() {
  return useContext(AppTitleContext);
} 