import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const AutoStore = () => {
  return (
    <main className="flex flex-col justify-start p-4 gap-2">
      <Link to={"/autostore"}>
        <aside className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
          <AiOutlineShoppingCart />
          <p className="font-medium text-md">PakWheels Auto Store</p>
        </aside>
      </Link>
      <p className="text-gray-500 w-56 text-sm">
        Buy Auto Parts & accessories directly from PakWheels
      </p>
      <aside className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
        <MagnifyingGlassCircleIcon className="w-5 h-5" />
        <p className="font-medium text-md">Find Auto Parts</p>
      </aside>
      <p className="text-gray-500 w-56 text-sm">Find Auto Parts for your car</p>
      <aside className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
        <AiOutlineShoppingCart />
        <p className="font-medium text-md">Sell Car Parts</p>
      </aside>
      <p className="text-gray-500 w-56 text-sm">
        Post a free Ad and sell your car parts quickly
      </p>
    </main>
  );
};

export default AutoStore;
