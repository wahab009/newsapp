// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "../App.css";
import { Link } from "react-router";


export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">
    <Link className="navbar-brand text-light" to="/">New New News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/general">Home</Link> </li> 
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/business">business</Link></li> 
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/entertainment">entertainment</Link></li>
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/general">general</Link></li>
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/health">health</Link></li>
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/science">science</Link></li>
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/sports">sports</Link></li>
        <li  className="nav-item"><Link  className=" nav-link text-light active" aria-current="page" to="/technology">technology</Link></li>
     
      </ul>
      
    </div>
  </div>
</nav>
    )
  }
}

export default  NavBar