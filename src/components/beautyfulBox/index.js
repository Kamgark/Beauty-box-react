import React from 'react';
const BeautyfulBox=()=>{
    return(
        <section className="beauty-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-text">
                            <p>We are Makeup Specialist</p>
                            <h5>OUR BEAUTY-FULL BOX</h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="gift-image">
                            <img src={require("../../static/images/Gift.png")}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="month-text">
                            <h5>Beauty-Full Box For This Month</h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                            </p>
                            <div className="buttn">
                                <button className="btn">SUBSCRIBE</button>
                                <button className="btn">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BeautyfulBox;