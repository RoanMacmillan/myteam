import React from "react";
import heroImg from '../../assets/images/bg-pattern-home-2.svg'

const Hero = () => {
  return (
    <div className=" pt-20 pb-[197px] text-center px-6 text-white relative">
      <h1 className="text-[40px] leading-[40px] font-bold">Find the <br></br> best <span className="text-lightCoral">talent</span></h1>
      <p className="mt-[18px] text-[15px] leading-7 font-semibold max-w-[457px] mx-auto">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>

      <img className="absolute bottom-0 left-0 right-0 m-auto" src={heroImg} alt='Background Pattern'></img>

    </div>
  );
};

export default Hero;
