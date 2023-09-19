"use client";

import Image from "next/image";
import Logo from "../assets/logo.png";
import Down from "../assets/caret-down 2.png";
import Location from "../assets/location 1.png";
import Home from "../assets/home.png";
import Earning from "../assets/earning.png";
import Service from "../assets/service.png";
import Asset from "../assets/assets.png";
import { useState } from "react";
// import { useEffect } from "react";
const SideBar = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="sidebar min-w-1/4">
      <div className="p-5">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" optionBox bg-white rounded-xl p-3 my-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex justify-between items-center ">
            <Image className="location" src={Location} alt="location" />
            <p>Rajarajeshwari Nagar</p>
            <Image
              src={Down}
              alt="dropdown"
              className={show ? "rotate-180" : ""}
              onClick={() => setshow(!show)}
            />
          </div>
          <ul className={show ? "" : "hidden"}>
            <li className="w-full  rounded-t-lg">
              <div className="flex flex-row-reverse items-center pl-3">
                <input
                  id="list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Branch 2
                </label>
              </div>
            </li>
            <hr></hr>
            <li className="w-full rounded-t-lg ">
              <div className="flex flex-row-reverse items-center pl-3">
                <input
                  id="list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-id"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Branch 3
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Navigation */}
      <div >
        <div className=" cursor-pointer navigation flex items-center justify-between px-8 py-3  m-auto ">
          <Image className=" w-6" src={Home} alt="Home" />
          <span className="flex-1 text-start mx-4 text-lg text-white">
            Home
          </span>
        </div>
        <div className="cursor-pointer navigation flex items-center justify-between px-8 py-3  m-auto ">
          <Image className=" w-6" src={Earning} alt="Earning" />
          <span className="flex-1 text-start mx-4 text-lg text-white">
            My Earnings
          </span>
        </div>
        <div className="cursor-pointer navigation flex items-center justify-between px-8 py-3  m-auto ">
          <Image className=" w-6" src={Service} alt="Service" />
          <span className="flex-1 text-start mx-4 text-lg text-white">
            My Services
          </span>
        </div>
        <div className="cursor-pointer navigation flex items-center justify-between px-8 py-3  m-auto ">
          <Image className=" w-6" src={Asset} alt="Assets" />
          <span className="flex-1 text-start mx-4 text-lg text-white">
            My Assets
          </span>
        </div>
       
      </div>
    </div>
  );
};

export default SideBar;
