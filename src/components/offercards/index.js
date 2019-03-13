import React from 'react';
export const Offercards = () => {
    return (
        <section className="container">
            <div className="row row-extra ">
                <div className="col-md-4">
                    <div className="outer-shadow">
                        <div className="image-div">
                            <img src={require("../../static/images/offer-1.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="right-box">
                        <div className="inner-box">
                            <h1>FACIAL MAKEUP TREATMENT</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                            </p>
                            <div><div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p></div>
                            <div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Euismod tincidunt ut laoreet dolore magna aliquam </p></div></div>
                            <div><button class="btn">REDEEM NOW</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-extra ">
                <div className="col-md-4">
                    <div className="outer-shadow">
                        <div className="image-div">
                            <img src={require("../../static/images/offer-2.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="right-box">
                        <div className="inner-box">
                            <h1>EYE MAKEUP TREATMENT</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                            </p>
                            <div><div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p></div>
                            <div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Euismod tincidunt ut laoreet dolore magna aliquam </p></div></div>
                            <div><button class="btn">REDEEM NOW</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-extra ">
                <div className="col-md-4">
                    <div className="outer-shadow">
                        <div className="image-div">
                            <img src={require("../../static/images/offer-3.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="right-box">
                        <div className="inner-box">
                            <h1>HAIR MAKEUP TREATMENT</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                            </p>
                            <div><div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p></div>
                            <div className="image-para"><img src={require("../../static/images/bullets.png")} alt=""/><p>Euismod tincidunt ut laoreet dolore magna aliquam </p></div></div>
                            <div><button class="btn">REDEEM NOW</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}