"use client";
import { useState } from "react";
import CoverLetterLanguage from "./CoverLetterLanguage";
import CoverLettersSv from "./CoverLetters/CoverLettersSv";
import CoverLetterEng from "./CoverLetters/CoverLetterEng";
import CoverLetterJp from "./CoverLetters/CoverLetterJp";

const CoverLetterSection = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <section className="article-section-centered lg:order-2">
        <CoverLetterLanguage setLanguage={setLanguage} language={language} />
      </section>
      
      <section className="text-sm leading-8 article-section md:px-4 md:text-base">
        {language === "en" ? (
          <CoverLetterEng />
        ) : language === "sv" ? (
          <CoverLettersSv />
        ) : (
          <CoverLetterJp />
        )}
      </section>
    </>
  );
};

export default CoverLetterSection;
