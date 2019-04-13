import React from 'react';
import { Translate } from "react-localize-redux";
const Icons=()=>{
    return(
        <section className="icon-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="row beauty-box">
                        
                        <div className="col-sm-3">
                            <img src={require("../../static/images/GIFT1.png")}/>
                        </div>
                        <div className="col-sm-9">
                            <h5><Translate id="nave.subscribe">Subscribe</Translate></h5>
                            <p><Translate id="nave.subscribetext">Subscribe to our site</Translate></p>
                        </div>
                    </div>
                
                </div>
                <div className="col-md-4">
                    <div className="row beauty-box box-border">
                        
                        <div className="col-sm-3">
                            <img src={require("../../static/images/Car.png")}/>
                        </div>
                        <div className="col-sm-9">
                            <h5><Translate id="nave.deliver">Deliver</Translate></h5>
                            <p><Translate id="nave.delivertext">Deliver Now</Translate></p>
                        </div>
                    </div>
                
                </div>
                <div className="col-md-4">
                    <div className="row beauty-box">
                        
                        <div className="col-sm-3">
                            <img src={require("../../static/images/Girl.png")}/>
                        </div>
                        <div className="col-sm-9">
                            <h5><Translate id="nave.unbox">Unbox and Enjoy</Translate></h5>
                            <p><Translate id="nave.unboxtext">Unbox gifts and enjoy</Translate></p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </section>
    )
}
export default Icons;