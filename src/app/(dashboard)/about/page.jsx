import avatar from "../../_assets/self-portrait_photo.png";
import TextImageSection from "@/_components/TextImageSection";
import CoverLetterEng from "@/_components/CoverLetterEng";
import ContactIcons from "@/_components/ContactIcons";
import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import PersonalitySection from "@/app/_components/PersonalitySection";
import TechStackSection from "@/app/_components/TechStackSection";
import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import CoverLetterSection from "@/app/_components/CoverLetterSection";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-full min-h-screen">
        {/* <article className="flex justify-center w-full max-w-screen-xl px-10">
          <TextImageSection
            image={avatar}
            alt="A professional picture of me smiling into the camera, standing in front of a gradient backdrop"
            component={CoverLetterEng}
          />
        </article> */}
        
        <ContactIcons textSize="text-6xl" />
        <div className="flex justify-center w-full bg-custTurq">
          <ArticleTwoCols
            component={CoverLetterSection}
            custCss={"max-w-screen-xl"}
          />
        </div>

        <div className="flex justify-center w-full bg-custHotpink">
          <ArticleTwoCols component={PersonalitySection} custCss={""} />
        </div>

        <ArticleTwoCols
          component={TechStackSection}
          custCss={"max-w-screen-xl"}
        />

        {/*         <h1 className="py-2 text-center dark:text-custHotpink bg-custYellow">
          Location: Stockholm, Sollentuna
        </h1> */}
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
