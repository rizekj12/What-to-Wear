import React from 'react';
import "../CSS/Header.scss"

const Header = (props) => {
    let headerStyle = "header-div"
    return ( 
        <>
            <div className={`header-div ${props.style}`}>
                <h1 className="header-letters">What to Wear</h1>
                <h3 className="location">{props.location}</h3>  
            </div>
        </>
     );
}
 
export default Header;