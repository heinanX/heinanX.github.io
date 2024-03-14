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
      title: "skillset",
      href: "/skillset",
    },
    {
      title: "projects",
      href: "/projects",
    },
    {
      title: "cv",
      href: "/cv",
    },
  ];
  return (
    <header className="absolute top-0 left-0 flex flex-row items-center justify-between w-full h-20 px-10 border-b border-slate-900">
      <a href="/">
        <h1>.lindaEskilsson</h1>
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
