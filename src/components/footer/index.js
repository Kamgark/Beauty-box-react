import React from 'react';
import {NavLink} from 'react-router-dom';
import { Translate } from "react-localize-redux";
const Footer = () => {
    return (
        <div> 
            <section className="footer-section">
	        <div className="container">
		        <div className="row">
			        <div className="social-icons">
				        <div className="footer-logo">
                            <img src={require("../../static/images/FooterLogo.png")}/>
				        </div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                            <NavLink to="/home"><a className="nav-link" ><Translate id="nave.home"/></a></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/about"><a className="nav-link"><Translate id="nave.aboutus"/></a></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/gifts"><a className="nav-link" href="#"><Translate id="nave.gifts"/></a></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/offers"><a className="nav-link" href="/offers"><Translate id="nave.offers"/></a></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/termsandconditions"><a className="nav-link" href="/offers"><Translate id="nave.termsandconditions">TERMS AND CONDITIONS</Translate></a></NavLink>
                            </li>
                            
                        </ul>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src={require("../../static/images/Face-book.png")}/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src={require("../../static/images/Twitter.png")}/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src={require("../../static/images/Instagram.png")}/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#"><img src={require("../../static/images/Invision.png")}/></a>
                            </li>
                        </ul><br/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <p><Translate id="nave.copyrights">Copyright 2018 | ALL RIGHTS RESERVED</Translate></p>
            </div>  
        </div>
    )
}
export default Footer;