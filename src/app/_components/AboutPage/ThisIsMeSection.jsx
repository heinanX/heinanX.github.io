import avatar from "@/app/_assets/self-portrait_photo.png";
import LargeHeadline from "../Headings/LargeHeadline";
import ContactIcons from "../ContactIcons";
import Image from "next/image";

const ThisIsMeSection = () => {
  return (
    <>
      <section className="article-section-centered">
        <div className="flex flex-col">
          <LargeHeadline text={"This is"} custCss={""} />
          <LargeHeadline text={"Me 一"} custCss={"text-custHotpink pl-6"} />
          <LargeHeadline text={"Linda"} custCss={"pl-6 text-left"} />
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

export default ThisIsMeSection;
