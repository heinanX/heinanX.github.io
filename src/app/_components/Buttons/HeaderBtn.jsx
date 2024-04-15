const HeaderBtn = ({ func, text, custCss, component: Component }) => {
  return (
    <button
      onClick={func}
      className={`hover:text-black w-full ${custCss}`}
    >
      <Component text={text} />
    </button>
  );
};

export default HeaderBtn;
