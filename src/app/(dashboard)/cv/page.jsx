import ArticleTwoCols from "@/app/_components/ArticleTwoCols";
import cvImage from "@/_assets/CV_Image.PNG";
import CV from "@/app/_components/CV";

const CvSection = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <CV
          cvImage={cvImage}
          href={"/LindaEskilsson_CV-eng.pdf"}
          altText={"English version of CV"}
          btnText={"Download ENG"}
        />
      </section>

      <section className="flex flex-col items-center">
        <CV
          cvImage={cvImage}
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
        custCss={"max-w-screen-xl py-2 gap-y-8 min-h-full md:grid-cols-2"}
      />
    </>
  );
};

export default page;
