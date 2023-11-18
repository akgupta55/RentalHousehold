import "./Navbar.css";
import icon from "../assets/icon.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Select from "../Select/Select";

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

  return (
    <div className="navbar">
      <div className="company-logo">
        <img src={icon} alt="" />
        <span className="company-name">
          Rental<span className="subName">Household</span>
        </span>
      </div>
      <div className="dropdown">
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
        <div className="account">
          <AccountCircleOutlinedIcon className="accountIcon" />
          <h3>Account</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
