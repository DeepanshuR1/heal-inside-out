import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className="header">
    <nav className="max-w-[1440px] mx-auto flex justify-center items-center px-6">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/image.png" alt="Yoga logo" width={80} height={80} className="logo" />
      </Link>
    </nav>
  </header>
);

export default NavBar;
