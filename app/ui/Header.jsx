import { DotGothic16 } from "next/font/google";
import Image from "next/image";
import NavBar from "../components/navbar/NavBar";
import Link from "next/link";

const dotGothic16 = DotGothic16({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function Header() {
  return (
    <header className={`sticky top-0 z-20 py-2 px-4 ${dotGothic16.className} bg-peach-cream dark:bg-anakiwa-900 shadow-md dark:shadow-cyan-300`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image src="/logo.svg" width={60} height={60} alt="Logo" />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
