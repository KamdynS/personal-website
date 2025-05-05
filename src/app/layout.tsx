import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Kamdyn Shaeffer',
  description: 'Personal website and portfolio of Kamdyn Shaeffer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
