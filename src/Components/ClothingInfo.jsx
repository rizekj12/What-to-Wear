import React from 'react';
import "../CSS/ClothingInfo.scss"

const ClothingInfo = (props) => {
    
    return ( 
        <>
            {props.suggestion && 
            <div className={` defaultStyle ${props.style}`}>
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