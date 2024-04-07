import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";

const dotGothic16 = DotGothic16({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: "My Portfolio",
  description: "James Ruiz Software developer portforlio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dotGothic16.className} bg-rope-300 dark:bg-anakiwa-800 select-none`}>
        <div id="inicio"></div>
      <Header/>  
        {children}
      </body>
    </html>
  );
}
