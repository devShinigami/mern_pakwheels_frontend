import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const AutoStore = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const filterationItems = [
    {
      name: "Search By keyword",
      input: (
        <input
          type="text"
          placeholder="e.g. lights, tyres, etc."
          className="focus:outline-none bg-gray-100 p-1 border border-gray-300"
        />
      ),
      button: (
        <button className="bg-blue-900 py-1 px-2 text-white text-sm">Go</button>
      ),
      openClose: () => {
        setSearchOpen((prev) => !prev);
      },
    },
    {
      name: "City",
      cites: ["Lahore", "Karachi", "Peshawar", "Multan"],
    },
    {
      name: "Make",
    },
    {
      name: "Brand",
    },
    {
      name: "body type",
    },
    {
      name: "Category",
    },
  ];
  return (
    <section>
      <main className="max-w-5xl mx-auto">
        <p className="text-2xl text-blue-900 font-semibold m-2">
          Spare Parts and Accessories for Sale in Pakistan
        </p>
        <aside className="flex justify-between items-center text-gray-400 m-2">
          <p>
            Home / Parts & Accessories / Spare Parts and Accessories for Sale in
            Pakistan
          </p>
          <p>1-25 of 7000 Results</p>
        </aside>
        <main className="flex justify-between gap-4 w-full">
          {/* Filteration Section */}
          <aside className="flex flex-col justify-start w-1/4">
            <p className="bg-sky-700 p-2 uppercase tracking-tight text-xs text-white font-semibold">
              Show Results by :
            </p>
            {filterationItems.map((item) => (
              <>
                <button
                  onClick={item.openClose}
                  className="uppercase flex items-center justify-between text-xs font-semibold p-2 bg-gray-100"
                >
                  {item.name}
                  <span>
                    {item.input && searchOpen ? (
                      <ChevronDownIcon className="w-4" />
                    ) : (
                      <ChevronRightIcon className="w-4" />
                    )}
                  </span>
                </button>
                {item.input && searchOpen && (
                  <aside className="w-full duration-150 transition-all will-change-transform   flex py-2 m-2">
                    {item.input}
                    {item.button}
                  </aside>
                )}
              </>
            ))}
          </aside>
          {/* ListItems */}
          <aside className="w-3/4 flex flex-col gap-2 bg-gray-100 p-2">
            {/* sorting */}
            <main className="flex items-center gap-2 h-10 bg-white rounded-lg text-gray-400 p-2">
              <p>Sort by: </p>
              <select>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
                <option value="">Updated Date Recent First</option>
              </select>
            </main>
            {/* card */}
            <main className="flex flex-col items-center w-full gap-2">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </main>
            {/* pagination */}
            <main></main>
          </aside>
        </main>
      </main>
    </section>
  );
};

export default AutoStore;
