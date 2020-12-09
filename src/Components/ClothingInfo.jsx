import React from 'react';

const ClothingInfo = (props) => {
    
    return ( 
        <>
        {props.suggestion && 
        <h1>{props.suggestion.clothingType}</h1>
        }
        </>
     );
}
 
export default ClothingInfo;