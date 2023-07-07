import React from "react";
import items from "../../data/build.json";

const ContactHero = () => {
  return (
    <div className="mt-[80px] px-6 mb-[64px]">
      <h1 className="text-center text-[40px] font-bold leading-[40px] text-white">
        Contact
      </h1>
      <h2 className="text-center text-[32px] font-bold leading-[48px] text-lightCoral">
        Ask us about
      </h2>

      <div className="flex items-center gap-[23px] mt-12">
        <img src={items[0].image}></img>
        <p className=" text-white font-bold text-[18px] leading-[28px]">The quality of our talent network</p>
      </div>
      <div className="flex items-center gap-[23px] mt-[40px]">
        <img src={items[1].image}></img>
        <p className=" text-white font-bold text-[18px] leading-[28px]">The quality of our talent network</p>
      </div>
      <div className="flex items-center gap-[23px] mt-[40px]">
        <img src={items[2].image}></img>
        <p className=" text-white font-bold text-[18px] leading-[28px]">The quality of our talent network</p>
      </div>
    </div>
  );
};

export default ContactHero;
