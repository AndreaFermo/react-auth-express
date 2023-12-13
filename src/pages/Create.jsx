import { useState } from "react";
import { useNavigate } from "react-router-dom";

import instance from "../Axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navegate = useNavigate();

  const handleCheckboxChange = () => {
    setPublished(!published);
  };

  const savePost = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      content === "" ||
      image === "" ||
      !typeof published === "boolean"
    ) {
      alert("Please fill out all input complitly");
      return;
    }
    try {
      setIsLoading(true);

      const response = await instance.post("/posts", {
        title,
        content,
        image,
        published,
      });
      alert("Saved");
      setIsLoading(false);
      navegate("/posts");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">
        Create a Post
      </h2>
      <form onSubmit={savePost}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            raw="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="50"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Long Content..."
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Image URL"
          />
        </div>
        <div className="mt-4">
          <label>Published</label>
          <input
            type="checkbox"
            checked={published}
            onChange={handleCheckboxChange}
            className="ml-2"
          />
        </div>
        <div>
          {!isLoading && (
            <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
