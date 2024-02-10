import React, { useRef, useState } from "react";
import useOutsideClick from "../utils/ClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp } from "../context/signUpSlice";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useCookies } from "react-cookie";
import Loading from "./Loading";
import { setLoading } from "../context/loading";
import handleRequest from "../utils/handleRequest";
import { setAuthenticated, setUser } from "../context/user";
import successAndFailure from "../utils/successAndFail";
const SignUp = () => {
  const { loading } = useSelector((state) => state.loading);
  const [, setCookies] = useCookies(["token"]);
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const signUpRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideClick(signUpRef, () => {
    dispatch(setSignUp(false));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await handleRequest("POST", "/auth/registration", {
        name: form.name,
        password: form.password,
        email: form.email,
      });
      if (response) {
        setCookies("token", response.token);
        dispatch(setUser(response?.newUser));
        dispatch(setAuthenticated(true));
        dispatch(setLoading(false));
        successAndFailure(true, response.message);
        dispatch(setSignUp(false));
      } else {
        dispatch(setLoading(false));
        successAndFailure(false, response.message);
      }
    } catch (error) {
      successAndFailure(false, "oops! Server Busy! ");
      dispatch(setLoading(false));
      console.log(error);
    }
  };

  return (
    <section className="absolute flex justify-center items-center min-h-full bg-black/30 z-50 inset-0">
      <main
        ref={signUpRef}
        className="w-1/4  bg-white rounded-md duration-150 transition-all"
      >
        <ChevronLeftIcon className="w-8 h-8 m-4 cursor-pointer" />
        <p className="font-semibold text-xl px-8">Lets get you started!</p>
        <form
          onSubmit={handleSubmit}
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
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            onChange={handleChange}
            className="border-b border-gray-400 focus:border-blue-600 outline-none"
            type="text"
            placeholder="Enter your full name"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={handleChange}
            className="border-b border-gray-400 focus:border-blue-600 outline-none"
            type="password"
            placeholder="Set a new Password"
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            name="confirmPassword"
            onChange={handleChange}
            className="border-b border-gray-400 focus:border-blue-600 outline-none"
            type="password"
            placeholder="Enter your password again"
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

export default SignUp;
