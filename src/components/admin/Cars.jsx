import React, { useState } from "react";
import CreateCar from "./CreateCar";

const Cars = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section>
      <aside className="flex justify-center items-center">
        <p className="text-lg font-semibold">
          You can create a new car or a version and also update existing cars.
        </p>
      </aside>
      <aside className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected(0)}
          className={` ${
            selected === 0 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          Create Cars
        </button>
        <button
          onClick={() => setSelected(1)}
          className={` ${
            selected === 1 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          See All Cars
        </button>
        <button
          onClick={() => setSelected(2)}
          className={` ${
            selected === 2 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          Update Cars
        </button>
      </aside>
      {selected === 0 && <CreateCar />}
    </section>
  );
};

export default Cars;
