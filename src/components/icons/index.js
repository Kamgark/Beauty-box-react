import React from 'react';
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
                            <h5>Select Beauty Box</h5>
                            <p>Lorem Ipisum dolar sit amit</p>
                        </div>
                    </div>
                
                </div>
                <div className="col-md-4">
                    <div className="row beauty-box box-border">
                        
                        <div className="col-sm-3">
                            <img src={require("../../static/images/Car.png")}/>
                        </div>
                        <div className="col-sm-9">
                            <h5>Free Shipping</h5>
                            <p>Lorem Ipisum dolar sit amit</p>
                        </div>
                    </div>
                
                </div>
                <div className="col-md-4">
                    <div className="row beauty-box">
                        
                        <div className="col-sm-3">
                            <img src={require("../../static/images/Girl.png")}/>
                        </div>
                        <div className="col-sm-9">
                            <h5>Online Support</h5>
                            <p>Lorem Ipisum dolar sit amit</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        </section>
    )
}
export default Icons;