import "./Navbar.css";
import { useState } from "react";
import icon from "../assets/icon.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

import { ClickAwayListener } from "@mui/base";
import { useAuth } from "../../Context/Auth";

import { Logout } from "@mui/icons-material";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";

function Navbar() {
  const [isOpenSelect, setisOpenSelect] = useState(false);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
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

      <div className="cart">
        <ShoppingCartOutlinedIcon className="cartIcon" />
        <h3>Cart</h3>
      </div>

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
