import CoverLettersSv from "./CoverLetters/CoverLettersSv";
import CoverLetterEng from "./CoverLetters/CoverLetterEng";
import CoverLetterJp from "./CoverLetters/CoverLetterJp";

const CoverLetter = ({ language }) => {
  return (
    <section className="px-4">
      { language === 'en' ? <CoverLetterEng /> : language === 'sv' ? <CoverLettersSv /> : <CoverLetterJp /> }
    </section>
  );
};

export default CoverLetter;
