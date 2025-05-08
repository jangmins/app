import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from './context/DarkModeContext';
import { AppTitleProvider } from './context/AppTitleContext';
import { SavingsProvider } from './context/SavingsContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "티끌모아태산",
  description: "나만의 저축 목표 관리 앱",
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#9333ea",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "티끌모아태산",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="티끌모아태산" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} overscroll-none`}>
        <DarkModeProvider>
          <AppTitleProvider>
            <SavingsProvider>
              {children}
            </SavingsProvider>
          </AppTitleProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
