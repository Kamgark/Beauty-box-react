import React from 'react';
import { Translate } from "react-localize-redux";
const Cards=()=>{
    return(
        <section className="card-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-text">
                            <p><Translate id="nave.makeupspecialist">We are Makeup Specialist</Translate></p> 
                            <h5><Translate id="nave.ourbeautyfullbox">OUR BEAUTY-FULL BOX</Translate></h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>1 <Translate id="nave.month">Month</Translate></h5>
                                <span>150 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn"><Translate id="nave.select">SELECT</Translate></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>3 <Translate id="nave.months">Months</Translate></h5>
                                <span>140 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn"><Translate id="nave.select">SELECT</Translate></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>6<Translate id="nave.months"> Months</Translate></h5>
                                <span>130 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn pink-btn"><Translate id="nave.select">SELECT</Translate></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <button className="pink-btn2"><Translate id="nave.mostpopular">Most Popular</Translate></button>
                                <h5>12 <Translate id="nave.months">Months</Translate></h5>
                                <span>120 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn"><Translate id="nave.select">SELECT</Translate></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Cards;