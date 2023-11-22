import "./Navbar.css";
import { useState } from "react";
import icon from "../assets/icon.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Select from "../Select/Select";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Button } from "@mui/material";

import { ClickAwayListener } from "@mui/base";

function Navbar() {
  const cityList = [
    "Bangalore",
    "Mumbai",
    "Pune",
    "Delhi",
    "Noida",
    "Gurgaon",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Mysore",
    "Jaipur",
    "Faridabad",
    "Ghaziabad",
    "Gandhinagar",
    "Chandigarh",
    "Kolkata",
  ];

  const [isOpenSelect, setisOpenSelect] = useState(false);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  return (
    <div className="navbar">
      <div className="company-logo">
        <img src={icon} alt="" />
        <span className="company-name">
          Rental<span className="subName">Household</span>
        </span>
      </div>
      <div className="dropdown1">
        <Select data={cityList} />
      </div>
      <div className="container1">
        <div className="search_box">
          <input
            onClick={() => alert("clicking on search bar")}
            type="text"
            placeholder="Search any item....."
          />
          <div className="search_icon">
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="cart">
          <ShoppingCartOutlinedIcon className="cartIcon" />
          <h3>Cart</h3>
        </div>
        <div className="account" onClick={openSelect}>
          <AccountCircleOutlinedIcon className="accountIcon" />
          <h3>Account</h3>
        </div>

        {isOpenSelect === true && (
          <ClickAwayListener
            onClickAway={() => {
              setisOpenSelect(false);
            }}
          >
            <div className="dropdown2">
              <ul>
                <li>
                  <Button variant="text">
                    <PersonIcon />
                    My Account
                  </Button>
                </li>
                <li>
                  <Button variant="text">
                    <FavoriteBorderIcon />
                    My Wishlists
                  </Button>
                </li>
                <li>
                  <Button variant="text">
                    <SettingsIcon />
                    Settings
                  </Button>
                </li>
                <li>
                  <Button variant="text">
                    <PowerSettingsNewIcon /> Logout
                  </Button>
                </li>
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}

export default Navbar;
