import './App.css';
import NavBar from "./components/NavBar";
import React, { Component } from 'react'
import News from './components/News';
// import NewsItem from './components/NewsItem';



export default class App extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <News/>
        {/* <NewsItem/> */}
      </div>
    )
  }
}

// df14f9c4c05048af91aa2c76bab188a6
