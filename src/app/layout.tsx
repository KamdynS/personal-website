import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Kamdyn Shaeffer",
  description: "Kamdyn Shaeffer's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-raleway antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
