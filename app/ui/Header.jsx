import Image from "next/image";
import NavBar from "../components/navbar/NavBar";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-20 dark:backdrop-brightness-50 py-2 px-4">
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
