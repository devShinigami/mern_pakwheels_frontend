import React from "react";

const BlogCard = () => {
  return (
    <section className="flex gap-4 my-4">
      <img
        className="w-60 h-32  object-cover"
        src="https://static.pakwheels.com/2023/08/Suzuki-GD110S-Pakistan-101-750x430.jpg"
        alt=""
      />
      <main>
        <p className="font-semibold text-xl">
          Pak Suzuki Halts Bike Assembly Plant Again
        </p>
        <div className="flex gap-4 text-sm text-gray-400">
          <p>Omar Farooq</p>
          <p>Aug 22 , 2023</p>
        </div>
        <p className="w-2/3">
          The recent devaluation of Pakistani rupee and burgeoning inflation in
          conjunction with fuel prices has dashed much hope that country’s auto
          industry would be embarked on the trajectory of stability anytime…
        </p>
      </main>
    </section>
  );
};

export default BlogCard;
