import React from 'react';

import { Player } from 'video-react';

const Services=()=>{
    return(
        <section className="services-section">
            <div className="container">
                <div className="row">
                        <div className="col-md-12">
                        <div className="box-text" style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                            <p>Enjoy Our Services</p>
                            <h5>HOW IT <span> WORKS</span></h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                            {/*<button className="btn">HOW IT WORKS</button>*/}
                        </div>
                            <Player style={{width:'100%', height:'100%'}}>
                                <source src={require("../../static/images/Skype_Video.mp4")} />
                            </Player>
                    </div>
                    {/*<div className="col-md-4">*/}
                        {/*<div className="services">*/}
                            {/*<div className="icon-section2">*/}
                            {/*<img src={require("../../static/images/Search.png")}/>*/}
                            {/*</div>*/}
                            {/*<h3>1. Discover</h3>*/}
                            {/*<p>Search for beauty services<br/>*/}
                            {/*you need</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                        {/*<div className="services">*/}
                            {/*<div className="icon-section2">*/}
                            {/*<img src={require("../../static/images/Note-PAd.png")}/>*/}
                            {/*</div>*/}
                            {/*<h3>2. Subscribe</h3>*/}
                            {/*<p>Choose your service and <br/>*/}
                            {/*book an appointment directly</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                        {/*<div className="services">*/}
                            {/*<div className="icon-section2">*/}
                            {/*<img src={require("../../static/images/BAg.png")}/>*/}
                            {/*</div>*/}
                            {/*<h3>3. Enjoy</h3>*/}
                            {/*<p>Sit back and enjoy your<br/>*/}
                            {/*unique beauty experience</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}
export default Services;