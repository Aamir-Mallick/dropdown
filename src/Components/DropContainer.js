import React from "react";
import "./DropDownStyles.css";

function DropContainer({ dropDownData, setFieldData, setDropDownData }) {
  return (
    <div className="dropdown-containe">
      {dropDownData &&
        dropDownData.map((items) => {
          return (
            <p
              className="dropdown-elemt"
              onClick={() => {
                setFieldData((prev) => [...prev, items]);
                setDropDownData(dropDownData.filter((x) => x.id !== items.id));
              }}
            >
              {items.tech}
            </p>
          );
        })}
    </div>
  );
}

export default DropContainer;
