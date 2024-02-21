import "./Categories.css";
import ChairIcon from "@mui/icons-material/Chair";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SpeakerIcon from "@mui/icons-material/Speaker";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <Link to="/furniture">
        <div className="card">
          <ChairIcon />
          <h3>Furniture</h3>
        </div>
      </Link>
      <Link to="/appliances">
        <div className="card">
          <KitchenIcon />
          <h3>Appliances</h3>
        </div>
      </Link>
      <Link to="/electornics">
        <div className="card">
          <SpeakerIcon />
          <h3>Electorincs</h3>
        </div>
      </Link>
      <Link to="/packages">
        <div className="card">
          <InventoryIcon />
          <h3>Packages</h3>
        </div>
      </Link>
    </div>
  );
}

export default Categories;
