"use client";
import TechStack from "@/_components/TechStack";
import Carousel from "../Carousel";
import LargeHeadlineReversed from "../Headings/LargeHeadlineReversed";
import LargeHeadline from "../Headings/LargeHeadline";

const currentStack = [
  {
    tech: "JavaScript",
  },
  {
    tech: "TypeScript",
  },
  {
    tech: "Node.js",
  },
  {
    tech: "HTML/CSS",
  },
  {
    tech: "React.js",
  },
  {
    tech: "Next.js",
  },
  {
    tech: "WordPress",
  },
  {
    tech: "Php",
  },
  {
    tech: "Headless CMS",
  },
  {
    tech: "socket.io",
  },
  {
    tech: "REST-api",
  },
  {
    tech: "GraphQL",
  },
  {
    tech: "Adobe Illustrator",
  },
  {
    tech: "Adobe Photoshop",
  },
  {
    tech: "Adobe Indesign",
  },
];

const TechStackSection = () => {
  return (
    <>
      <section className="article-section-centered dark:text-custYellow">
        <div className="flex flex-col">
          <LargeHeadlineReversed text={"tech"} />
          <LargeHeadline text={"stack"} custCss={"text-right"} />
          <LargeHeadlineReversed text={"so far"} />
        </div>
      </section>

      <section className="px-8 overflow-hidden text-center article-section">
        <Carousel arr={currentStack} />
        <TechStack arr={currentStack} />
      </section>
    </>
  );
};

export default TechStackSection;
