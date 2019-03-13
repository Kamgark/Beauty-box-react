import React, {Component} from 'react';
class Popular extends Component{
    
    render(){
    return(
        <section className="image-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-text">
                            <p>Previous Months</p>
                            <h5><span>POPULAR</span> BEAUTY BOXS</h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gift-img">
                            <img src={require("../../static/images/Gift.png")} className="image"/>
                            <div className="overlay">
                            <div className="btn white-btn">ADD TO CART</div>
                            <div className="footer">
                                <h3>August 2018</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gift-img">
                            <img src={require("../../static/images/Gift.png")} className="image"/>
                            <div className="overlay">
                            <div className="btn white-btn ">ADD TO CART</div>
                            <div className="footer">
                                <h3>August 2018</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gift-img">
                            <img src={require("../../static/images/Gift.png")} className="image"/>
                            <div className="overlay">
                            <div className="btn white-btn">ADD TO CART</div>
                            <div className="footer">
                                <h3>August 2018</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gift-img">
                            <img src={require("../../static/images/Gift.png")} className="image"/>
                            <div className="overlay">
                            <div className="btn white-btn" >ADD TO CART</div>
                            <div className="footer">
                                <h3>August 2018</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}
}
export default Popular;