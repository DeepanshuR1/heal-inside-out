import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full bg-amber-900  absolute z-10">
    <nav
      className=" text-white
     max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4"
    >
      {/* <div className="container mx-auto flex justify-between items-center"> */}
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/yogaLogo.svg"
          alt="Yoga logo"
          width={40}
          height={18}
          className="object-contain"
        />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/components/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/why-us">Why Us</Link>
        </li>
      </ul>
      {/* <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        /> */}
      <div></div>
      {/* </div> */}
    </nav>
  </header>
);

export default NavBar;
