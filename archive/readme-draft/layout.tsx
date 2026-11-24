import './globals.css';

export const metadata = {
  title: 'Kamdyn Shaeffer',
  description: 'Kamdyn Shaeffer is a software engineer in Boston working on backend and AI systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
