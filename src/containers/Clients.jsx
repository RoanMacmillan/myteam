import React from "react";
import items from "../data/clients.json";
import bgPattern from '../assets/images/bg-pattern-about-4.svg'

const Clients = () => {
  return (
    <div className="bg-stateGreen text-center pt-[88px] pb-[88px] relative overflow-hidden">
        <img className="absolute top-[-100px] left-[-100px]" src={bgPattern} alt='Background Pattern'></img>
      <h2 className="text-[32px] font-bold leading-[32px] text-white">
        Some of our clients
      </h2>

<div className="flex flex-col items-center gap-8 mt-16">
      {items.map((item) => (
        <div  key={item.id}>
          <img className="transform scale-50" src={item.image} alt="Clients logo"></img>
        </div>
      ))}

      </div>
    </div>
  );
};

export default Clients;
