import avatar from "../../_assets/self-portrait_photo.png";
import TextImageSection from "@/_components/TextImageSection";
import CoverLetterEng from "@/_components/CoverLetterEng";
import ContactIcons from "@/_components/ContactIcons";
import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import PersonalitySection from "@/app/_components/PersonalitySection";
import TechStackSection from "@/app/_components/TechStackSection";
import ArticleTwoCols from "@/app/_components/ArticleTwoCols";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-full min-h-screen">
        <article className="flex justify-center w-full max-w-screen-xl px-10">
          <TextImageSection
            image={avatar}
            alt="A professional picture of me smiling into the camera, standing in front of a gradient backdrop"
            component={CoverLetterEng}
          />
        </article>

        <article className="flex justify-center w-full py-10">
          <ContactIcons textSize="text-6xl" />
        </article>

        <div className="flex justify-center w-full bg-custHotpink">
          <article className="grid items-center w-full min-h-screen grid-cols-1 px-10 py-6 xl:grid-cols-2 max-w-7xl ">
            <PersonalitySection />
          </article>
        </div>

        <ArticleTwoCols component={TechStackSection} />

        <article className="grid items-center max-w-screen-xl min-h-screen grid-cols-1 px-10 py-6 xl:grid-cols-2">
          <TechStackSection />
        </article>
        {/*         <h1 className="py-2 text-center dark:text-custHotpink bg-custYellow">
          Location: Stockholm, Sollentuna
        </h1> */}
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
