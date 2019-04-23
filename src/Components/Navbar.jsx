import React, { Component } from 'react';

const Navbar=()=>{
    return (
<nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="#"><img className="imgheader" src="\images\iconoweb.png" />
        <p  align="center"> GeeksHubs <br/> Travels</p>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Destinos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Quienes somos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Donde estamos</a>
            </li>
            <li className="nav-item dropdown">
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Destinos</a>
                    <a className="dropdown-item" href="#">Quienes somos</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Donde estamos</a>
                </div>
            </li>
        </ul>
    </div>
    <div className="redessociales">
    <i className="fa fa-twitter "  />
    <i className="fa fa-whatsapp "  />
    <i className="fa fa-facebook "  />
    <i className="fa fa-instagram "  />
    <i className="fa fa-linkedin " />
    <i className="fa fa-youtube "  />
    </div>
</nav>
)
}
export default Navbar;