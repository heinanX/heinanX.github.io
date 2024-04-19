"use client";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeaderNav = ({ navigation }) => {
  const [init, setInit] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const handleMenu = () => {
    setInit(!init);
    setTimeout(() => {
      setOpen(!open);
    }, 0);
  };

  return (
    <>
      <span className="text-3xl cursor-pointer md:hidden" onClick={handleMenu}>
        <FaHamburger />
      </span>

      <nav
        aria-label="Mobile Navigation"
        className={`w-full fixed "bg-gray-900/50" inset-0 h-screen ${
          init ? null : "hidden"
        }`}
      >
        <div
          onClick={handleMenu}
          className={`absolute inset-0 w-full h-screen bg-gray-900/50`}
        ></div>
        <div
          className={`h-full w-2/3 bg-custBackgroundDarkLight transition-all duration-500 ease-out absolute right-0 top-0 ${
            open ? null : "translate-x-full"
          }`}
          role="dialog"
          aria-modal={open}
        >
          <button
            className="absolute text-xl text-gray-300 top-2 right-2 hover:cursor-pointer"
            onClick={handleMenu}
            aria-label="Close menu"
          >
            <MdClose />
          </button>

          <ul className="flex flex-col gap-4 px-6 py-20">
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`cursor-pointer hover:text-custTurq ${path === item.href ? 'text-custHotpink' : ''}`}
              >
                <li onClick={handleMenu}>
                  <h3>{item.title}</h3>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileHeaderNav;
