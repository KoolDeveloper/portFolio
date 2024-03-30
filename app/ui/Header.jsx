import Image from "next/image";
import NavBar from "../components/navbar/NavBar";

function Header() {
  return (
    <header className="sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-tuna-900 py-2 px-4">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src="/logo.svg" width={60} height={60} alt="Logo" />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
