/** @format */
import homou from "./homou.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="font-lato text-primary  lg:flex mb-24 md:ml-20 my-5 text-xl ">
      <div className=" md:flex-[1_0_0%] lg:flex-[1_0_30%]">
        <img src={homou} alt="logo" />
      </div>

      <div className="absolute cursor-pointer  right-4 top-0 lg:hidden">
        <IoIosMenu
          className="text-5xl"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </div>

      <div
        className={
          isExpanded
            ? "lg:flex flex-[1_0_40%]"
            : "lg:flex flex-[1_0_40%] hidden"
        }
      >
        <ul className="text-center [&>*]:my-12 lg:[&>*]:inline [&>*]:mx-5 pt-2  ">
          <li>
            <a className=" hover:text-button" href="#">
              Products
            </a>
          </li>
          <li>
            <a className=" hover:text-button" href="#">
              Features
              <MdOutlineKeyboardArrowDown className="inline" />
            </a>
          </li>
          <li>
            <a className=" hover:text-button" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className=" hover:text-button" href="#">
              Template
            </a>
          </li>
        </ul>
      </div>

      <div
        className={
          isExpanded
            ? "md:flex-[1_0_10%] text-center h-screen"
            : "lg:flex flex-[1_0_10%] hidden"
        }
      >
        <button className=" py-1 px-3 border-solid border-2 border-button ` hover:bg-button font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
