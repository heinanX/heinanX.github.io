"use client";

import { useEffect, useState } from "react";

const CoverLetterEng = () => {
  const [ visitor, setVisitor ] = useState('');


  //setVisitor("random");

  const [index, setIndex] = useState(0);

  const letter = [
    "Glad to see you found your way back here. Let me introduce myself more thoroughly this time around. As you may already know, my name is Linda, and I'm a student at Medieinstitutet in Stockholm, where I'm studying Web Programming for eCommerce. This means I have experience with both Backend and Frontend programming.",
    "Kul att se att du hittade hit. Låt mig presentera mig själv mer ingående den här gången. Som ni redan vet är namnet Linda och jag är student på Medieinstitutet i Stockholm där jag studerar Webbprogrammering för e-handel. Det betyder att jag har erfarenhet av både Backend och Frontend programmering.",
    "うわあー",
  ];

  const greeting = ["Hello ", "Hej igen", "こんいちは"];

  const switchLanguage = (lang) => {
    return setIndex(lang);
  };
  useEffect(()=> {
    const activeVisitor = localStorage.getItem('visitor')
    console.log(activeVisitor);
    if (activeVisitor === null)  {
      setVisitor("Johnny")
    }
  }, [])

  return (
    <>
      <select
        name="lang"
        id=""
        onChange={(e) => switchLanguage(e.target.value)}
        className="absolute top-0 right-0"
      >
        <option value="0">Eng</option>
        <option value="1">Sve</option>
        <option value="2">Jap</option>
      </select>
      <div className="py-10 text-lg font-dm-sans">
        <h1 className="pb-2">{greeting[index] + ' ' + visitor},</h1>
        <p>{letter[index]}</p>
      </div>
    </>
  );
};

export default CoverLetterEng;
