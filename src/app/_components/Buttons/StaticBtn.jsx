const StaticBtn = ({ text }) => {
  return (
    <button className="px-6 py-2 my-6 text-white rounded-full bg-custTurq hover:bg-custHotpink">
      {text}
    </button>
  );
};

export default StaticBtn;
