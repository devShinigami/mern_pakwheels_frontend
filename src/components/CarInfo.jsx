import React, { useEffect, useRef, useState } from "react";
import { brands } from "../utils/Brands";
import useOutsideClick from "../utils/ClickOutside";
import handleRequest from "../utils/handleRequest";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setCarInfo } from "../context/car";
import { setLoading } from "../context/loading";
import Loading from "./Loading";

const CarInfo = ({ setState }) => {
  const carInfo = useSelector((state) => state.car);
  const { loading } = useSelector((state) => state.loading);
  const [carVersions, setCarVersions] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [car, setCar] = useState({
    companyName: carInfo?.car?.companyName,
    make: carInfo?.car?.make,
    modelName: carInfo?.car?.modelName,
    year: carInfo?.car?.year,
  });
  const array = new Array(24).fill(2000);
  const years = array.map((year, index) => year + index);
  const clicked = useRef();
  const dispatch = useDispatch();
  useOutsideClick(clicked, () => {
    setState(false);
  });
  console.log(carVersions);
  useEffect(() => {
    dispatch(setLoading(true));
    const getAllCars = async () => {
      const response = await handleRequest(
        "GET",
        `/getallcars?companyName=${car.companyName}&makeName=${car.make}`
      );
      setCarModels(response?.foundCars);
      setCarVersions(response?.versions);
      dispatch(setLoading(false));
    };
    getAllCars();
  }, [dispatch, car.companyName, car.modelName, car.make]);

  const handleModel = (brandName) => {
    setCar({ ...car, companyName: brandName });
    let newArr = [];
    setCarVersions(newArr);
  };

  const handleCar = () => {
    dispatch(setCarInfo(car));
    setState(false);
  };
  return (
    <section className="absolute flex justify-center items-center inset-0 h-screen bg-black/30">
      <main
        ref={clicked}
        className="w-1/2 mx-auto flex flex-col justify-center items-center bg-gray-200 rounded-xl overflow-hidden h-1/2"
      >
        <>
          <header className="flex justify-between px-8 w-full font-semibold bg-white p-6 text-lg ">
            <p>Model Year</p>
            <p>Make</p>
            <p>Model</p>
            <p>Version</p>
          </header>
          {loading ? (
            <div className="h-full flex flex-col justify-center items-center">
              <Loading />
            </div>
          ) : (
            <>
              <aside className="h-64 w-full flex justify-evenly">
                <section className="h-full w-1/4 flex flex-col items-center overflow-y-auto overflow-x-hidden custom-scrollbar">
                  {years.reverse().map((saal) => (
                    <p
                      className={`cursor-pointer px-4 rounded-xl mt-2 ${
                        saal === car.year ? "bg-blue-900 text-white" : ""
                      }`}
                      onClick={() => setCar({ ...car, year: saal })}
                    >
                      {saal}
                    </p>
                  ))}
                </section>
                <section className="h-full w-1/4 flex flex-col items-center overflow-y-auto overflow-x-hidden custom-scrollbar px-4">
                  {car.year && (
                    <>
                      {brands?.map((brand) => (
                        <div
                          className={`flex w-full items-center justify-evenly cursor-pointer px-4 rounded-xl ${
                            brand.name === car.companyName
                              ? "bg-blue-900 text-white"
                              : ""
                          }`}
                        >
                          <img
                            src={brand.img}
                            alt="brands"
                            className={`w-12 h-12 object-contain grayscale ${
                              brand.name === car.companyName
                                ? "filter-none"
                                : ""
                            }`}
                          />
                          <p onClick={() => handleModel(brand.name)}>
                            {brand.name.substring(0, 9)}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </section>
                <section
                  className={`h-full w-1/4 flex flex-col items-center overflow-y-auto overflow-x-hidden custom-scrollbar`}
                >
                  {carModels?.map((model) => (
                    <div
                      onClick={() => setCar({ ...car, make: model.make })}
                      className="flex items-center cursor-pointer justify-between gap-2 ml-6 mt-2"
                    >
                      <p
                        className={`rounded-xl px-4 cursor-pointer ${
                          car.make === model.make
                            ? "bg-blue-900 text-white "
                            : ""
                        }`}
                      >
                        {model.make}
                      </p>
                      <ArrowRightIcon className="w-3 h-3 mt-1" />
                    </div>
                  ))}
                </section>
                <section className="h-full w-1/4 flex flex-col items-center overflow-y-auto overflow-x-hidden custom-scrollbar">
                  {carVersions?.map((vers) => (
                    <p
                      className={`cursor-pointer rounded-xl px-4 ${
                        car.modelName === vers.modelName
                          ? "bg-blue-900 text-white"
                          : ""
                      }`}
                      onClick={() =>
                        setCar({ ...car, modelName: vers.modelName })
                      }
                    >
                      {vers.modelName}
                    </p>
                  ))}
                </section>
              </aside>
              {car.companyName && car.year && car.modelName && car.make && (
                <button
                  onClick={handleCar}
                  className="px-2 py-1 text-white m-2 bg-red-700/80 rounded-xl"
                >
                  Confirm
                </button>
              )}
            </>
          )}
        </>
      </main>
    </section>
  );
};

export default CarInfo;
