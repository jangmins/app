'use client';

import { useAppTitle } from '../context/AppTitleContext';
import { useDarkMode } from '../context/DarkModeContext';

export default function PageTitle() {
  const { isDarkMode } = useDarkMode();
  const { appTitle } = useAppTitle();

  return (
    <div className="flex justify-center mb-4">
      <div className={`inline-block px-4 py-2 rounded-xl border-2 ${
        isDarkMode ? 'bg-purple-950 border-purple-800 text-purple-100' : 'bg-purple-200 border-purple-400 text-purple-900'
      }`}>
        <h1 className={`text-xl font-semibold text-center`}>{appTitle}</h1>
      </div>
    </div>
  );
} 