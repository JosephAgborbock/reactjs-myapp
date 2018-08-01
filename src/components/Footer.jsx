import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <span className="text-muted">My Website &#169; {new Date().getFullYear()}</span>
                </div>
            </div>
        );
    }
}


export default Footer;