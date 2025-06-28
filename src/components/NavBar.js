// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "../App.css";


export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="/">New New News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">Home</a> </li> 
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">About</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">business</a></li> 
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">entertainment</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">general</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">health</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">science</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">sports</a></li>
        <li  onClick={""}className="nav-item">
          <a onClick={""} className=" nav-link text-light active" aria-current="page" href="/">technology</a></li>
     
      </ul>
      
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar