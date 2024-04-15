import Link from "next/link";
import React from "react";
import MobileHeaderNav from "./MobileHeaderNav";

const Header = () => {
  const navigation = [
    {
      title: "about me",
      href: "/about",
    },
    {
      title: "projects",
      href: "https://github.com/heinanX?tab=repositories",
    },
    {
      title: "cv",
      href: "/cv",
    },
  ];
  return (
    <header className="absolute top-0 left-0 z-10 flex flex-row items-center justify-between w-full h-20 px-10 border-b border-slate-900">
      <a href="/">
        <h2>.lindaEskilsson</h2>
      </a>

      <MobileHeaderNav />

      <nav className="hidden md:block">
        <ul className="flex flex-row space-x-6 text-lg lg:mr-10 lg:space-x-10 lg:text-xl">
          {navigation.map((item, index) => (
            <Link key={index} href={item.href}>
              <li className="hover:text-custTurq">{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
