import './App.css';
import NavBar from "./components/NavBar";
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<News p_size={10} category="general" />} />
            <Route path="/business" element={<News p_size={6} category="business" />} />
            <Route path="/entertainment" element={<News p_size={6} category="entertainment" />} />
            <Route path="/general" element={<News p_size={6} category="general" />} />
            <Route path="/health" element={<News p_size={6} category="health" />} />
            <Route path="/science" element={<News p_size={6} category="science" />} />
            <Route path="/sports" element={<News p_size={6} category="sports" />} />
            <Route path="/technology" element={<News p_size={6} category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
