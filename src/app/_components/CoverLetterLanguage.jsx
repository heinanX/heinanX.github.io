import ReversedBtn from "./Buttons/ReversedBtn"
import UnstyledBtn from "./UnstyledBtn"

const CoverLetterLanguage = ({setLanguage}) => {
  return (
    <section className="font-bold dark:text-white text-custBackground text-[150px] flex flex-col justify-center">
    <ReversedBtn
      func={() => setLanguage("en")}
      text={"eng"}
      custCss={"text-left"}
    />
    <UnstyledBtn
      func={() => setLanguage("sv")}
      text={"Sve"}
      custCss={"leading-none uppercase text-right"}
    />
    <ReversedBtn
      func={() => setLanguage("jp")}
      text={"日本語"}
      custCss={"text-left"}
    />
  </section>
  )
}

export default CoverLetterLanguage