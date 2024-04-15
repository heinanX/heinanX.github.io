import Image from "next/image";
import ContactIcons from "./ContactIcons";
import avatar from "@/app/_assets/self-portrait_photo.png";
import AboutHeader from "./Headings/AboutHeader";

const GreetingSection = () => {
  return (
    <>
      <section className="flex flex-col items-center xl:order-2" /* className="md:order-2" */>
        <Image
          src={avatar}
          alt={
            "A professional picture of me smiling into the camera, standing in front of a gradient backdrop"
          }
          className="max-w-[550px] w-3/4"
        />
        
      <ContactIcons textSize="text-6xl" />
      </section>
      <section className="flex flex-col justify-center" /* className="md:order-2" */>
        <AboutHeader text={"This is "} custCss={''} />
        <AboutHeader text={"Me 一"} custCss={'text-custHotpink'} />
        <AboutHeader text={"Linda"} custCss={''} />
      </section>
    </>
  );
};

export default GreetingSection;
