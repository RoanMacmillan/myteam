import React from "react";
import items from "../data/success.json";
import bgPattern from '../assets/images/bg-pattern-home-4-about-3.svg'
import quote from '../assets/images/icon-quotes.svg'
import bgPattern2 from '../assets/images/bg-pattern-home-5.svg'

const SuccessHome = () => {
  return (
    <div className="bg-deepJungleGreen px-6 pt-[140px] pb-[164px] relative text-center">
      <img className="absolute top-0 left-0" src={bgPattern} alt='Background Pattern'></img>

      <h2 className="text-white font-bold leading-[32px] text-[32px] ">Delivering real results for top companies. Some of our <span className="text-ruptureBlue">success stories.</span></h2>

      {items.map((item) => (
        <div key={item.id} className="relative">
          <img className="absolute inset-0 mx-auto top-[-35px] z-0" src={quote} alt='Quote bg pattern'></img>
          <p className="mt-[84px] text-white leading-[25px] text-[15px] font-semibold relative z-10">{item.paragraph}</p>
          <h3 className="text-[18px] leading-[28px] font-bold text-ruptureBlue mt-4">{item.heading}</h3>
          <h4 className="text-[13px] leading-[18px] text-white font-medium italic">{item.title}</h4>
          <img className="w-[62px] rounded-full mx-auto border-2 border-teal-200 mt-4" src={item.image} alt="Success Profile Pic"></img> 
        </div>
))}
          <img className="absolute bottom-0
          right-0" src={bgPattern2} alt='Background Pattern'></img>

    </div>
  );
};

export default SuccessHome;
