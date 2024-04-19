"use client"
import { useState } from "react";

const Drawer = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-white bg-gray-800 rounded-t-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">curiosity</span>
      </button>
      <div
        className={`${
          isOpen ? "max-h-[100vh]  duration-500 ease-in-out overflow-y-auto" : "max-h-0 overflow-hidden"
        } bg-gray-200 border border-t-0 rounded-b-md`}
      >
        <div className="p-4"> what is this </div>
      </div>

    <p>this is the other content</p>
    </div>
  );
};


// TODO: Add logic and design for projects I want to highlight.



const page = () => {
  return (
 <Drawer />  
  )
}

export default page