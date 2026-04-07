import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz Platform',
  description: 'Realtime SaaS for quizzes and interactive learning.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
