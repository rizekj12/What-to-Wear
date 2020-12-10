import React from 'react';
import "../CSS/ClothingInfo.css"

const ClothingInfo = (props) => {
    
    return ( 
        <>
            {props.suggestion && 
            <div className={props.style}>
                <h1>{props.suggestion.clothingType}</h1>
                {
                    props.suggestion.appearalList.map((item) => 
                <p>{item}</p>
                    )
                }
            </div>
            }
        </>
     );
}
 
export default ClothingInfo;