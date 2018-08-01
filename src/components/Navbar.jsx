import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
        <nav id="mainNav" className="navbar navbar-custom">
            <div className="container">

                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                    </button>
                    <Link className="navbar-brand page-scroll" to="/page-top">React Website</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <Link to="#page-top"></Link>
                        </li>
                        <li>
                            <Link className="page-scroll" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="page-scroll" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="page-scroll" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        );
    }
}
 
export default Navbar;