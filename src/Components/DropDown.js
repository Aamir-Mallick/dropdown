import React, { useEffect, useState } from "react";
import "./DropDownStyles.css";
import data from "./data.json";
import DropContainer from "./DropContainer";

function DropDown() {
  const [dropDownData, setDropDownData] = useState([]);
  const [isOpen, SetIsOpen] = useState(false);
  const [fieldData, setFieldData] = useState([]);
  useEffect(() => {
    setDropDownData(data);
  }, []);
  return (
    <>
      {console.log(dropDownData)}
      <div className="main-container">
        <div className="field-container">
          <div className="field">
            {fieldData &&
              fieldData.map((items) => {
                return (
                  <button className="btn">
                    <div className="btn-content">{items.tech}</div>
                    <div
                      onClick={() => {
                        setFieldData(
                          fieldData.filter((x) => x.id !== items.id)
                        );
                        setDropDownData((prev) => [...prev, items]);
                      }}
                      className="btn-close"
                    >
                      x
                    </div>
                  </button>
                );
              })}
          </div>
          <div
            onClick={() => {
              SetIsOpen(!isOpen);
            }}
            className="toggle-btn"
          >
            {isOpen ? "off" : "On"}
          </div>
        </div>
        {isOpen ? (
          <DropContainer
            dropDownData={dropDownData}
            setDropDownData={setDropDownData}
            setFieldData={setFieldData}
          />
        ) : null}
      </div>
    </>
  );
}

export default DropDown;
