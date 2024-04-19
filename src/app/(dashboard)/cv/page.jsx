import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import cvImageEng from "@/_assets/cv-eng_img.JPG";
import cvImageSwe from "@/_assets/cv-swe_img.JPG";
import CV from "@/app/_components/_pageComponents/cvPage/CV";

const CvSection = () => {
  return (
    <>
      <section className="flex-col items-end article-section-centered">
        <CV
          cvImage={cvImageEng}
          href={"//LindaEskilsson_CV-eng.pdf"}
          altText={"English version of CV"}
          btnText={"Download ENG"}
        />
      </section>
      
      <section className="flex-col items-start article-section-centered">
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
        custCss={"max-w-screen-xl gap-y-8 min-h-full gap-x-10"}
      />
    </>
  );
};

export default page;
