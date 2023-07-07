import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import facebook from '../../assets/images/icon-facebook.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import twitter from '../../assets/images/icon-twitter.svg'


const Footer = () => {
  return (
    <footer className="bg-customDarkGreen text-white text-center flex flex-col items-center pt-[66px] pb-[64px]">
      <img className="w-[96px]" src={logo} alt="Company Logo"></img>
      <nav className="mt-6 flex gap-6">
        <Link className="font-semibold text-[15px]" to="/">home</Link>
        <Link className="font-semibold text-[15px]" to="/about">about</Link>
      </nav>

      <div className="mt-6 opacity-60 text-[15px] leading-[25px] font-semibold">
        <p>987 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California 92714</p>
        <p>Call Us : 949-833-7432</p>
      </div>

        <div className="mt-10 mb-4 flex items-center gap-4">
        <img src={facebook} alt='Social Icon'></img>
        <img src={pinterest} alt='Social Icon'></img>
        <img src={twitter} alt='Social Icon'></img>


        </div>

        <p className="opacity-60 text-[15px] leading-[25px] font-semibold">Copyright 2023. All Rights Reserved</p>

    </footer>
  );
};

export default Footer;
