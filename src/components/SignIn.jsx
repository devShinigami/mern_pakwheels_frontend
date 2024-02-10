import React, { useRef, useState } from "react";
import useOutsideClick from "../utils/ClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { setSignIn } from "../context/signIn";
import handleRequest from "../utils/handleRequest";
import { setLoading } from "../context/loading";
import { useCookies } from "react-cookie";
import successAndFailure from "../utils/successAndFail";
import { setAuthenticated, setUser } from "../context/user";
import Loading from "./Loading";
const SignIn = () => {
  const { loading } = useSelector((state) => state.loading);
  const [cookies, setCookies] = useCookies(["token"]);
  const [form, setForm] = useState({
    password: "",
    email: "",
  });
  const signInRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideClick(signInRef, () => {
    dispatch(setSignIn(false));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const response = await handleRequest("POST", "/auth/login", {
      password: form.password,
      email: form.email,
    });
    console.log(response);
    if (response.success === true) {
      setCookies("token", response?.token);
      console.log(cookies.token);
      dispatch(setUser(response?.user));
      dispatch(setAuthenticated(true));
      successAndFailure(true, response.message);
      dispatch(setLoading(false));
      dispatch(setSignIn(false));
    } else {
      successAndFailure(false, response.message);
      // successAndFailure(false, "oops! internal server error!");
      dispatch(setLoading(false));
    }
  };

  return (
    <section className="absolute flex justify-center items-center min-h-full bg-black/30 z-50 inset-0">
      <main
        ref={signInRef}
        className="w-1/4  bg-white rounded-md duration-150 transition-all"
      >
        <ChevronLeftIcon className="w-8 h-8 m-4 cursor-pointer" />
        <p className="font-semibold text-xl px-8">Enter Your Email</p>
        <form
          onSubmit={handleSignup}
          className="p-8 bg-white flex flex-col gap-3 "
        >
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleChange}
            name="email"
            className="border-b border-gray-400 focus:border-blue-600 outline-none"
            type="email"
            placeholder="username@email.com"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={handleChange}
            className="border-b border-gray-400 focus:border-blue-600 outline-none"
            type="password"
            placeholder="Set a new Password"
          />
          {loading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="p-2 rounded-md bg-blue-600 tracking-tight text-white font-semibold"
            >
              Sign Up
            </button>
          )}
        </form>
        <p className="text-center text-sm">
          Already have an account?
          <span className="underline cursor-pointer hover:text-blue-600">
            Sign In
          </span>
        </p>
        <p className="text-center text-sm m-4 font-bold text-gray-400">
          By continuing you agree to our
          <br />
          <span className="underline">Terms of service</span> &
          <span className="underline"> Privacy Policy</span>
        </p>
      </main>
    </section>
  );
};

export default SignIn;
