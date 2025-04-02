import "./Image.css";
import foodImage from "../../assets/foodImage.png";
import React from "react";

const Image = () => {
  return (
    <div className="food-container">
        <div className="curve"></div> {/* Curved Line */}
        <div className="food-item small top">
          <img src={foodImage} alt="Delicious Food" />
        </div>
        <div className="food-item large middle">
          <img src={foodImage} alt="Delicious Food" />
        </div>
        <div className="food-item small bottom">
          <img src={foodImage} alt="Delicious Food" />
        </div>
    </div>
  );
};

export default Image;
