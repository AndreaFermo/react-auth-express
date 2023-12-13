import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthProvider } from "./contexts/AuthContext";
import PrivatePages from "./middlewares/PrivatePages";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/posts">
            <h2 className="text-white text-2x1 font-bold">My Blog</h2>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto p-2 h-full">
        <AuthProvider>
          <Routes>
            <Route index element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route
              path="/posts"
              element={
                <PrivatePages>
                  <Home />
                </PrivatePages>
              }
            ></Route>
            <Route
              path="/create"
              element={
                <PrivatePages>
                  <Create />
                </PrivatePages>
              }
            ></Route>
            <Route path="/post/:slug" element={<Show />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
};
export default App;
