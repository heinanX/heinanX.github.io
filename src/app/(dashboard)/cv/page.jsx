import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import cvImageEng from "@/_assets/cv-eng_img.PNG";
import cvImageSwe from "@/_assets/cv-swe_img.PNG";
import CV from "@/app/_components/CV";

const CvSection = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <CV
          cvImage={cvImageEng}
          href={"/LindaEskilsson_CV-eng.pdf"}
          altText={"English version of CV"}
          btnText={"Download ENG"}
        />
      </section>

      <section className="flex flex-col items-center">
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
        component={CvSection}
        custCss={"max-w-screen-xl gap-y-8 min-h-full md:grid-cols-2"}
      />
    </>
  );
};

export default page;
