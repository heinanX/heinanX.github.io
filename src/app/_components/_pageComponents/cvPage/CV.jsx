"use client"
import Image from "next/image";
import StaticBtn from "@/_components/Buttons/StaticBtn";
import {useState} from "react";

const CV = ({ cvImage, href, altText, btnText }) => {
    const [activeHover, setActiveHover ] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Image src={cvImage} alt={altText} className={`w-2/3 max-w-80 ${activeHover ? '' : 'opacity-90'}`} />
      <a
        href={href}
        alt={`link to ${altText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div onMouseOver={() => setActiveHover(true)} onMouseOut={() => setActiveHover(false)}>
        <StaticBtn text={btnText} />
        </div>
      </a>
    </div>
  );
};

export default CV;
