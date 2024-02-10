import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { GoGitCompare } from "react-icons/go";

const Bikes = () => {
  const newBikes = [
    "Honda CG 125",
    "Yamaha YBR 125",
    "Honda CD 70",
    "Suzuki GD 110S",
    "Suzuki GS 150",
    "Honda Pridor",
    "Yamaha YBR 125G",
    "Honda CB 150F",
  ];

  const usedBikes = [
    "Honda CG 125",
    "Yamaha YBR 125",
    "Honda CD 70",
    "Hi Speed infinity 150",
    "Suzuki GS 150",
    "Honda Pridor",
    "Yamaha YBR 125G",
    "Honda CB 150F",
  ];
  return (
    <main className="w-full flex">
      <div className=" justify-start border-r-2 border-gray-400/30">
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <MagnifyingGlassIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Find used Bikes
            <p className="text-sm">Find your dream bike</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <RiMotorbikeFill className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Used Bikes listing
            <p className="text-sm">Search from over 5000+ options</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <StarIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Featured used bikes
            <p className="text-sm">Browse our featured bikes</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <TagIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Sell your bike
            <p className="text-sm ">
              Post a free ad and sell your bike quickly
            </p>
          </p>
        </aside>
      </div>
      <div className="flex flex-col justify-start border-r-2 border-gray-400/30">
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <MagnifyingGlassIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Find New Bikes
            <p className="text-sm">See new bikes in Pakistan</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <GoGitCompare className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Bike comparisons
            <p className="text-sm">Compare bike and find thier differences</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <ChatBubbleLeftRightIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            Bike reviews
            <p className="text-sm">Read reviews of all bikes in Pakistan</p>
          </p>
        </aside>
        <aside className="flex gap-2 p-4 hover:text-blue-600 cursor-pointer">
          <TagIcon className="w-4 h-4 mt-2" />
          <p className="text-lg ">
            New bikes prices
            <p className="text-sm ">See prices of new bikes</p>
          </p>
        </aside>
      </div>

      <div className=" flex flex-col justify-start p-4 mx-6 ">
        <p className="text-lg flex pb-3 gap-1 items-center  ">
          <RiMotorbikeFill className="w-4 h-4" />
          Popular New Bikes
        </p>
        {newBikes.map((bike) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{bike}</p>
        ))}
      </div>
      <div className="flex flex-col items-center p-4 mx-6">
        <p className="text-lg flex gap-1 pb-3 items-center  ">
          <RiMotorbikeFill className="w-4 h-4" />
          Popular Used Bikes
        </p>
        {usedBikes.map((bike) => (
          <p className="p-2 hover:text-blue-600 cursor-pointer">{bike}</p>
        ))}
      </div>
    </main>
  );
};

export default Bikes;
