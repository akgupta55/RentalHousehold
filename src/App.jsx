import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Subcategories from "./Components/Subcategories/Subcategories";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
