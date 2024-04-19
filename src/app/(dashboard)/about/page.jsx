import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import PersonalitySection from "@/app/_components/AboutPage/PersonalitySection";
import TechStackSection from "@/app/_components/AboutPage/TechStackSection";
import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import CoverLetterSection from "@/app/_components/AboutPage/CoverLetterSection";
import ThisIsMeSection from "@/app/_components/AboutPage/ThisIsMeSection";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <ArticleTwoCols
          component={ThisIsMeSection}
          custCss={""}
        />

        <div className="flex justify-center w-full bg-custTurq">
          <ArticleTwoCols
            component={CoverLetterSection}
            custCss={""}
          />
        </div>

        <div className="flex justify-center w-full bg-custHotpink">
          <ArticleTwoCols component={PersonalitySection} custCss={""} />
        </div>

        <ArticleTwoCols
          component={TechStackSection}
          custCss={""}
        />
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
