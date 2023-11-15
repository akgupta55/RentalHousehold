import "./Navbar.css";
import logo from "../assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
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
