import { Geist, Geist_Mono, Cousine, Anton } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const flirtationWalk = localFont({
  src: './fonts/FlirtationWalkJNL.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-flirtation-walk',
});


const breamcatcher = localFont({
  src: './fonts/breamcatcher.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-breamcatcher',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cousine = Cousine({
  subsets: ['latin'],
  weight: ['400', '700'], // Cousine supports 400 and 700 weights
  style: ['normal', 'italic'],
  variable: '--font-cousine',
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'], // Anton só tem o peso 400, que já é bem "bold"
  variable: '--font-anton', // Define uma variável CSS para a fonte
});

export const metadata = {
  title: "Gio Silveira - UX/UI Designer", 
  description: "UX/UI Portfolio", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${flirtationWalk.variable} ${breamcatcher.variable} ${cousine.variable} ${anton.variable}`}>
        {children}
      </body>
    </html>
  );
}
