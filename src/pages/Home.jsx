import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../comnponents/Post";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { isLoggedInHandler } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    isLoggedInHandler();
    navigate("/");
  }

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3002/posts/");
      console.log(response.data.result);
      setPosts(response.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Link
            to="/create"
            className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
          >
            New Post
          </Link>
        </div>
        <div
          onClick={() => logout()}
          className=" inline-block mt-4 shadow-md bg-red-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-red-600 hover:cursor-pointer"
        >
          logout
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {isLoading ? (
          "Sto caricando i Post"
        ) : (
          <>
            {posts.length > 0 ? (
              <>
                {posts.map((post, index) => {
                  return <Post key={index} post={post} />;
                })}
              </>
            ) : (
              <div>Nessun Post trovato</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
