import React from "react";
import CarCard from "./CarCard";

const ManagedByPakWheels = () => {
  return (
    <section className="bg-gray-200">
      <main className="max-w-5xl mx-auto">
        <aside className="flex items-center justify-between">
          <p className="font-semibold text-2xl">Managed by PakWheels</p>
          <p className="text-blue-500 cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-400">
            View All New Cars
          </p>
        </aside>
        <section className="max-w-5xl custom-scrollbar overflow-auto mt-6 flex items-center gap-6 ">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </section>
      </main>
    </section>
  );
};

export default ManagedByPakWheels;
