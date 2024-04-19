import { useState } from "react";

const Drawer = ({ trait }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full lg:hidden">
      <div className={`transition-all overflow-hidden duration-500 ease-in-out ${isActive ? "h-[150px]" : "h-[28px]"}`}>
        <div
          className="flex flex-row gap-2 text-xl tracking-wider uppercase cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <p className={isActive ? '' : 'hover:animate-pulse'}> {isActive ? '-' : '+'}</p>
          {trait.item}
        </div>
        <p className={`text-custBackground pt-1`}>
          {trait.example}.
        </p>
      </div>
    </div>
  );
};

export default Drawer;
