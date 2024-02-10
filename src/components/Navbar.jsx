import React, { useRef, useState } from "react";
import useOutsideClick from "../utils/ClickOutside";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import UsedCar from "./NavbarComponents/UsedCar";
import NewCars from "./NavbarComponents/NewCars";
import Bikes from "./NavbarComponents/Bikes";
import AutoStore from "./NavbarComponents/AutoStore";
import { Link } from "react-router-dom";
const Navbar = () => {
  const openRef = useRef(null);

  const [open, setOpen] = useState({
    usedCars: false,
    newCars: false,
    bikes: false,
    autoStore: false,
    more: false,
  });

  useOutsideClick(openRef, () => {
    setOpen({ usedCars: false, newCars: false });
  });

  return (
    <main className="flex items-center justify-center  ">
      <img
        src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg"
        alt="pakwheels"
        className="w-36 object-contain mr-12"
      />
      <section className="flex items-center">
        <aside
          onClick={() => setOpen({ usedCars: true })}
          className="nav-option"
        >
          <p className="inline">Used Cars</p>
          <p className="h-4 w-4">
            <span>
              <ChevronDownIcon />
            </span>
          </p>
        </aside>
        <aside
          onClick={() => setOpen({ newCars: true })}
          className="nav-option"
        >
          <p className="inline">New Cars</p>
          <p className="h-4 w-4">
            <span>
              <ChevronDownIcon />
            </span>
          </p>
        </aside>
        <aside onClick={() => setOpen({ bikes: true })} className="nav-option">
          <p className="inline">Bikes</p>
          <p className="h-4 w-4">
            <span>
              <ChevronDownIcon />
            </span>
          </p>
        </aside>
        <aside
          onClick={() => setOpen({ autoStore: true })}
          className="nav-option"
        >
          <p className="inline">Auto Store</p>
          <p className="h-4 w-4">
            <span>
              <ChevronDownIcon />
            </span>
          </p>
        </aside>
        <aside className="nav-option">
          <p className="inline">Videos</p>
        </aside>
        <aside className="nav-option">
          <p className="inline">Forums</p>
        </aside>
        <Link to={"/blog"}>
          <aside className="nav-option">
            <p className="inline">Blogs</p>
          </aside>
        </Link>
        <aside
          onClick={() => setOpen({ autoStore: true })}
          className="nav-option"
        >
          <p className="inline">More</p>
          <p className="h-4 w-4">
            <span>
              <ChevronDownIcon />
            </span>
          </p>
        </aside>
        {open.usedCars && (
          <section
            ref={openRef}
            className={`${
              open.usedCars
                ? "bg-white absolute top-28 ml-6 border-b-4 transition-all duration-150 border-red-500/70 "
                : ""
            }`}
          >
            <UsedCar />
          </section>
        )}
        {open.newCars && (
          <section
            ref={openRef}
            className={`${
              open.newCars
                ? "bg-white absolute top-28 ml-6 border-b-4 transition-all duration-150 border-red-500/70 z-40 "
                : ""
            }`}
          >
            <NewCars />
          </section>
        )}
        {open.bikes && (
          <section
            ref={openRef}
            className={`${
              open.bikes
                ? "bg-white absolute top-28 ml-6 border-b-4 transition-all duration-150 border-red-500/70 "
                : ""
            }`}
          >
            <Bikes />
          </section>
        )}
        {open.autoStore && (
          <section
            ref={openRef}
            className={`${
              open.autoStore
                ? "bg-white absolute top-28 right-[40%] border-b-4 transition-all duration-150 border-red-500/70 "
                : ""
            }`}
          >
            <AutoStore />
          </section>
        )}
        <Link to={"/used-cars/sell"}>
          <button className="bg-red-700/80 tracking-wider text-white text-xl px-1 py-1 rounded-sm">
            Post an Ad
            <ChevronDownIcon className="inline h-4 w-4 text-white" />
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Navbar;
