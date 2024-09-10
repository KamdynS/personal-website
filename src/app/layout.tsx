import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import path from 'path';
import fs from 'fs';

console.log("Current working directory:", process.cwd());
console.log("Public directory:", path.join(process.cwd(), 'public'));
try {
  console.log("Font files:", fs.readdirSync(path.join(process.cwd(), 'public')).filter(file => file.endsWith('.woff')));
} catch (error) {
  console.error("Error reading public directory:", error);
}

const charter = localFont({
  src: [
    {
      path: "../../public/fonts/charter_regular_webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/charter_bold_webfont.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/charter_italic_webfont.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/charter_bold_italic_webfont.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-charter",
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
      <body className={`${charter.variable} font-charter antialiased`}>
        {children}
      </body>
    </html>
  );
}
