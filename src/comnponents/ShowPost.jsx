const ShowPost = ({ post }) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden lg:w-1/2 m-auto">
      <img src={post.image} alt={post.title} className="object-cover w-full" />
      <div className="p-4">
        <h2 className="text font-semibold">{post.title}</h2>
        <div className="text-sm">{post.content}</div>
        <div className="mt-2 flex gap-4"></div>
      </div>
    </div>
  );
};

export default ShowPost;
