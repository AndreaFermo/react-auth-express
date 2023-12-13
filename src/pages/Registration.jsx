import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold rext-2x1 mb-4 block text-center">
        Registrati
      </h2>
      <form>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
            placeholder="Enter Title"
          />
        </div>
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
            Signup
          </button>
          <div className="inline-block w-full">
            <Link
              to="/"
              className="inline-block w-full text-center shadow-md text-sm bg-yellow-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-yellow-600 hover:cursor-pointer"
            >
              back to Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
