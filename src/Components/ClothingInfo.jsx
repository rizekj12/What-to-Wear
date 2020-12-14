import React from "react";
import "../CSS/ClothingInfo.scss";

const ClothingInfo = (props) => {
  return (
    <div>
      {props.suggestion &&  (
        <div className={`defaultStyle ${props.style}`}>
          <h1>{props.suggestion.clothingType}</h1>
          {props.suggestion.appearalList.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
          
  );
};

export default ClothingInfo;
