import React, { useState } from "react";
import { categories } from "../utils/Categories";
import { cities } from "../utils/city";
import { brands } from "../utils/Brands";
import { models } from "../utils/models";
const BrowseUsedCars = () => {
  const [selected, setSelected] = useState(0);
  const [section, setSection] = useState("Category");
  const btns = ["Category", "City", "Make", "Model", "Budget", "Body Type"];

  const handleSelected = (e, indx, btn) => {
    setSelected(indx);
    setSection(btn);
  };

  return (
    <section className="bg-gray-200 p-4">
      <main className="max-w-5xl mx-auto">
        <p className="font-semibold text-2xl p-4">Browse Used Cars</p>
        <aside className="flex items-center gap-4 ">
          {btns.map((btn, index) => (
            <button
              onClick={(e) => handleSelected(e, index, btn)}
              className={`text-xl m-4 py-2 ${
                selected === index ? "border-b-2 border-blue-700 font-bold" : ""
              }`}
              key={index}
            >
              {btn}
            </button>
          ))}
        </aside>
        <section className="flex overflow-auto items-center justify-center flex-wrap h-72 custom-scrollbar">
          {section === "Category" && (
            <>
              {categories.map((category) => (
                <div className="flex flex-col items-center justify-center p-4 bg-white h-28 w-36 rounded-lg hover:shadow-2xl transition-all duration-150 m-4 cursor-pointer hover:font-bold text-center gap-1">
                  <img src={category.img} alt="" />
                  <p>{category.name}</p>
                </div>
              ))}
            </>
          )}
          {section === "City" && (
            <>
              {cities.map((city) => (
                <p className="p-4 m-2 hover:font-bold hover:cursor-pointer text-md text-gray-500">
                  {city}
                </p>
              ))}
            </>
          )}

          {section === "Make" && (
            <>
              {brands.map((brand) => (
                <div className="flex flex-col items-center justify-center p-4 bg-white h-28 w-36 rounded-lg hover:shadow-2xl transition-all duration-150 m-4 cursor-pointer hover:font-bold text-center gap-1">
                  <img className="w-20" src={brand.img} alt="" />
                  <p>{brand.name}</p>
                </div>
              ))}
            </>
          )}
          {section === "Model" && (
            <>
              {models.map((model) => (
                <p className="p-4 m-2 hover:font-bold hover:cursor-pointer text-md text-gray-500">
                  {model}
                </p>
              ))}
            </>
          )}
        </section>
      </main>
    </section>
  );
};

export default BrowseUsedCars;
