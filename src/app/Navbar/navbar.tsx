// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-amber-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
