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
      <section className="h-full article-section-centered text-custBackground lg:order-2">
        {showTrait ? (
          <div className="flex flex-col justify-center w-full font-bold tracking-wider h-72 lg:h-full lg:px-20 lg:text-3xl">
            {activeTrait.map((item, i) => (
              <span key={i}>
                <p>{item}.</p>
                <br />
              </span>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-left cursor-default h-80 lg:h-full">
            <LargeHeadline text={"skill"} />
            <LargeHeadline text={"& 一 +"} custCss={"text-custYellow py-4"} />
            <LargeHeadline text={"ability"} />
          </div>
        )}
      </section>

      <section className="items-center h-full pb-10 article-section-centered">
        <PersonalityTraits traitHandler={traitHandler} />
      </section>
    </>
  );
};

export default PersonalitySection;
