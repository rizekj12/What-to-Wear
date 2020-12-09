import React from 'react';

const Search = (props) => {

    function changeWeather(e){
        props.setTemp(e)
       
    }

    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault()
            changeWeather(props.input)
        }} action="">
            <input onChange={props.setInput} type="text" placeholder="City,State..."/>
            <button>submit</button>
        </form>
        </>
      );
}
 
export default Search;