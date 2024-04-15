const LargeHeadline = ({ text, custCss }) => {
  return (
    <h1 className={`w-full leading-none text-7xl md:text-[100px] lg:text-[120px] xl:text-[150px] font-bold uppercase ${custCss}`}>
      {text}
    </h1>
  );
};

export default LargeHeadline;