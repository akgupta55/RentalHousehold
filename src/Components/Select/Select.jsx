import { useState } from "react";
import "./Select.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base";

function Select(props) {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState("Choose City");

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setisOpenSelect(false);
      }}
    >
      <div>
        <span className="selectionResult" onClick={openSelect}>
          {selectedItem}
          <KeyboardArrowDown className="SelectionArrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectionMenu">
            <div className="searchField">
              <input type="text" placeholder="Search City..." />
            </div>
            <ul className="selectionList">
              {props.data.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => closeSelect(index, item)}
                    className={`${selectedIndex === index ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default Select;
