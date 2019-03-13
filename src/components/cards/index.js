import React from 'react';
const Cards=()=>{
    return(
        <section className="card-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-text">
                            <p>We are Makeup Specialist</p>
                            <h5>OUR BEAUTY-FULL BOX</h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                            <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>1 Month</h5>
                                <span>150 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn">SELECT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>3 Months</h5>
                                <span>140 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn">SELECT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body card-container">
                                <h5>6 Months</h5>
                                <span>130 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn pink-btn">SELECT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <button className="pink-btn2">Most Popular</button>
                                <h5>12 Months</h5>
                                <span>120 QR</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="btn">SELECT</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Cards;