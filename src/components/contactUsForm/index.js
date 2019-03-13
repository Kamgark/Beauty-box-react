import React from 'react';
export const ContactUs = () => {
    return (
        <section className="form-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div className="box-text">
                                <p>For Any Queries</p>
                                <h5>Contact <span> Us</span></h5>
                                <p><img src={require("../../static/images/LIne.png")}/></p>
                            </div>
                        </div>
                    <div className="form">
                        <input type="texr" name="Name" placeholder="Name"/>
                        <input type="text" name="Email" placeholder="Email"/>
                        <input type="text" name="Subject" placeholder="Subject"/><br/><br/>
                        <textarea cols="122" rows="7"/><br/>
                        <div className="submit">
                            <button className="btn">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}