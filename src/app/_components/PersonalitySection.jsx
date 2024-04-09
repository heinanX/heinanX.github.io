"use client";
import PersonalityTraits from "@/_components/PersonalityTraits";
import { useState } from "react";

const PersonalitySection = () => {
  const [showExample, setShowExample] = useState(false);
  const [example, setExample] = useState("");

  const mouseAction = (trait, boolean) => {
    setShowExample(boolean)
    setExample(trait);
  };

  return (
    <>
      <PersonalityTraits
        mouseAction={mouseAction}
      />
      <div>
      {showExample ? <div className="text-4xl font-bold text-white dark:text-custBackground">{example}</div> : 
        <h1 className="font-bold text-white dark:text-custBackground text-9xl">
          Strengths
        </h1>
        }
      </div>
    </>
  );
};

export default PersonalitySection;
