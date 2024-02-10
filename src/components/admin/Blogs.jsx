import React, { useState } from "react";
import CreateBlogs from "./CreateBlogs";

const Cars = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section>
      <aside className="flex justify-center items-center">
        <p className="text-lg font-semibold">
          You can create a new blog also update existing blogs.
        </p>
      </aside>
      <aside className="flex items-center justify-center gap-3 m-2">
        <button
          onClick={() => setSelected(0)}
          className={` ${
            selected === 0 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          Create Blogs
        </button>
        <button
          onClick={() => setSelected(1)}
          className={` ${
            selected === 1 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          See all blogs
        </button>
        <button
          onClick={() => setSelected(2)}
          className={` ${
            selected === 2 && "border-b-2 font-semibold border-blue-900"
          } px-4 py-2  `}
        >
          Update blogs
        </button>
      </aside>
      {selected === 0 && <CreateBlogs />}
    </section>
  );
};

export default Cars;
