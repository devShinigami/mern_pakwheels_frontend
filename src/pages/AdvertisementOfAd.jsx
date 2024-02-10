import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { Link } from "react-router-dom";
const AdvertisementOfAd = () => {
  return (
    <section>
      <main className=" bg-slate-300 p-16">
        <p className="text-3xl text-blue-900 font-semibold text-center">
          Sell Your Car Online in Pakistan Instantly!
        </p>
        <p className="text-3xl text-gray-600 font-semibold text-center">
          Choose How To Sell Your Car
        </p>
        <section className=" flex items-center mx-auto max-w-5xl mt-8 justify-between">
          <aside className="flex gap-2 rounded-md flex-col py-6 px-24 justify-center items-center  bg-white">
            <p className="text-2xl font-semibold">Post your Ad on PakWheels</p>
            <img
              className="w-48 h-48 object-contain"
              src="https://wsa2.pakwheels.com/assets/postad-img-58f5eb96777aff56872a2ee71b6475fd.png"
              alt=""
            />
            <div className="text-sm">
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                Post your Ad for Free in 3 Easy Steps{" "}
              </p>
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                Get Genuine offers from Verified Buyers
              </p>
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                Sell your car Fast at the Best Price
              </p>
            </div>
            <Link to={"/used-cars/sell/post-ad"}>
              <button className="bg-blue-900 font-semibold px-12 py-2 rounded-md text-white my-2">
                Post an Ad
              </button>
            </Link>
          </aside>
          <aside className="flex gap-2 rounded-md flex-col py-6 px-24  justify-center items-center  bg-white">
            <p className="text-2xl font-semibold">
              Try PakWheels Sell It For Me
            </p>
            <img
              className="w-48 h-48 object-contain "
              src="https://wsa4.pakwheels.com/assets/postsifm-ad-f4537763e3d48b3dafd3926515aa7c4e.png"
              alt=""
            />
            <div className="text-sm">
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                Dedicated Sales Expert to Sell your Car
              </p>
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                We Bargain for you and share the Best Offer
              </p>
              <p>
                <span className="inline-block mx-1 text-green-600">
                  <AiOutlineCheck />
                </span>
                We ensure Safe & Secure Transaction
              </p>
            </div>
            <button className="bg-blue-900 px-12 py-2 rounded-md font-semibold text-white my-2">
              Sell It For Me
            </button>
          </aside>
        </section>
        <p className="text-xs text-center m-8">
          * By continuing, you are agreeing to the terms of service and privacy
          policy
        </p>
      </main>
      <main className="max-w-5xl mx-auto py-4">
        <p className="text-3xl font-semibold text-gray-600">
          Why Sell Your Car On PakWheels?
        </p>
        <div className="w-full flex my-16  items-center justify-between gap-2">
          <main className="bg-blue-100 relative h-28 w-1/4 text-lg text-center p-2 rounded-lg">
            <p className="mt-6">Pakistan’s #1 automotive marketplace</p>
            <div className="absolute shadow-lg flex items-center justify-center w-16 h-16 bg-white rounded-full -top-10 left-[36%]">
              <p className="px-2 text-3xl font-bold">#1</p>
            </div>
          </main>
          <main className="bg-blue-100 relative h-28 w-1/4 text-lg text-center p-2 rounded-lg">
            <p className="mt-8 text-xl">5 lac+ visitors daily</p>
            <div className="absolute shadow-lg  w-16 h-16 bg-white rounded-full -top-8 left-[36%]">
              <p className="leading-none font-bold">
                <span className="text-3xl">
                  5 <br />
                </span>
                Lakh
              </p>
            </div>
          </main>
          <main className="bg-blue-100 relative h-28 w-1/4 text-lg text-center p-2 rounded-lg">
            <p className="mt-8 text-xl">3 million+ cars sold</p>
            <div className="absolute shadow-lg flex items-center justify-center w-16 h-16 bg-white rounded-full -top-10 left-[36%]">
              <p className="px-2 text-3xl font-bold">3M</p>
            </div>
          </main>
          <main className="bg-blue-100 relative h-28 w-1/4 text-lg text-center p-2 rounded-lg">
            <p className="mt-8 text-xl">80% cars sold within 48 hours</p>
            <div className="absolute shadow-lg  w-16 h-16 bg-white rounded-full -top-8 left-[36%]">
              <p className="leading-none font-bold">
                <span className="text-3xl">
                  48 <br />
                </span>
                Hours
              </p>
            </div>
          </main>
        </div>
      </main>
      <main className="bg-gray-100">
        <section className="max-w-5xl mx-auto p-4">
          <p className="text-3xl font-semibold text-gray-600">
            3 Simple Steps To Sell Your Car
          </p>
          <div className="flex items-center justify-between gap-4 mt-8">
            <aside className="flex gap-1 flex-col justify-center items-center">
              <BiUserPlus className="w-16 h-16" />
              <p className="font-semibold text-xl">Sign up</p>
              <p className="w-2/3 text-center">
                Register yourself on PakWheels.com to post an ad.
              </p>
            </aside>
            <aside className="flex gap-1 flex-col justify-center items-center">
              <SlScreenSmartphone className="w-16 h-16" />
              <p className="font-semibold text-xl">Create Your Ad</p>
              <p className="w-2/3 text-center">
                Provide necessary details about your used car and make sure to
                upload clear photos.
              </p>
            </aside>
            <aside className="flex gap-1 flex-col justify-center items-center">
              <BsMegaphoneFill className="w-16 h-16" />
              <p className="font-semibold text-xl">Get Instants Offers</p>
              <p className="w-2/3 text-center">
                Relax & get ready for instant offers from genuine buyers.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AdvertisementOfAd;
