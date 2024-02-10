import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp } from "../context/signUpSlice";
import Navbar from "./Navbar";
import { setSignIn } from "../context/signIn";
import { useCookies } from "react-cookie";
import { setAuthenticated, setUser } from "../context/user";
import handleRequest from "../utils/handleRequest";
import successAndFailure from "../utils/successAndFail";
const Banner = () => {
  const [, setCookies] = useCookies(["token"]);
  const { user, authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(setSignUp(true));
  };

  const handleSignIn = () => {
    dispatch(setSignIn(true));
  };
  const handleSignOut = async () => {
    try {
      const response = await handleRequest("GET", "/auth/logout");
      setCookies("token", "");
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));
      successAndFailure(false, response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#010911] to-[#052b64] p-8">
      <main className="flex items-center max-w-6xl mx-auto justify-between text-white border-b border-gray-400/30 mb-4">
        <p className="flex ">
          <DevicePhoneMobileIcon className="w-6 text-red-500/70" />
          Download App via sms
        </p>
        <div className="flex">
          <p className="text-red-500/70 px-1">اردو</p>
          {user && authenticated ? (
            <>
              <p className="border-r border-gray-600 mx-3 px-3">Welcome !</p>
              <p>{user.name}</p>
              <button
                onClick={handleSignOut}
                className="mx-2 bg-red-700/80 px-2 uppercase"
              >
                Signout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSignUp}
                className="border-l-2 border-gray-400/30 px-2"
              >
                Sign Up
              </button>
              <button
                onClick={handleSignIn}
                className="border-l-2 border-gray-400/30 px-2"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </main>
      <Navbar />
      <section className="flex flex-col items-center justify-center mt-24 max-w-3xl mx-auto">
        <p className="text-white text-4xl font-normal ">
          Find Used Cars in Pakistan
        </p>
        <p className="text-white font-medium tracking-wide">
          With thousands of cars, we have just the right one for you
        </p>
        <section className="flex w-full items-center justify-center mt-6">
          <input
            type="text"
            className="w-1/2 h-12 px-4 rounded-l-md text-black placeholder:text-black focus:outline-none "
            placeholder="Car make or model"
          />
          <select className="bg-white h-12 px-4 w-1/3">
            <option value="">All Cities</option>
          </select>
          <select className="bg-white h-12 w-1/3">
            <option value="">Price Range</option>
          </select>
          <button className="h-12 px-6 bg-green-600">
            <MagnifyingGlassIcon className="text-white h-8  w-8" />
          </button>
        </section>
        <button className="bg-transparent border-white border-2 text-sm text-white m-12 px-4 pb-1 flex items-center gap-1">
          <p>Advance filters</p>
          <ChevronRightIcon className="text-white h-3 w-3 mt-1" />
        </button>
      </section>
    </section>
  );
};

export default Banner;
