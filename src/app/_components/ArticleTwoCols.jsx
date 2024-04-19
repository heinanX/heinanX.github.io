const ArticleTwoCols = ({ component: Component, custCss }) => {
  return (
    <article
      className={`flex items-center max-w-screen-xl justify-center gap-y-14 xl:gap-0 py-20 lg:h-screen flex-col w-full px-6 sm:px-12 md:px-24 lg:px-0  lg:flex-row ${custCss}`}
    >
      <Component />
    </article>
  );
};

export default ArticleTwoCols;
