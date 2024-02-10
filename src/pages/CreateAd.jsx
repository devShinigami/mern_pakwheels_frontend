import React, { useEffect, useMemo, useState } from "react";
import { FaCar } from "react-icons/fa";
import { BsImages, BsTags } from "react-icons/bs";
import { suggestions } from "../utils/suggestion";
import { City } from "country-state-city";
import CarInfo from "../components/CarInfo";
import { useSelector } from "react-redux";
import handleRequest from "../utils/handleRequest";

const CreateAd = () => {
  const { car } = useSelector((state) => state.car);
  const [description, setDescription] = useState("");
  console.log(car);
  const [showMore, setShowMore] = useState(false);
  const [ad, setAd] = useState({
    carDetails: {
      car: "",
      registeredIn: "",
      city: "",
      color: "",
      milesDriven: "",
    },
    sellerComments: [],
  });

  const [carInfo, setCarInfo] = useState(false);
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddDesc = (suggestion) => {
    setDescription(description.concat(suggestion + ","));
  };

  let count = 999;
  let remainingCharac = count - description.length;
  const shuffleSuggestions = () => {
    for (let i = suggestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suggestions[i], suggestions[j]] = [suggestions[j], suggestions[i]];
    }
  };
  useMemo(() => shuffleSuggestions(), []);

  useEffect(() => {
    const getCar = async () => {
      const response = await handleRequest(
        "GET",
        `/getSingleCar?companyName=${car?.companyName}&model=${car?.modelName}&make=${car?.make}`
      );
      console.log(response);
    };
    getCar();
  }, [car]);

  return (
    <section
      className={`bg-gray-100 min-h-screen ${
        carInfo && "overflow-hidden h-screen"
      } py-8 `}
    >
      <main className="bg-white flex flex-col items-center justify-center p-4 ">
        <p className="text-3xl text-blue-900 font-semibold p-2">
          Sell your Car With 3 Easy & Simple Steps!
        </p>
        <p>It's free and takes less than a minute</p>
        <div className="flex items-center justify-between m-4 gap-3">
          <FaCar className="w-10 h-10" />
          <p> Enter Your Car Information </p>
          <BsImages className="w-10 h-10" />
          <p> Upload Photos</p>
          <BsTags className="w-10 h-10" />
          <p> Enter Your Selling Price</p>
        </div>
      </main>
      <main className="max-w-4xl bg-white mx-auto m-8 hover:shadow-lg">
        <p className="text-2xl px-8 pt-4">Car Information</p>
        <p className="px-8 ">(All fields marked with * are mandatory)</p>
        <section className="flex flex-col justify-center items-center gap-6 my-8">
          <aside className="w-1/2 flex justify-between ">
            <label className="p-2 text-sm" htmlFor="City">
              City
            </label>
            <select className="w-4/5 custom-scrollbar  p-2 hover:border-cyan-600 border border-gray-200 outline-none">
              <option value="">City</option>
              {City.getCitiesOfCountry("PK").map((city) => (
                <>
                  <option className="bg-white text-black" value={city.name}>
                    {city.name}
                  </option>
                </>
              ))}
            </select>
          </aside>
          <aside className="w-1/2 flex justify-between ">
            <label className="text-sm p-2" htmlFor="Car Info">
              Car Info
            </label>
            <button
              onClick={() => setCarInfo(true)}
              className="bg-white p-2 w-4/5 border border-gray-200 hover:border-cyan-600"
            >
              {car &&
                car.companyName + " / " + car.modelName + " / " + car.make}
              {!car && "Make / Model / Version"}
            </button>
          </aside>
          <aside className="w-1/2 flex justify-between ">
            <label className="text-sm py-2" htmlFor="Registered In">
              Registered In
            </label>
            <select className="w-4/5 p-2 hover:border-cyan-600 outline-cyan-600 border border-gray-200">
              <option value="un-Registered"> Un-registered</option>
              <option value="Registered">Registered</option>
            </select>
          </aside>
          <aside className="w-1/2 flex justify-between ">
            <label className="text-sm py-2" htmlFor="Exterior Color">
              Exterior Color
            </label>
            <select className="w-4/5 p-2 hover:border-cyan-600 outline-cyan-600 border border-gray-200">
              <option value="">Exterior Color</option>
            </select>
          </aside>
          <aside className="w-1/2 flex ">
            <label className="text-sm py-2 mx-5 bg-white" htmlFor="Mileage">
              Mileage
            </label>
            <div className="w-full flex justify-end">
              <span className="py-2 bg-gray-100 px-1">KM</span>
              <input
                type="number"
                placeholder="Mileage"
                className="w-full p-2 hover:border-cyan-600 outline-none border border-gray-200"
              />
            </div>
          </aside>
          <aside className="w-1/2 flex ">
            <label className="text-sm py-2 mx-7" htmlFor="price">
              Price
            </label>
            <div className="w-full flex justify-end">
              <span className="py-2 bg-gray-100 px-0.5">PKR</span>
              <input
                type="number"
                placeholder="Price"
                className="p-2 w-full hover:border-cyan-600 outline-none border border-gray-200"
              />
            </div>
          </aside>
          <aside className="w-3/4 flex justify-between border-b border-gray-400 pb-4">
            <label className="text-sm py-2" htmlFor="description">
              Ad Description
            </label>
            <textarea
              value={description}
              onChange={(e) => handleChange(e)}
              className="w-4/5 h-36 p-2 custom-scrollbar hover:border-cyan-600  border border-gray-200 outline-none"
              placeholder="Describe Your car:                                                                                                                              Example: Alloy rim, first owner, geniune parts, maintained by authorized workshop, execllent mileage, original parts"
            />
          </aside>
          <p>Remaining Characters: {remainingCharac}</p>
          <main>
            <p className="text-center">You can also use these suggestions</p>
            <div
              className={`flex flex-wrap gap-2 p-4 max-w-3xl ${
                showMore ? "h-full" : "h-28 overflow-hidden"
              } `}
            >
              {suggestions.map((suggestion) => (
                <>
                  {description.includes(suggestion) ? (
                    ""
                  ) : (
                    <button
                      onClick={() => handleAddDesc(suggestion)}
                      className="px-4 py-2 border-blue-400 rounded-3xl border text-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-150"
                    >
                      {suggestion}
                    </button>
                  )}
                </>
              ))}
            </div>
          </main>
          {suggestions.length !== 0 && (
            <button
              className="px-4 py-2 border  m-2 w-full hover:bg-gray-200"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Hide Suggestions" : "Show More Suggestions"}
            </button>
          )}
        </section>
      </main>
      {carInfo && <CarInfo setState={setCarInfo} />}
    </section>
  );
};

export default CreateAd;
