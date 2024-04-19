"use client";
import PersonalityTraits from "@/_components/PersonalityTraits";
import { useState } from "react";
import LargeHeadline from "../Headings/LargeHeadline";

const PersonalitySection = () => {
  const [showTrait, setShowTrait] = useState(false);
  const [activeTrait, setActiveTrait] = useState([]);

  const traitHandler = (trait, boolean) => {
    const formatted = trait.split(". ");
    setShowTrait(boolean);
    setActiveTrait(formatted);
  };

  return (
    <>
      <section className="lg:hidden article-section-centered text-custBackground">
          <div className="flex flex-col items-center justify-center text-left cursor-default">
            <LargeHeadline text={"skill"} />
            <LargeHeadline text={"& 一 +"} custCss={"text-custYellow py-4"} />
            <LargeHeadline text={"ability"} />
          </div>
      </section>
      
      <section className="items-center w-full h-full pb-10 article-section-centered">
        <PersonalityTraits traitHandler={traitHandler} />
      </section>

      <section className="hidden h-full lg:flex lg:justify-center article-section text-custBackground">
        {showTrait ? (
          <div className="flex flex-col justify-center w-full h-full px-20 text-3xl font-bold tracking-wider">
            {activeTrait.map((item, i) => (
              <span key={i}>
                <p>{item}.</p>
                <br />
              </span>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-left cursor-default">
            <LargeHeadline text={"skill"} />
            <LargeHeadline text={"& 一 +"} custCss={"text-custYellow py-4"} />
            <LargeHeadline text={"ability"} />
          </div>
        )}
      </section>
    </>
  );
};

export default PersonalitySection;
