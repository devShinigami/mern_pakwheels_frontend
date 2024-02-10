import React, { useState } from "react";
import Cars from "../components/admin/Cars";
import Blogs from "../components/admin/Blogs";
import AutoStore from "../components/admin/AutoStore";

const AdminDashboard = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="bg-gray-100 h-screen  p-4">
      <main className="max-w-5xl bg-white mx-auto">
        <aside className="flex items-center justify-center">
          <p className="text-blue-900 text-3xl font-semibold uppercase">
            PakWheels Dashboard
            <span className="text-lg m-2 ">only for admins</span>
          </p>
        </aside>
        <main className="max-h-[90vh] m-2 bg-gray-100 flex ">
          <section className="w-1/6 bg-white m-2 flex flex-col justify-start">
            <p
              onClick={() => setSelected(0)}
              className={`text-lg mx-2 mt-1 font-semibold ${
                selected === 0 ? "border-r-2 border-blue-900 text-blue-900" : ""
              }  cursor-pointer `}
            >
              - Cars
            </p>
            <p
              onClick={() => setSelected(1)}
              className={`text-lg mx-2 mt-1 font-semibold ${
                selected === 1 ? "border-r-2 border-blue-900 text-blue-900" : ""
              }  cursor-pointer `}
            >
              - Blogs
            </p>
            <p
              onClick={() => setSelected(2)}
              className={`text-lg mx-2 mt-1 font-semibold ${
                selected === 2 ? "border-r-2 border-blue-900 text-blue-900" : ""
              }  cursor-pointer `}
            >
              - Auto Store
            </p>
          </section>
          <section
            className="w-full bg-white m-2 ml-0  overflow-auto custom-scrollbar
          "
          >
            {selected === 0 && <Cars />}
            {selected === 1 && <Blogs />}
            {selected === 2 && <AutoStore />}
          </section>
        </main>
      </main>
    </section>
  );
};

export default AdminDashboard;
