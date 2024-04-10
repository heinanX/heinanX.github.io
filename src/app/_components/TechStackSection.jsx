"use client";
import TechStack from "@/_components/TechStack";
import Carousel from "./Carousel";

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
      <section>
        <article className="dark:text-custYellow uppercase text-[150px] font-bold">
          <section className="scale-x-[-1] text-right leading-none">
            tech
          </section>
          <section className="leading-none">stack</section>
        </article>
      </section>
      <section className="overflow-hidden text-center">
        <Carousel arr={currentStack} />
        <TechStack arr={currentStack} />
      </section>
    </>
  );
};

export default TechStackSection;
