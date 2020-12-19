import React from 'react';
import { Form } from "react-bootstrap";
import "../CSS/NewSearch.scss"

const NewSearch = (props) => {
    function changeWeather(e) {
        props.setTemp(e);
      }
    return ( 
        <div className="wrap">
            <Form
            onSubmit={(e) => {
                e.preventDefault();
                changeWeather(props.input);
              }}
            >
   <div className="search">
      <input type="text"
      onChange={props.setInput}
      className={`searchTerm`}
      placeholder="City,State..."/>
      <button type="submit" className="searchButton">
        Search
     </button>
   </div>
   </Form>
</div>
     );
}
 
export default NewSearch;