import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

// Load Satoshi font
const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tekcify - AI Solutions",
  description: "Elevate your digital experience with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="font-sans antialiased pt-20">
        {children}
      </body>
    </html>
  );
}
