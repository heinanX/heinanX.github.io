import { useState } from "react";

const Drawer = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full lg:hidden">
      <div className={`transition-linear overflow-hidden duration-500 ease-in-out select-none ${isActive ? `max-h-60`: "max-h-7"}`}>
        <div
          className="flex flex-row gap-2 text-xl tracking-wider uppercase cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <p className={isActive ? '' : 'hover:animate-pulse'}> {isActive ? '-' : '+'}</p>
          {title}
        </div>
        <p className={`text-custBackground pt-1`}>
          {body}.
        </p>
      </div>
    </div>
  );
};

export default Drawer;
