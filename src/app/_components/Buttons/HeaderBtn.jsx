const HeaderBtn = ({ func, text, custCss, component: Component }) => {
  return (
    <button
      onClick={func}
      className={`hover:text-black w-full cursor-pointer`}
    >
      <Component text={text} custCss={custCss} />
    </button>
  );
};

export default HeaderBtn;
