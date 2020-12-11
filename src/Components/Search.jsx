import React from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import "../CSS/Search.scss"


const Search = (props) => {

    function changeWeather(e){
        props.setTemp(e) 
    }

    return (
        <div className="form-div">
            <Form onSubmit={(e) => {
                e.preventDefault()
                changeWeather(props.input)
            }} 
                action=""
                className="search-form"
            
            >
                <Form.Control
                    className="search" 
                    onChange={props.setInput} 
                    type="text" 
                    placeholder="City,State..."/>
                <Button>submit</Button>
        </Form>
        </div>
      );
}
 
export default Search;