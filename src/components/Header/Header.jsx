import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 pt-12">
      <img className="w-[128px]" src={Logo} alt="Company Logo"></img>

      <img onClick={handleClick} src={Hamburger} alt="Hamburger Button"></img>

      {menuOpen && (
        <div
          onClick={handleClick}
          className="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-50"
        ></div>
      )}

      {menuOpen && (
        <div className="fixed right-0 top-0 z-20 h-full w-[255px] bg-policeBlue">
          <img
            className="absolute right-[24px] top-14"
            onClick={handleClick}
            src={close}
            alt="Close button"
          ></img>

          <nav className="ml-12 mt-[112px] flex flex-col gap-6 text-[18px] font-semibold leading-[28px] text-white">
            <Link onClick={handleClick} to="/">
              home
            </Link>
            <Link onClick={handleClick} to="/about">
              about
            </Link>
            <Link
              onClick={handleClick}
              to="/contact"
              className="flex h-[42px] w-44 items-center justify-center rounded-full border border-white"
            >
              contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
