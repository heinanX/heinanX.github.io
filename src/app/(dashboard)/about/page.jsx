import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import PersonalitySection from "@/app/_components/PersonalitySection";
import TechStackSection from "@/app/_components/TechStackSection";
import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import CoverLetterSection from "@/app/_components/CoverLetterSection";
import GreetingSection from "@/app/_components/GreetingSection";

const page = () => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-full min-h-screen">
        <ArticleTwoCols
          component={GreetingSection}
          custCss={"max-w-screen-xl"}
        />

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
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
