import "./Categories.css";
import ChairIcon from "@mui/icons-material/Chair";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SpeakerIcon from "@mui/icons-material/Speaker";
import InventoryIcon from "@mui/icons-material/Inventory";

function Categories() {
  return (
    <div className="categories">
      <div className="card">
        <ChairIcon />
        <h3>Furniture</h3>
      </div>
      <div className="card">
        <KitchenIcon />
        <h3>Appliances</h3>
      </div>
      <div className="card">
        <SpeakerIcon />
        <h3>Electorincs</h3>
      </div>
      <div className="card">
        <InventoryIcon />
        <h3>Packages</h3>
      </div>
    </div>
  );
}

export default Categories;
