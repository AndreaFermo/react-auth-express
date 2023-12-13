import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, isLoggedIn, setIsLoggedIn, token, setToken } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const payload = {
    email,
    password,
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      console.log("ciao");
      const response = await axios.post("http://localhost:3002/login", payload);
      console.log(response.data.user);
      setUser(response.data.user);
      setToken(response.data.token);
      console.log(token);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/posts");
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => console.log(user, isLoggedIn), [user]);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">Login</h2>
      <h3 className={error ? "" : "hidden"}>ERRORE</h3>
      <form onSubmit={login}>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Password"
          />
        </div>
        <div className="mt-2 flex gap-4">
          <button className="inline-block w-full text-center shadow-md text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-green-600 hover:cursor-pointer">
            Login
          </button>
          <div className="inline-block w-full">
            <Link
              to="/register"
              className="inline-block w-full text-center shadow-md text-sm bg-yellow-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-yellow-600 hover:cursor-pointer"
            >
              SignUp
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
