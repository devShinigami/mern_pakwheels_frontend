import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import NewCarCard from "../components/NewCarCard";
import { brands } from "../utils/Brands";

const NewCarsList = () => {
  const [makeOpen, setMakeOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (name) => {
    setSelectedOption(name);
    console.log(selectedOption);
  };

  return (
    <section className="bg-gray-100 p-4">
      <main className="max-w-5xl mx-auto ">
        <p className="text-sm text-gray-500 m-2">
          Home / New Cars / Search / Toyota
        </p>
        <main className="flex justify-between gap-4 w-full">
          {/* Filteration Section */}
          <aside className="flex flex-col justify-start w-1/4 my-2">
            <>
              <button
                onClick={() => setMakeOpen((prev) => !prev)}
                className="uppercase flex items-center justify-between text-xs font-semibold p-2  bg-white"
              >
                Make
                <span>
                  {makeOpen ? (
                    <ChevronDownIcon className="w-4" />
                  ) : (
                    <ChevronRightIcon className="w-4" />
                  )}
                </span>
              </button>
              {makeOpen && (
                <aside className="duration-150 transition-all py-2 mt-1 p-2 bg-white rounded-md ">
                  {brands.map((brand, indx) => (
                    <div key={indx} className="flex items-center  gap-1 m-1">
                      <input
                        type="checkbox"
                        name={brand.name}
                        checked={selectedOption === brand.name ? true : false}
                        onChange={() => handleChange(brand.name)}
                        value={brand.name}
                      />
                      <span className="text-sm">{brand.name}</span>
                    </div>
                  ))}
                </aside>
              )}
            </>
          </aside>
          {/* ListItems */}
          <aside className="w-3/4 flex flex-col gap-2 bg-gray-100 p-2">
            {/* sorting */}
            <main className="flex items-center justify-between gap-2 h-10 bg-white  text-gray-400 py-8 px-2">
              <p className="font-semibold text-xl text-blue-900">New Cars</p>
              <p>1-5 of 164 Results</p>
            </main>
            {/* card */}
            <main className="flex flex-col items-center w-full gap-2">
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
              <NewCarCard />
            </main>
            {/* pagination */}
            <main></main>
          </aside>
        </main>
      </main>
    </section>
  );
};

export default NewCarsList;
