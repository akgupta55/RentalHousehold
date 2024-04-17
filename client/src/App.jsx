import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Subcategories from "./Components/Subcategories/Subcategories";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Pagenotfound from "./Pages/Pagenotfound/Pagenotfound";
import AdminRoute from "./Components/Routes/AdminRoute";
import Forgot from "./Pages/Registration/Forgot";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/Users";
import Private from "./Components/Routes/Private";

import Orders from "./Pages/User/Orders";
import Profile from "./Pages/User/Profile";
import Dashboard from "./Pages/User/Dashboard";
import Products from "./Pages/Admin/Products";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Try from "./Components/Try/Try";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/try" element={<Try />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
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
