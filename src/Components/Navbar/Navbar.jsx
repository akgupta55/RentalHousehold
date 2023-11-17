import "./Navbar.css";
import logo from "../assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
      <img src={logo} alt="" />
      <div className="dropdown">
        <Select data={cityList} />
      </div>
      <div className="conatiner1">
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
    </div>
  );
}

export default Navbar;
