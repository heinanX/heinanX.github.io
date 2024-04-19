"use client";
import TechStack from "@/aboutPage/TechStackSection/TechStack";
import Carousel from "@/_components/Carousel";
import LargeHeadline from "@/_components/Headings/LargeHeadline";

const currentStack = [
  { tech: "JavaScript" },
  { tech: "TypeScript" },
  { tech: "Node.js" },
  { tech: "HTML/CSS" },
  { tech: "React.js" },
  { tech: "Next.js" },
  { tech: "WordPress" },
  { tech: "Php" },
  { tech: "Headless CMS" },
  { tech: "socket.io" },
  { tech: "REST-api" },
  { tech: "GraphQL" },
  { tech: "Adobe Illustrator" },
  { tech: "Adobe Photoshop" },
  { tech: "Adobe Indesign" },
];

const TechStackSection = () => {
  return (
    <>
      <section className="article-section-centered dark:text-custYellow">
        <div>
          <LargeHeadline text={"tech"} />
          <LargeHeadline text={"stack"} />
          <LargeHeadline text={"so far"} />
        </div>
      </section>

      <section className="overflow-hidden text-center article-section lg:px-4">
        <Carousel arr={currentStack} />
        <TechStack arr={currentStack} />
      </section>
    </>
  );
};

export default TechStackSection;
