import React from "react";
import Banner from "../components/Banner";
import Advertisement from "../components/Advertisement";
import BrowseUsedCars from "../components/BrowseUsedCars";
import ManagedByPakWheels from "../components/ManagedByPakWheels";
import NewCarsByMake from "../components/NewCarsByMake";
import { useSelector } from "react-redux";
const Home = () => {
  const { signUp } = useSelector((state) => state.signUp);
  const { signIn } = useSelector((state) => state.signIn);

  return (
    <section
      className={`min-h-screen ${
        signUp || signIn ? "overflow-y-hidden h-screen" : ""
      }`}
    >
      <Banner />
      <Advertisement />
      <BrowseUsedCars />
      <ManagedByPakWheels />
      <NewCarsByMake />
    </section>
  );
};

export default Home;
