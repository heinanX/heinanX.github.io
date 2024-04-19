import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import SkillAndAbilitySection from "@/app/_components/_pageComponents/aboutPage/SkillandAbilitySection/SkillandAbilitySection";
import TechStackSection from "@/app/_components/_pageComponents/aboutPage/TechStackSection/TechStackSection";
import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import CoverLetterSection from "@/app/_components/_pageComponents/aboutPage/CoverLetterSection/CoverLetterSection";
import ThisIsMeSection from "@/app/_components/_pageComponents/aboutPage/ThisIsMeSection/ThisIsMeSection";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <ArticleTwoCols component={ThisIsMeSection} custCss={""} />

        <div className="flex justify-center w-full bg-custTurq">
          <ArticleTwoCols component={CoverLetterSection} custCss={""} />
        </div>

        <div className="flex justify-center w-full bg-custHotpink">
          <ArticleTwoCols component={SkillAndAbilitySection} custCss={""} />
        </div>

        <ArticleTwoCols component={TechStackSection} custCss={""} />
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
