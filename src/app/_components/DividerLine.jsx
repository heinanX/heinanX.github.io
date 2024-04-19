const DividerLine = () => {
  return (
    <div className="relative w-full h-2 sm:w-[95%] bg-custYellow my-4 max-w-[550px]">
    <div className="absolute w-4 h-4 rounded-full -left-1 -top-1 bg-custYellow"></div>
    <div className="absolute w-4 h-4 rounded-full -right-1 -top-1 bg-custYellow"></div>
  </div>
  )
}

export default DividerLine