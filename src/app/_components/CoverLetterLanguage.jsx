import LargeHeadline from "./Headings/LargeHeadline"
import HeaderBtn from "./Buttons/HeaderBtn"

const CoverLetterLanguage = ({ setLanguage, language }) => {
  return (
    <div className="flex flex-col">
    <HeaderBtn
      func={() => setLanguage("en")}
      text={"eng"}
      custCss={`text-left lg:text-right pl-2 lg:pl-0" ${language === 'en' ? ' text-custBackground' : ''}`}
      component={LargeHeadline}
    />
    <HeaderBtn
      func={() => setLanguage("sv")}
      text={"Sve"}
      custCss={`text-left lg:text-right pl-2 lg:pl-0" ${language === 'sv' ? ' text-custBackground' : ''}`}
      component={LargeHeadline}
    />
    <HeaderBtn
      func={() => setLanguage("jp")}
      text={"日本語"}
      custCss={`text-left lg:text-right pl-1 lg:pl-0" ${language === 'jp' ? ' text-custBackground' : ''}`}
      component={LargeHeadline}
    />
  </div>
  )
}

export default CoverLetterLanguage