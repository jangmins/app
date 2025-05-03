'use client';

import { DarkModeProvider } from './context/DarkModeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AppTitleProvider } from './context/AppTitleContext';
import { SavingsProvider } from './context/SavingsContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <AppTitleProvider>
          <SavingsProvider>
            {children}
          </SavingsProvider>
        </AppTitleProvider>
      </LanguageProvider>
    </DarkModeProvider>
  );
} 