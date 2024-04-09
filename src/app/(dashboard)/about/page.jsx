import avatar from "../../_assets/self-portrait_photo.png";
import TextImageSection from "@/_components/TextImageSection";
import CoverLetterEng from "@/_components/CoverLetterEng";
import ContactIcons from "@/_components/ContactIcons";
import TechStack from "@/_components/TechStack";
import ScrollToBottom from "@/app/_utilities/ScrollToBottom";
import PersonalitySection from "@/app/_components/PersonalitySection";

const page = () => {
  console.log("im in about");
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-full min-h-screen">
        <div className="max-w-screen-xl px-10">
          <TextImageSection
            image={avatar}
            alt="A professional picture of me smiling into the camera, standing in front of a gradient backdrop"
            component={CoverLetterEng}
          />
        </div>
        <div className="flex justify-center w-full">
          <ContactIcons textSize="text-6xl" />
        </div>
        <div className="grid items-center w-full min-h-screen grid-cols-2 px-10 py-6 bg-custHotpink">
          <PersonalitySection />
        </div>
        <div className="grid items-center max-w-screen-xl min-h-screen grid-cols-2 px-10 py-6">
          <div>
            <h1 className="dark:text-custYellow text-[150px] font-bold">
              Tech stack
            </h1>
          </div>
          <TechStack />
        </div>
        {/*         <h1 className="py-2 text-center dark:text-custHotpink bg-custYellow">
          Location: Stockholm, Sollentuna
        </h1> */}
        <ScrollToBottom />
      </div>
    </>
  );
};

export default page;
