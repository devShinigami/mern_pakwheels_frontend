import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <section>
      <main className="max-w-5xl mx-auto mt-4">
        <aside className="flex justify-between items-center">
          <p className="tracking-wider uppercase font-semibold">
            Trending
            <span>
              <ChevronRightIcon className="w-4 inline mb-1" />
            </span>
          </p>

          <div>
            <input
              type="text"
              className="outline-none p-2 border-red-700 border "
              placeholder="search"
            />
            <button className="bg-red-700 text-white px-4 border border-red-700 py-2">
              Search
            </button>
          </div>
        </aside>
        <main className="flex">
          <div className="w-1/2 m-1   object-cover overflow-hidden">
            <img
              className="h-full object-cover  hover:scale-105 duration-200 transition-all"
              src="https://static.pakwheels.com/2023/08/https___www.carscoops.com_wp-content_uploads_2023_08_BAIC-BJ40-Exterior-1s-1024x576-2-750x430.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2  m-1 h-full overflow-hidden">
            <img
              className="h-2/3 w-full object-cover hover:scale-105 duration-200 transition-all"
              src="https://static.pakwheels.com/2023/08/Untitled-4-750x430ewfqw.jpg"
              alt=""
            />
            <div className="flex overflow-hidden  space-x-2 mt-2">
              <img
                className="w-1/2 h-32 object-cover hover:scale-105 duration-200 transition-all"
                src="https://static.pakwheels.com/2023/08/Hyundai-Santa-Fe-Elite-1.6T-Hybrid-HEV-AWD-HERO-16x9-1-1-750x430.jpg"
                alt=""
              />
              <img
                className="w-1/2 h-32 object-cover hover:scale-105 duration-200 transition-all"
                src="https://static.pakwheels.com/2023/08/Untitled-12-750x430.jpg"
                alt=""
              />
            </div>
          </div>
        </main>
        <section>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-red-600"></div>
            <p className="text-2xl min-w-fit font-semibold text-red-600">
              Recent Posts
            </p>
            <div className="h-1 w-full bg-gray-200"></div>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </main>
    </section>
  );
};

export default Blog;
