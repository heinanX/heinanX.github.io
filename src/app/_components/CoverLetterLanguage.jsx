import LargeHeadlineReversed from "./Headings/LargeHeadlineReversed"
import LargeHeadline from "./Headings/LargeHeadline"
import HeaderBtn from "./Buttons/HeaderBtn"

const CoverLetterLanguage = ({setLanguage}) => {
  return (
    <div className="flex flex-col">
    <HeaderBtn
      func={() => setLanguage("en")}
      text={"eng"}
      custCss={"text-left"}
      component={LargeHeadlineReversed}
    />
    <HeaderBtn
      func={() => setLanguage("sv")}
      text={"Sve"}
      custCss={"text-right"}
      component={LargeHeadline}
    />
    <HeaderBtn
      func={() => setLanguage("jp")}
      text={"日本語"}
      custCss={""}
      component={LargeHeadlineReversed}
    />
  </div>
  )
}

export default CoverLetterLanguage