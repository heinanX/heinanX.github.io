import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import cvImageEng from "@/_assets/cv-eng_img.JPG";
import cvImageSwe from "@/_assets/cv-swe_img.JPG";
import CV from "@/app/_components/_pageComponents/cvPage/CV";
import DividerLine from "@/app/_components/DividerLine";

const CvSectionEng = () => {
  return (
    <>
      <section className="flex-col items-center w-full pr-4 article-section-centered order lg:order-2 dark:text-white">
        <h2 className="text-5xl font-bold tracking-wider uppercase sm:text-8xl">
          Want to
        </h2>
        <h2 className="text-5xl font-bold tracking-wider uppercase sm:text-8xl">
          <span className="text-custHotpink">print</span> it?
        </h2>
        <DividerLine />
      </section>

      <section className="flex-col items-center w-full gap-y-10 sm:flex-row article-section-centered">
        <CV
          cvImage={cvImageEng}
          href={"//LindaEskilsson_CV-eng.pdf"}
          altText={"English version of CV"}
          btnText={"Download ENG"}
        />

        <CV
          cvImage={cvImageSwe}
          href={"/LindaEskilsson_CV-sve.pdf"}
          altText={"Swedish version of CV"}
          btnText={"Download SVE"}
        />
      </section>
    </>
  );
};

const page = () => {
  return (
    <>
      <ArticleTwoCols
        component={CvSectionEng}
        custCss={"max-w-screen-xl min-h-full "}
      />
    </>
  );
};

export default page;
