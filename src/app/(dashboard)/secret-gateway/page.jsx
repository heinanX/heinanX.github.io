import Image from "next/image";
import SecretMessage from "../../_components/SecretMessage";
import silhouette from "../../_assets/silhouette.png"

const page = () => {
  return (
    <>
      <section className="mb-[10%] sm:mb-[5%] text-center lg:hidden">
        <h2 className="inline px-1 text-5xl select-none lg:text-6xl bg-custYellow text-custTurq">
          .hello thurr
        </h2>
      </section>

      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:gap-[5%]">
      <section className="flex justify-center w-full lg:w-1/2 pb-10 sm:pt-5 sm:pb-18 max-w-[244px] sm:max-w-[400px]">
        <Image
          src={silhouette}
          priority={true}
          alt="Silhouette of me free falling"
          className="w-4/5 select-none animate hover:animate-bounce-slow"
        />
      </section>

      <section className="flex flex-col items-center w-full gap-2 select-none lg:w-1/2 text-custTurq">
        <SecretMessage />
      </section>
    </div>
    </>
  );
};

export default page;
