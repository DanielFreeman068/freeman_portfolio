import "./globals.css";
import AOSInitializer from "@/app/components/AOSInitializer";
import { Inria_Sans } from 'next/font/google';

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inria',
})

export const metadata = {
  title: "Portfolio | Daniel Freeman",
  description: "Generated by create next app",
  icons:{
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inriaSans.className}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
