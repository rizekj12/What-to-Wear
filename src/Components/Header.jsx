import React from 'react';
import "../CSS/Header.scss"

const Header = (props) => {
    return ( 
        <>
            <div className={` ${props.style2} header-div`}>
                <h1 className="header-letters">What to Wear</h1>
                <h3 className="location">{props.location}</h3>  
            </div>
        </>
     );
}
 
export default Header;