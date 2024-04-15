"use client";
import { useEffect, useState } from "react";

const Carousel = ({ arr }) => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextIndex = (index + 1) % arr.length;
      arr[index].active = false;
      arr[nextIndex].active = true;
      setIndex(nextIndex);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <ul className="flex items-center justify-center w-full h-40 overflow-hidden">
      {play ? (
        arr.map((item, i) => (
          <li
            key={i}
            className={`text-7xl ${index === i ? "animate-trip" : "hidden"}`}
          >
            {item.tech}
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default Carousel;
