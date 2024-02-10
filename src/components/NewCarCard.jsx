import React from "react";

const NewCarCard = () => {
  return (
    <section className="flex w-full mt-2 justify-between bg-white p-4 gap-4 hover:shadow-lg transition-all duration-150">
      <main className="flex gap-3">
        <img
          src="https://cache2.pakwheels.com/system/car_generation_pictures/5254/resized/bravo.jpg?1595597417"
          alt=""
        />
        <main>
          <p className="text-lg text-blue-900 font-semibold">
            United Bravo Base Grade
          </p>
          <aside className="flex items-center gap-2 text-gray-400">
            <p>Manual /</p>
            <p>Petrol /</p>
            <p>800cc</p>
          </aside>
        </main>
      </main>
      <main>
        <p className="text-lg text-green-500 font-semibold">PKR 15.19 lacs</p>
      </main>
    </section>
  );
};

export default NewCarCard;
