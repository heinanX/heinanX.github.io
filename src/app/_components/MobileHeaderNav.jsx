"use client"
import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";

const MobileHeaderNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(()=> {
    console.log(open);
  },[open])
  return (
    <span className="text-3xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
      <FaHamburger />
    </span>
  );
};

export default MobileHeaderNav;
