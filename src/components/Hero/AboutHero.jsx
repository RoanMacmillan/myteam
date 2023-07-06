import React from "react";
import bgPattern from "../../assets/images/bg-pattern-about-1-mobile-nav-1.svg";

const AboutHero = () => {
  return (
    <div className=" relative px-6 pb-[108px] pt-20 text-center text-white overflow-hidden">
      <h1 className="text-[40px] font-bold leading-[40px]">About</h1>
      <p className="mx-auto mt-[18px] max-w-[457px] text-[15px] font-semibold leading-7">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>

      <img
        className="absolute bottom-[-100px] right-[-100px]"
        src={bgPattern}
        alt="Background Pattern"
      ></img>
    </div>
  );
};

export default AboutHero;
