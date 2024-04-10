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
      {showExample ? <div className="w-full text-4xl font-bold text-white dark:text-custBackground">{example}</div> : 
        <article className="font-bold uppercase text-center text-white dark:text-custBackground text-[150px]">
          <section className="scale-x-[-1] leading-none">str</section>
          <section className="leading-none">eng</section>
          <section className=" scale-x-[-1] leading-none">ths</section>
        </article>
        }
      </div>
    </>
  );
};

export default PersonalitySection;
