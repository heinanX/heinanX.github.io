"use client";

import { useEffect, useState } from "react";

const DisplayMessage = ({ msg_01, msg_02, msg_03 }) => {
  const msgArr = [msg_01, msg_02, msg_03];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % msgArr.length);
    }, 3000);
  }, []);

//   useEffect(() => {
//     console.log(index);
//   }, [index]);

  return (
    <>
      <span className="ml-2 bg-custYellow text-custHotpink">{index == 0 ? msgArr[index] : ""}</span>
      <span className="pl-1 text-custYellow">{index == 1 ? msgArr[index] : ""}</span>
      <span className="pl-1 text-custOrange">{index == 2 ? msgArr[index] : ""}</span>
    </>
  );
};

export default DisplayMessage;
