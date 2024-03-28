import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Subcategories from "./Components/Subcategories/Subcategories";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Pagenotfound from "./Pages/Pagenotfound/Pagenotfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/furniture"
          element={<Subcategories categories="furniture" />}
        />
        <Route
          path="/appliances"
          element={<Subcategories categories="appliances" />}
        />
        <Route
          path="/electornics"
          element={<Subcategories categories="electornics" />}
        />
        <Route
          path="/packages"
          element={<Subcategories categories="packages" />}
        />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
