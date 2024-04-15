"use client";
import PersonalityTraits from "@/_components/PersonalityTraits";
import { useState } from "react";
import LargeHeadlineReversed from "../Headings/LargeHeadlineReversed";
import LargeHeadline from "../Headings/LargeHeadline";

const PersonalitySection = () => {
  const [showExample, setShowExample] = useState(false);
  const [example, setExample] = useState("");

  const mouseAction = (trait, boolean) => {
    setShowExample(boolean);
    setExample(trait);
  };

  return (
    <>
      <section className="text-center article-section text-custBackground lg:order-2">
        {showExample ? (
          <div className="w-full h-64 text-4xl font-bold lg:h-auto flex-center-row">
            {example}
          </div>
        ) : (
          <div className="h-64 lg:h-auto">
            <LargeHeadlineReversed text={'str'} />
            <LargeHeadline text={'eng'} />
            <LargeHeadlineReversed text={'ths'} />
          </div>
        )}
      </section>

      <section className="items-center h-full article-section-centered">
        <PersonalityTraits mouseAction={mouseAction} />
      </section>
    </>
  );
};

export default PersonalitySection;
