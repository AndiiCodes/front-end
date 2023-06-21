import React, { useState } from "react";

const YourComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    const selectedItemIndex = selectedItems.indexOf(item);

    if (selectedItemIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(selectedItemIndex, 1);
      setSelectedItems(updatedSelectedItems);
    }
  };

  const getButtonText = () => {
    if (selectedItems.length > 0) {
      return `${selectedItems.length} Selected`;
    } else {
      return "Select Language";
    }
  };

  return (
    <div className="container">
      <div className={`select-btn ${isOpen ? "open" : ""}`} 
      onClick={handleSelectBtnClick}>
        <span className="btn-text">{getButtonText()}</span>
        <span className="arrow-dwn">
          <i className="fa-solid fa-chevron-down" />
        </span>
      </div>
      <ul className={`list-items ${isOpen ? "open" : ""}`}>
        <li className={`item ${selectedItems.includes("HTML & CSS") ? "checked" : ""}`} onClick={() => handleItemClick("HTML & CSS")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">HTML &amp; CSS</span>
        </li>
        <li className={`item ${selectedItems.includes("Bootstrap") ? "checked" : ""}`} onClick={() => handleItemClick("Bootstrap")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">Bootstrap</span>
        </li>
        <li className={`item ${selectedItems.includes("JavaScript") ? "checked" : ""}`} onClick={() => handleItemClick("JavaScript")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">JavaScript</span>
        </li>
        <li className={`item ${selectedItems.includes("Node.Js") ? "checked" : ""}`} onClick={() => handleItemClick("Node.Js")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">Node.Js</span>
        </li>
        <li className={`item ${selectedItems.includes("React JS") ? "checked" : ""}`} onClick={() => handleItemClick("React JS")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">React JS</span>
        </li>
        <li className={`item ${selectedItems.includes("Mango DB") ? "checked" : ""}`} onClick={() => handleItemClick("Mango DB")}>
          <span className="checkbox">
            <i className="fa-solid fa-check check-icon" />
          </span>
          <span className="item-text">Mango DB</span>
        </li>
      </ul>
    </div>
  );
};

export default YourComponent;
