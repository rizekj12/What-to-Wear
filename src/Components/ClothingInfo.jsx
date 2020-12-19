import React from "react";
import "../CSS/ClothingInfo.scss";

const ClothingInfo = (props) => {
  return (
    <div className="mainDiv">
      <div className="titleDiv">
        <h2 className="outfitTitle">Outfit of the day</h2>
      </div>
      <div className={`defaultStyle `}>
      {props.suggestion && (
        <div className="suggestDiv">
          <div className="innerDiv">
          <h3>{props.suggestion.clothingType}</h3> 
          </div>
          <div className="innerDiv2">
          {props.suggestion.appearalList.map((item) => (
            <h4 key={item}>{item}</h4>
          ))}
          </div>
          
        </div>
      )}
      </div>
    </div>
  );
};

export default ClothingInfo;
