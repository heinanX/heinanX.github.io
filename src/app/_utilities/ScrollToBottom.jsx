"use client";
import { animateScroll } from "react-scroll";
import { FaArrowAltCircleDown } from "react-icons/fa";

const ScrollToBottom = () => {
  const options = {
    duration: 500,
    smooth: true,
  };
  const scrollToBottom = () => {
    animateScroll.scrollToBottom(options);
  };

  return (
    <div
      onClick={scrollToBottom}
      className="fixed text-4xl text-white opacity-40 bottom-10 right-10 hover:cursor-pointer hover:animate-bounce"
    >
      <FaArrowAltCircleDown />
    </div>
  );
};

export default ScrollToBottom;
