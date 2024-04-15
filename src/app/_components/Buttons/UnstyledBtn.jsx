"use client";

const UnstyledBtn = ({ func, text, custCss }) => {
  return (
    <button onClick={func} className={`hover:text-black ${custCss}`}>
      {text}
    </button>
  );
};

export default UnstyledBtn;
