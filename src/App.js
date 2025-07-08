import './App.css';
import NavBar from "./components/NavBar";
import React, { Component } from 'react';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component {
 myapikey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress:0
  }
  setProgress =(progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
           <LoadingBar
        color="#f11946"
        progress={this.state.progress}       
      />
          <Routes>
            {/* Redirect from / to /general */}
            <Route path="/" element={<Navigate to="/general" replace />} />

            {/* News routes */}
            <Route path="/business" element={<News myapikey = {this.myapikey}  setProgress = {this.setProgress} p_size={100} category="business" />} />
            <Route path="/entertainment" element={<News myapikey = {this.myapikey}  setProgress = {this.setProgress} p_size={100} category="entertainment" />} />
            <Route path="/general" element={<News myapikey = {this.myapikey}  setProgress = {this.setProgress} p_size={100} category="general" />} />
            <Route path="/health" element={<News myapikey = {this.myapikey}  setProgress = {this.setProgress} p_size={100} category="health" />} />
            <Route path="/science" element={<News  myapikey = {this.myapikey} setProgress = {this.setProgress} p_size={100} category="science" />} />
            <Route path="/sports" element={<News myapikey = {this.myapikey}  setProgress = {this.setProgress} p_size={100} category="sports" />} />
            <Route path="/technology" element={<News  myapikey = {this.myapikey} setProgress = {this.setProgress} p_size={100} category="technology" />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
