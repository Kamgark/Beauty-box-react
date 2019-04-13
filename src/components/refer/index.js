import React from 'react';
import { Translate } from "react-localize-redux";
const Refer = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row banner">
                    <div className="col-md-6">
                        <div className="avail">
                        <h2><Translate id="nave.referto">Refer A Friend To Avail 10% Discount</Translate></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                        nonummy nibh euismod tincidunt ut laoreet</p>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input">
                            <input type="text" name="email" placeholder="Enter e-mail address"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Refer;