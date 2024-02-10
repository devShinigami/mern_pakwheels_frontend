import React, { useState } from "react";
import { brands } from "../../utils/Brands";
import {
  comfortAndConvenience,
  exterior,
  infotainment,
  instrumentation,
  safety,
} from "../../utils/CarFeatures";
import handleRequest from "../../utils/handleRequest";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../context/loading";
import successAndFailure from "../../utils/successAndFail";
import Loading from "../Loading";

const CreateCar = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const [carInfo, setCarInfo] = useState({
    companyName: "",
    modelName: "",
    make: "",
  });
  const [car, setCar] = useState({
    engineType: "",
    displacement: "",
    horsePower: "",
    torque: "",
    noOfCylinders: 0,
    cylinderConfiguration: "",
    // compressionRatio: "",
    valveMechanism: "",
    fuelSystem: "",
    maxSpeed: "",
    transmissionType: "",
    gearBox: "",
    steeringType: "",
    powerAssisted: "",
    suspension: "",
    brakes: "",
    wheelType: "",
    wheelSize: "",
    tyreSize: "",
    spareTyre: false,
    fuelTankCapacity: "",
    mileageCity: "",
    mileageHighway: "",
    noOfAirbags: "",
    newCar: false,
    price: "",
  });
  const [features, setFeatures] = useState({
    safety: [],
    exterior: [],
    instrumentation: [],
    infotainment: [],
    comfortAndConvenience: [],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleInfoChange = (e) => {
    const { value, name } = e.target;
    setCarInfo({ ...carInfo, [name]: value });
  };

  const handleSafetyFeaturesChange = (value) => {
    if (safety.includes(value)) {
      const safetyFeatures = [...features.safety];
      if (safetyFeatures.includes(value)) {
        const index = safetyFeatures.indexOf(value);
        safetyFeatures.splice(index, 1);
      } else {
        safetyFeatures.push(value);
      }
      setFeatures({ ...features, safety: safetyFeatures });
    } else if (exterior.includes(value)) {
      const exteriorFeatures = [...features.exterior];
      if (exteriorFeatures.includes(value)) {
        const index = exteriorFeatures.indexOf(value);
        exteriorFeatures.splice(index, 1);
      } else {
        exteriorFeatures.push(value);
      }
      setFeatures({ ...features, exterior: exteriorFeatures });
    } else if (instrumentation.includes(value)) {
      const instrumentationFeatures = [...features.instrumentation];
      if (instrumentationFeatures.includes(value)) {
        const index = instrumentationFeatures.indexOf(value);
        instrumentationFeatures.splice(index, 1);
      } else {
        instrumentationFeatures.push(value);
      }
      setFeatures({ ...features, instrumentation: instrumentationFeatures });
    } else if (infotainment.includes(value)) {
      const infotainmentFeatures = [...features.infotainment];
      if (infotainmentFeatures.includes(value)) {
        const index = infotainmentFeatures.indexOf(value);
        infotainmentFeatures.splice(index, 1);
      } else {
        infotainmentFeatures.push(value);
      }
      setFeatures({ ...features, infotainment: infotainmentFeatures });
    } else {
      const comfoFeatures = [...features.comfortAndConvenience];
      if (comfoFeatures.includes(value)) {
        const index = comfoFeatures.indexOf(value);
        comfoFeatures.splice(index, 1);
      } else {
        comfoFeatures.push(value);
      }
      setFeatures({ ...features, comfortAndConvenience: comfoFeatures });
    }
  };

  const handleCreateCar = async () => {
    dispatch(setLoading(true));
    const response = await handleRequest("POST", "/admin/createcar", {
      companyName: carInfo.companyName,
      make: carInfo.make,
      modelName: carInfo.modelName,
      general: car,
      features,
    });
    if (response?.success) {
      successAndFailure(true, response.messsage);
      dispatch(setLoading(false));
      setCar({});
    } else {
      successAndFailure(false, "oops! Internal server error...");
      dispatch(setLoading(false));
    }
  };

  return (
    <section>
      <main className="flex flex-col justify-start items-center p-4">
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Company Name</label>
          <select
            onChange={handleInfoChange}
            value={carInfo.companyName}
            name="companyName"
            className="custom-scrollbar outline-none"
          >
            <option value="">Company Name</option>
            {brands.map((brand) => (
              <option value={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Make</label>
          <input
            onChange={handleInfoChange}
            value={carInfo.make}
            name="make"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Corolla, Civic etc"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Model Name</label>
          <input
            onChange={handleInfoChange}
            value={carInfo.modelName}
            name="modelName"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="VXR, RS turbo"
          />
        </div>

        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Engine Type</label>
          <select
            onChange={handleChange}
            value={car.engineType}
            name="engineType"
            className="custom-scrollbar outline-none"
          >
            <option value="">Engine Type</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Version Name (Same as Model Name)</label>
          <input value={car.modelName} type="checkbox" />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Displacement</label>
          <input
            onChange={handleChange}
            value={car.displacement}
            name="displacement"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="2000cc, 660cc, etc"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Horce / RPM </label>
          <input
            onChange={handleChange}
            value={car.horsePower}
            name="horsePower"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="326 HP @ 5000 RPM"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Torque</label>
          <input
            onChange={handleChange}
            value={car.torque}
            name="torque"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="500 Nm @ 1550 RPM"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Cylinder Configuration</label>
          <input
            onChange={handleChange}
            value={car.cylinderConfiguration}
            name="cylinderConfiguration"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Inline or V-shaped"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Max Speed</label>
          <input
            onChange={handleChange}
            value={car.maxSpeed}
            name="maxSpeed"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="250 KM/H"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Fuel System</label>
          <input
            onChange={handleChange}
            value={car.fuelSystem}
            name="fuelSystem"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="EFI Hybrid"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Valve Mechanism</label>
          <input
            onChange={handleChange}
            value={car.valveMechanism}
            name="valveMechanism"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="DOHC 16 Valves"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Number of Cylinders</label>
          <input
            onChange={handleChange}
            value={car.noOfCylinders}
            name="noOfCylinders"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="4, 6 etc"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Transmission</label>
          <select
            onChange={handleChange}
            value={car.transmissionType}
            name="transmissionType"
            className="outline-none"
          >
            <option value="">Transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>GearBox</label>
          <input
            onChange={handleChange}
            value={car.gearBox}
            name="gearBox"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="5-speed, 6-speed, 7-speed, etc"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Steering Type </label>
          <input
            onChange={handleChange}
            value={car.steeringType}
            name="steeringType"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Rack & Pinion with Electronic Motor"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Power Assisted</label>
          <select
            onChange={handleChange}
            value={car.powerAssisted}
            name="powerAssisted"
            className="outline-none"
          >
            <option value="">Power Assisted</option>
            <option value="Manual">Electronic Power Steering</option>
            <option value="Automatic">Manual</option>
          </select>
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Suspension</label>
          <input
            onChange={handleChange}
            value={car.suspension}
            name="suspension"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Double-Wishbone"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Brakes</label>
          <input
            onChange={handleChange}
            value={car.brakes}
            name="brakes"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Ventilated Disc"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Wheel Type</label>
          <input
            onChange={handleChange}
            value={car.wheelType}
            name="wheelType"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="Alloy Wheels"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Wheel Size</label>
          <input
            onChange={handleChange}
            value={car.wheelSize}
            name="wheelSize"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="20 in"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Tyre Size</label>
          <input
            onChange={handleChange}
            value={car.tyreSize}
            name="tyreSize"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="245/50/R18"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Spare Tyre</label>
          <select
            onChange={handleChange}
            value={car.spareTyre}
            name="spareTyre"
            className="outline-none"
          >
            <option value="">Spare Tyre</option>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Fuel Tank Capacity</label>
          <input
            onChange={handleChange}
            value={car.fuelTankCapacity}
            name="fuelTankCapacity"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="20 L"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Mileage In City</label>
          <input
            onChange={handleChange}
            value={car.mileageCity}
            name="mileageCity"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="6 KM/L"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Mileage On Highway</label>
          <input
            onChange={handleChange}
            value={car.mileageHighway}
            name="mileageHighway"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="12 KM/L"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Airbags</label>
          <input
            onChange={handleChange}
            value={car.noOfAirbags}
            name="noOfAirbags"
            type="number"
            className="outline-none p-1 border border-blue-900"
            placeholder="2, 4, 6, etc..."
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>Price</label>
          <input
            onChange={handleChange}
            value={car.price}
            name="price"
            type="text"
            className="outline-none p-1 border border-blue-900"
            placeholder="10,000,000PKR"
          />
        </div>
        <div className="flex w-1/2 mx-auto justify-between p-2">
          <label>New Car?</label>
          <select
            onChange={handleChange}
            value={car.newCar}
            name="newCar"
            className="outline-none"
          >
            <option value="">Select</option>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <p className="uppercase font-semibold text-lg p-2">
          Select Features that are available in the car
        </p>
        <p className="text-lg font-semibold">Safety Features</p>
        <aside className="flex items-center justify-start gap-4 mt-4 flex-wrap ">
          {safety.map((item) => (
            <>
              <label>{item}</label>
              <input
                checked={features.safety.includes(item)}
                onChange={(e) => handleSafetyFeaturesChange(e.target.value)}
                type="checkbox"
                value={item}
              />
            </>
          ))}
        </aside>
        <p className="text-lg font-semibold"> Exterior</p>
        <aside className="flex items-center justify-start gap-4 mt-4 flex-wrap ">
          {exterior.map((item) => (
            <>
              <label>{item}</label>
              <input
                checked={features.exterior.includes(item)}
                onChange={(e) => handleSafetyFeaturesChange(e.target.value)}
                type="checkbox"
                value={item}
              />
            </>
          ))}
        </aside>
        <p className="text-lg font-semibold">Instrumentation</p>
        <aside className="flex items-center justify-start gap-4 mt-4 flex-wrap ">
          {instrumentation.map((item) => (
            <>
              <label>{item}</label>
              <input
                checked={features.instrumentation.includes(item)}
                onChange={(e) => handleSafetyFeaturesChange(e.target.value)}
                type="checkbox"
                value={item}
              />
            </>
          ))}
        </aside>
        <p className="text-lg font-semibold">Infotainment</p>
        <aside className="flex items-center justify-start gap-4 mt-4 flex-wrap ">
          {infotainment.map((item) => (
            <>
              <label>{item}</label>
              <input
                onChange={(e) => handleSafetyFeaturesChange(e.target.value)}
                checked={features.infotainment.includes(item)}
                type="checkbox"
                value={item}
              />
            </>
          ))}
        </aside>
        <p className="text-lg font-semibold">Comfort and Convenience</p>
        <aside className="flex items-center justify-start gap-4 mt-4 flex-wrap ">
          {comfortAndConvenience.map((item) => (
            <>
              <label>{item}</label>
              <input
                checked={features.comfortAndConvenience.includes(item)}
                onChange={(e) => handleSafetyFeaturesChange(e.target.value)}
                type="checkbox"
                value={item}
              />
            </>
          ))}
        </aside>
        {loading ? (
          <Loading />
        ) : (
          <button
            onClick={handleCreateCar}
            className="m-4 px-4 py-2 border border-blue-900 hover:bg-blue-900 hover:text-white"
          >
            Create
          </button>
        )}
      </main>
    </section>
  );
};

export default CreateCar;
