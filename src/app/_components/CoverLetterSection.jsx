"use client";
import { useState } from "react";
import CoverLetterLanguage from "./CoverLetterLanguage";
import CoverLetter from "./CoverLetter";

const CoverLetterSection = () => {
  const [language, setLanguage] = useState('en');

  return (
    <>
    <CoverLetter language={language} />
    <CoverLetterLanguage setLanguage={setLanguage} />
    </>
  );
};

export default CoverLetterSection;
