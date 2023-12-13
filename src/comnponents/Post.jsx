import { Link } from "react-router-dom";

const replacementImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";

const Post = ({ index, post }) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden" key={index}>
      <img
        src={post.image !== null ? post.image : replacementImage}
        alt={post.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text font-semibold">{post.title}</h2>
        <div className="text-sm">{post.content}</div>
        <div className="mt-2 flex gap-4">
          <Link className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">
            Edit
          </Link>
          <Link className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">
            Delete
          </Link>
          <Link
            to={`/post/${post.slug}`}
            className="inline-block w-full text-center shadow-md text-sm bg-yellow-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-yellow-600 hover:cursor-pointer"
          >
            Show
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
