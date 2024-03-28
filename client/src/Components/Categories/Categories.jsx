import "./Categories.css";
import ChairIcon from "@mui/icons-material/Chair";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SpeakerIcon from "@mui/icons-material/Speaker";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";

function Categories() {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div className="categories">
      <Link to="/furniture" onClick={handleClick}>
        <div className="card">
          <ChairIcon />
          <h3>Furniture</h3>
        </div>
      </Link>
      <Link to="/appliances" onClick={handleClick}>
        <div className="card">
          <KitchenIcon />
          <h3>Appliances</h3>
        </div>
      </Link>
      <Link to="/electornics" onClick={handleClick}>
        <div className="card">
          <SpeakerIcon />
          <h3>Electorincs</h3>
        </div>
      </Link>
      <Link to="/packages" onClick={handleClick}>
        <div className="card">
          <InventoryIcon />
          <h3>Packages</h3>
        </div>
      </Link>
    </div>
  );
}

export default Categories;
