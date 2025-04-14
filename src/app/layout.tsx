import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GestãoPluma - Sistema Completo para Psicólogas',
  icons: {
    icon: '💜',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💜</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
} 