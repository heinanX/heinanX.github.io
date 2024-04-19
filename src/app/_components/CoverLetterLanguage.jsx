import LargeHeadline from "./Headings/LargeHeadline"
import HeaderBtn from "./Buttons/HeaderBtn"

const CoverLetterLanguage = ({setLanguage}) => {
  return (
    <div className="flex flex-col">
    <HeaderBtn
      func={() => setLanguage("en")}
      text={"eng"}
      custCss={"lg:text-right"}
      component={LargeHeadline}
    />
    <HeaderBtn
      func={() => setLanguage("sv")}
      text={"Sve"}
      custCss={"lg:text-right"}
      component={LargeHeadline}
    />
    <HeaderBtn
      func={() => setLanguage("jp")}
      text={"日本語"}
      custCss={"lg:text-right"}
      component={LargeHeadline}
    />
  </div>
  )
}

export default CoverLetterLanguage