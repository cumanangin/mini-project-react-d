import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="12pro:h-custom-60px w-full md:h-custom-130px lg:h-custom-120px bg-white-500 12pro:sticky md:sticky lg:sticky xl:sticky">
        {" "}
        {/* frame navbar */}
        <div className="12pro:flex 12pro:gap-71px 12pro:items-center md:flex md:gap-250px lg:gap-500px xl:gap-850px">
          {" "}
          {/* div logo & link */}
          <div>
            {" "}
            {/* div for logo */}
            <img
              src={Logo}
              className="12pro:w-custom-80px 12pro:h-custom-25px 12pro:ml-custom-20px  12pro:left-5 12pro:mt-custom-17px 12pro:mb-custom-18px 
              md:w-custom-173px
              md:h-custom-52px
              md:my-custom-39px
              md:ml-custom-60px lg:w-custom-173px lg:h-custom-52px
              lg:mt-custom-34px
              lg:mb-custom-34px
              lg:ml-custom-60px xl:w-custom-173px xl:h-custom-52px
              xl:mt-custom-34px
              xl:mb-custom-34px
              xl:ml-custom-60px"
            />
          </div>
          <div className="">
            {" "}
            {/* group link */}
            <ul
              id="navbar"
              className="12pro:flex 12pro:gap-3 12pro:items-center 12pro:text-13px md:text-18px"
            >
              <li>
                <Link to="/"> HOME </Link>
              </li>
              <li>
                <Link to="/news"> NEWS </Link>
              </li>
              <li>
                <Link to="/members"> MEMBERS </Link>
              </li>
              <li>
                <a href="https://www.tokopedia.com/officialjkt48"> SHOP </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
