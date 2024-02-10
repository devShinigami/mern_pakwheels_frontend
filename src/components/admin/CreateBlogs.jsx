import React, { useState } from "react";
import { useSelector } from "react-redux";
import handleRequest from "../../utils/handleRequest";

const CreateBlogs = () => {
  const { user } = useSelector((state) => state.user);
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    user: user._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await handleRequest("POST", "/admin/createblog", { blog });
    console.log(response);
  };

  return (
    <section>
      <main className="flex flex-col justify-center p-4 items-center gap-2">
        <div className="w-full flex justify-between ">
          <label className="font-semibold p-2 w-1/5">Blog Title</label>
          <input
            onChange={handleChange}
            value={blog.title}
            name="title"
            type="text"
            placeholder="Title of this blog goes here"
            className="border border-blue-900 outline-none p-2 w-full"
          />
        </div>
        <div className="w-full flex justify-between ">
          <label className="font-semibold w-1/5 p-2">Blog Content</label>
          <textarea
            onChange={handleChange}
            value={blog.content}
            name="content"
            type="text"
            placeholder="Content of this blog"
            className="border border-blue-900 p-2 w-full outline-none custom-scrollbar h-36"
          ></textarea>
        </div>
        <button
          className="p-2 border border-blue-900 hover:text-white hover:bg-blue-900"
          onClick={handleSubmit}
        >
          Create
        </button>
      </main>
    </section>
  );
};

export default CreateBlogs;
