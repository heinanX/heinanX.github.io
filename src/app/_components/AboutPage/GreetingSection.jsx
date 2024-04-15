import Image from "next/image";
import ContactIcons from "../ContactIcons";
import avatar from "@/app/_assets/self-portrait_photo.png";
import LargeHeadline from "../Headings/LargeHeadline";
import LargeHeadlineReversed from "../Headings/LargeHeadlineReversed";

const GreetingSection = () => {
  return (
    <>

      <section className="article-section-centered">
        <div className="flex flex-col">
          <LargeHeadline text={"This is"} custCss={"text-left"} />
          <LargeHeadlineReversed text={"Me 一"} custCss={"text-custHotpink text-right"} />
          <LargeHeadline text={"Linda"} custCss={"text-left"} />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center article-section">
        <Image
          src={avatar}
          alt={
            "A professional picture of me smiling into the camera, standing in front of a gradient backdrop"
          }
          className="max-w-[550px] w-full pb-14"
        />

        <ContactIcons textSize="text-4xl md:text-6xl" />
      </section>
    </>
  );
};

export default GreetingSection;
