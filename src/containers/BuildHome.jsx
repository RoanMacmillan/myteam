import React from "react";
import items from '../data/build.json'
import bgPattern from '../assets/images/bg-pattern-home-3.svg'

const Build = () => {
  return (
    <div className="px-6 pt-16 pb-16 relative bg-stateGreen overflow-hidden">
      <img className="absolute top-0 right-[-100px]" src={bgPattern} alt='Background Pattern'></img>
      <div className="bg-lightCoral h-1 w-[50px]"></div>
      <h2 className="mt-8 text-[32px] font-bold text-white leading-[32px] w-[70%]">Build & manage distributed teams like no one else.</h2>

      {items.map((item) => (
        <div key={item.id} className="text-center mt-12">
          <img className="w-[72px] mx-auto" src={item.image} alt={item.heading} />
          <h2 className="mt-4 text-lightCoral text-[18px] leading-[28px] font-bold">{item.heading}</h2>
          <p className="mt-2 text-white font-semibold leading-[25px] text-[15px]">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Build;



