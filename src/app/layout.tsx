import './globals.css'; 
import { ReactNode } from 'react';

export const metadata = {
  title: 'Responsive Product Cards',
  description: 'A Next.js app with responsive product cards using Tailwind CSS.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <header className="bg-blue-600 text-white p-4 h-24">
          <div className="container mx-auto">
            <h1 className="flex items-center justify-center text-3xl font-bold mt-4">Responsive Product Cards By UmmeFizza</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
