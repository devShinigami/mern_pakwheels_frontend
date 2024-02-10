import {
  BookmarkSquareIcon,
  CalendarDaysIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useMemo, useRef, useState } from "react";
import {
  HiLocationMarker,
  HiOutlineHeart,
  HiOutlineUser,
  HiPhone,
} from "react-icons/hi";
import { BiSolidGasPump, BiTachometer } from "react-icons/bi";
import { GiGearStickPattern } from "react-icons/gi";
const UsedCarDetails = () => {
  const carImages = useMemo(
    () => [
      "https://cache4.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402424.webp",
      "https://cache1.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402421.webp",
      "https://cache1.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402430.webp",
      "https://cache1.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402431.webp",
      "https://cache3.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402428.webp",
      "https://cache2.pakwheels.com/ad_pictures/8840/toyota-vitz-1-0-f-2011-88402432.webp",
    ],
    []
  );

  const [count, setCount] = useState(0);
  const [position, setPosition] = useState(0);
  const [totalWidth, setTotalWidth] = useState(1);
  const animateRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const handleChangeImage = (image, index) => {
    setSelectedImage(image);
    setCount(index);
  };
  const changeNextImageWithButtons = () => {
    setCount((prev) =>
      prev < carImages.length - 1 ? prev + 1 : carImages.length - 1
    );
    const imageWidth = animateRef.current.children[0].offsetWidth;
    setTotalWidth(imageWidth * (carImages.length - 1));
    const scrollPosition = (count + 1) * imageWidth;
    setPosition(scrollPosition);
    animateRef.current.scrollLeft = scrollPosition;
  };
  const changePrevImageWithButtons = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
    const imageWidth = animateRef.current.children[0].offsetWidth;
    const scrollPosition = (count - 1) * imageWidth;
    setPosition(scrollPosition);
    animateRef.current.scrollLeft = scrollPosition;
  };
  useMemo(() => {
    setSelectedImage(carImages[count]);
  }, [count, carImages]);

  return (
    <section className="bg-gray-100 ">
      <main className="max-w-4xl mx-auto min-h-screen flex scroll-smooth">
        <aside
          id="carInfo"
          className="w-3/4 bg-white p-2 m-2  overflow-hidden "
        >
          <p className="text-blue-900 text-2xl font-semibold">
            Toyota Vitz F 1.0 2011
          </p>
          <p className="text-blue-600">
            <span>
              <HiLocationMarker className="inline mb-1" />
            </span>
            Jamshed Road, Karachi Sindh
          </p>
          <div className="relative ">
            <img
              src={selectedImage}
              className="object-cover w-full h-96"
              alt=""
            />
            {position !== 0 && (
              <button className="bg-black/20 absolute top-[50%]">
                <ChevronLeftIcon
                  onClick={changePrevImageWithButtons}
                  className="w-12 text-white "
                />
              </button>
            )}
            {position !== totalWidth && (
              <button className="bg-black/20 absolute top-[50%] right-0">
                <ChevronRightIcon
                  onClick={changeNextImageWithButtons}
                  className="w-12 text-white"
                />
              </button>
            )}
            <button className="bg-white p-2 absolute  rounded-lg right-3 top-3">
              <HiOutlineHeart className="text-blue-900 h-6 w-6" />
            </button>
            <button className="bg-white p-2 absolute rounded-lg  right-16 top-3">
              <BookmarkSquareIcon className="text-blue-900 h-6 w-6" />
            </button>
          </div>

          <section
            className={`flex relative overflow-hidden custom-scrollbar transition-all scroll-smooth`}
            ref={animateRef}
          >
            {carImages.map((image, index) => (
              <>
                <img
                  src={image}
                  className={`h-32 w-40 brightness-50  object-cover transition-all duration-150 ${
                    count === index
                      ? "border-2 brightness-95 border-blue-900 opacity-90"
                      : ""
                  } `}
                  alt=""
                  onClick={() => handleChangeImage(image, index)}
                />
              </>
            ))}
          </section>
          <section
            id="details"
            className="flex items-center justify-evenly px-4 border-gray-400 border mt-4 text-center"
          >
            <div className=" flex flex-col items-center px-4">
              <CalendarDaysIcon className="w-12 h-12" />
              <p>2017</p>
            </div>
            <div className="w-0.5 h-20 bg-gray-400"></div>
            <div className="flex flex-col items-center px-4">
              <BiSolidGasPump className="w-12 h-12" />
              <p>Petrol</p>
            </div>
            <div className="w-0.5 h-20 bg-gray-400"></div>

            <div className=" flex flex-col items-center px-4">
              <BiTachometer className="w-12 h-12" />
              <p>350,000 km</p>
            </div>
            <div className="w-0.5 h-20 bg-gray-400"></div>

            <div className=" flex flex-col items-center px-4">
              <GiGearStickPattern className="w-12 h-12" />
              <p>Automatic</p>
            </div>
          </section>
          <section className="flex flex-wrap m-2  gap-4 justify-between">
            <div className="flex w-1/3 justify-between items-center border-b border-gray-400 p-1">
              <p className="text-sm">Registered In:</p>
              <p>Karachi</p>
            </div>
            <div className="flex w-1/3 justify-between items-center border-b border-gray-400 p-2">
              <p className="text-sm">Assembly:</p>
              <p>Imported</p>
            </div>
            <div className="flex  w-1/3  justify-between items-center border-b border-gray-400 p-2">
              <p className="text-sm">Body Type:</p>
              <p>Crossover</p>
            </div>
            <div className="flex w-1/3  justify-between items-center border-b border-gray-400 p-2">
              <p className="text-sm">Color:</p>
              <p>Silver</p>
            </div>
            <div className="flex  w-1/3 justify-between items-center border-b border-gray-400 p-2">
              <p className="text-sm">Engine Capacity:</p>
              <p>1800cc</p>
            </div>
            <div className="flex  w-1/3 justify-between items-center border-b border-gray-400 p-2">
              <p className="text-sm">Ad Ref#:</p>
              <p>4653423</p>
            </div>
          </section>
        </aside>
        <aside className="w-1/3 flex flex-col justify-start  m-2 ">
          <main className="bg-white space-y-2  p-6">
            <p className="text-2xl font-semibold text-green-600 border-b-2 border-gray-200">
              PKR 78.85 lacs
            </p>

            <button className="bg-green-500 hover:bg-green-600 rounded-md text-white px-4 w-full">
              <span>
                <HiPhone className=" w-6 h-6 mb-2 inline" />
              </span>
              <span className="font-semibold mx-2 text-2xl">0330798...</span>
              <span className="block">Show Phone Number</span>
            </button>
            <button className="border border-sky-600 text-sky-600 rounded-lg w-full p-2 text-xl">
              Send Message
            </button>
          </main>
          <main className="bg-white space-y-2 my-6 p-2">
            <p className="text-lg border-b-2 border-gray-200">Seller Details</p>

            <section className=" rounded-md px-4 w-full">
              <aside className="flex space-x-2 ">
                <HiOutlineUser className="w-6 h-6 border border-blue-900" />
                <div>
                  <p>Muhammad</p>
                  <p className="text-xs text-blue-900  ">
                    Member since dec 11, 2015
                  </p>
                  <p className="text-xs text-blue-900 hover:text-blue-700 cursor-pointer ">
                    More adds by Muhammad
                    <span>
                      <ChevronDoubleRightIcon className="w-2 h-2 inline" />
                    </span>
                  </p>
                </div>
              </aside>
            </section>
          </main>
          <main className=" bg-white space-y-2  p-4">
            <section className=" rounded-md  w-full space-y-2">
              <p className="text-xl text-blue-900">
                Safety tips for transaction
              </p>
              <p className="text-sm">1. Use a safe location to meet a seller</p>
              <p className="text-sm">2. Avoid cash for transaction</p>
              <p className="text-sm">3. Beaware of unrealistic offers</p>
            </section>
          </main>
        </aside>
      </main>
      <button className="btn">press</button>
    </section>
  );
};

export default UsedCarDetails;
