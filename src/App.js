import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UsedCarList from "./pages/UsedCarList";
import CarsComparison from "./pages/CarsComparison";
import NewCarsList from "./pages/NewCarsList";
import Blog from "./pages/Blog";
import UsedCarDetails from "./pages/UsedCarDetails";
import SignUp from "./components/SignUp";
import { useSelector } from "react-redux";
import AdvertisementOfAd from "./pages/AdvertisementOfAd";
import CreateAd from "./pages/CreateAd";
import AdminDashboard from "./pages/AdminDashboard";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AutoStore from "./pages/AutoStore";

const App = () => {
  const { signUp } = useSelector((state) => state.signUp);
  const { signIn } = useSelector((state) => state.signIn);
  return (
    <>
      {signUp && <SignUp />}
      {signIn && <SignIn />}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/used-cars-in-pakistan" Component={UsedCarList} />
        <Route path="/new-cars-comparison" Component={CarsComparison} />
        <Route path="/new-cars" Component={NewCarsList} />
        <Route path="/blog" Component={Blog} />
        <Route path="/used-car/:id" Component={UsedCarDetails} />
        <Route path="/used-cars/sell" Component={AdvertisementOfAd} />
        <Route path="/used-cars/sell/post-ad" Component={CreateAd} />
        <Route path="/admin/dashboard" Component={AdminDashboard} />
        <Route path="/autostore" Component={AutoStore} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </>
  );
};

export default App;
