const AboutHeader = ({text, custCss}) => {
  return (
    <h1 className={`leading-none text-[150px] font-bold uppercase ${custCss}`} >{text}</h1>
  )
}

export default AboutHeader