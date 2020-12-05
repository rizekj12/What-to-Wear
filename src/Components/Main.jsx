import React, { Component } from 'react';
import Header from "./Header"
import Search from "./Search"

class Main extends Component {
    state = {
        location:"",
        currentWeather: null,
        clothingSuggestion: null 
      }
    render() { 
        return ( 
            <>
            <Header/>
            <Search/>

            </>

         );
    }
}
 
export default Main;