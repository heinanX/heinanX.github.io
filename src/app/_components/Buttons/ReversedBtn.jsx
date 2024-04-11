const ReversedBtn = ({func, text, custCss}) => {
    return (
      <button onClick={func} className={`scale-x-[-1] leading-none uppercase hover:text-black ${custCss}`}>{text}</button>
    )
  }

export default ReversedBtn