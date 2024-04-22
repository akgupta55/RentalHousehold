import "./Navbar.css";
import { useState } from "react";
import icon from "../assets/icon.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

import { ClickAwayListener } from "@mui/base";
import { useAuth } from "../../Context/Auth";

import { Logout } from "@mui/icons-material";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../Hook/useCategory";
import { useCart } from "../../Context/cart";
import { Badge } from "antd";

function Navbar() {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [isOpenSelect2, setisOpenSelect2] = useState(false);

  const [cart] = useCart();

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const openSelect2 = () => {
    setisOpenSelect2(!isOpenSelect2);
  };
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully", {
      position: "bottom-center",
      duration: 12000,
    });
  };

  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  return (
    <div className="navbar">
      <Link to="/" onClick={handleClick}>
        <div className="company-logo">
          <img src={icon} alt="" />
          <span className="company-name">
            Rental<span className="subName">Household</span>
          </span>
        </div>
      </Link>

      <div className="container1">
        <SearchInput />
      </div>

      <div className="category" onClick={openSelect2}>
        <div className="ctg">
          <h3>Category</h3>
        </div>

        {isOpenSelect2 === true && (
          <ClickAwayListener
            onClickAway={() => {
              setisOpenSelect2(false);
            }}
          >
            <div className="dropdown">
              <ul>
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${c.slug}`}
                      onClick={handleClick}
                    >
                      <Button variant="text">{c.name}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </div>

      <Badge count={cart?.length} showZero>
        <Link to="/cart" className="nav-link cart" onClick={handleClick}>
          Cart
        </Link>
      </Badge>

      <div className="container2">
        {!auth.user ? (
          <>
            <div className="account" onClick={openSelect}>
              <AccountCircleOutlinedIcon className="accountIcon" />
              <h3>Registration/Login</h3>
            </div>
          </>
        ) : (
          <>
            <div className="account" onClick={openSelect}>
              <AccountCircleOutlinedIcon className="accountIcon" />
              <h3>{auth.user.name}</h3>
            </div>
          </>
        )}

        {isOpenSelect === true && (
          <ClickAwayListener
            onClickAway={() => {
              setisOpenSelect(false);
            }}
          >
            <div className="dropdown2">
              <ul>
                <li>
                  <Link
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                    className="dropdown-item"
                    onClick={handleClick}
                  >
                    <Button variant="text">Dashboard</Button>
                  </Link>
                </li>
                {!auth.user ? (
                  <>
                    <li>
                      <Link to="/login" onClick={handleClick}>
                        <Button variant="text">
                          <LoginIcon />
                          &nbsp;Registration/Login
                        </Button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" onClick={handleLogout}>
                        <Button variant="text">
                          <Logout />
                          &nbsp;Logout
                        </Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}

export default Navbar;
