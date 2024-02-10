import React from "react";

const CarsComparison = () => {
  return (
    <section>
      <main className="bg-[#082c61] relative ">
        <section className="max-w-4xl mx-auto py-20 ">
          <p className="text-3xl  text-white">New Cars Comparison</p>
          <p className="text-white">Confused? Compare your choice of cars</p>
          <aside className="absolute bg-white px-12 py-6 my-6 mx-8 shadow-xl">
            <div className="flex justify-between gap-4 space-x-6 items-center">
              <div className="p-4">
                <p className="text-xl font-semibold">Select Car-1</p>
                <p className="border border-black p-4">Make/Model/Version</p>
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold">Select Car-1</p>
                <p className="border border-black p-4">Make/Model/Version</p>
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold">Select Car-1</p>
                <p className="border border-black p-4">Make/Model/Version</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <button>Clear</button>
              <button className="bg-green-600 p-4 text-white  rounded-lg">
                Compare
              </button>
            </div>
          </aside>
        </section>
      </main>
      <main className="bg-gray-100 h-56"></main>
      <main className="max-w-4xl mx-auto">
        <aside className="my-4">
          <p className="font-semibold text-2xl my-4">Hot Car Comparisons</p>
          <main className="border-gray-400 border w-2/3">
            <aside className="flex justify-between items-center relative p-4">
              <main>
                <section className="flex items-center">
                  <div>
                    <img
                      className="w-44"
                      src="https://cache2.pakwheels.com/system/car_generation_pictures/4899/medium/usc70tsc031b021001.png?1548673128"
                      alt=""
                    />
                  </div>
                  <div className="bg-red-600 border-4 border-white absolute left-[27%] rounded-full text-white px-3 py-2">
                    VS
                  </div>
                  <div>
                    <img
                      className="w-44"
                      src="https://cache1.pakwheels.com/system/car_generation_pictures/6044/medium/BMW_i4_-_PNG.png?1637071894"
                      alt=""
                    />
                  </div>
                </section>
                <button className="border border-cyan-500 px-4 py-2 m-4 w-full">
                  View Comparison
                </button>
              </main>
              <aside className="flex flex-col items-center justify-center">
                <div className="cursor-pointer hover:text-blue-600">
                  <p className="font-semibold ">Toyota corolla</p>
                  <div className="bg-red-600 border-4 h-12 w-12 border-white rounded-full text-white flex justify-center items-center mx-auto">
                    VS
                  </div>
                  <p className="font-semibold ">Suzuki Alto</p>
                </div>
                <div className="cursor-pointer hover:text-blue-600">
                  <p className="font-semibold ">Toyota corolla</p>
                  <div className="bg-red-600 border-4 h-12 w-12 border-white rounded-full text-white flex justify-center items-center mx-auto">
                    VS
                  </div>
                  <p className="font-semibold ">Suzuki Alto</p>
                </div>
              </aside>
            </aside>
          </main>
        </aside>
      </main>
      <main className="bg-gray-100 h-56 ">
        <section className="max-w-4xl mx-auto py-4 text-sm leading-6">
          <p className="font-semibold text-2xl">About Car Comparison</p>
          <p>
            Comparisons form a large chunk of thinking/research process we go
            through before purchasing anything. Since cars are not something, we
            buy every day; rigorous car comparisons become ever so more
            important.
            <br /> We at PakWheels.com work hard to bring forth all the car
            related resource material you need so that you can make an informed
            buying decision. Similarly to ease out car comparison in Pakistan,
            we offer our car comparison portal. To compare the cars under your
            consideration just select the make and model from the drop-down
          </p>
        </section>
      </main>
    </section>
  );
};

export default CarsComparison;
