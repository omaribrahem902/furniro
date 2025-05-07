"use client"
import { useState } from "react";

const Bagination = () => {
  const [activePage, setActivePage] = useState(1); // store active button index (1, 2, or 3)

  const getButtonClass = (page: number) => {
    
    return `w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] bg-(--secondary) text-[12px] lg:text-[20px] font-semibold hover:text-white hover:bg-[#B88E2F] rounded-md lg:rounded-xl shadow-md cursor-pointer ${activePage === page ? " bg-[#B88E2F] text-white" : " hover:bg-[#B88E2F]"}`;
  };

  return (
    <div className="mt-[30px] flex justify-center gap-[38px]">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={getButtonClass(page)}
        >
          {page}
        </button>
      ))}
      <span className="loading loading-spinner text-warning"></span>
    </div>
  );
};

export default Bagination;
