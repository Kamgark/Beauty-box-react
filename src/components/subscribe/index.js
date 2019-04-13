import React from 'react';
import { Translate } from "react-localize-redux";
const Subscribe=()=>{
    return(
        <section className="Subscribe-section">
            <div className="container">
                <div className="row subscribe">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                    <h1><Translate id="nave.subscibeto">Subscribe to our </Translate> <span><Translate id="nave.monthspackage">12 Months package</Translate></span> &amp;<Translate id="nave.andget"> get </Translate><span><Translate id="nave.onebeautybox">one Beauty BOx</Translate></span><Translate id="nave.for"> for </Translate><span><Translate id="nave.free"> free</Translate></span></h1>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.</p><br/>
                    <p>
                    <button className="btn"><Translate id="nave.subscribe">SUBSCRIBE</Translate></button>
                    </p>
                </div>
                    
            </div>
            </div>
        </section>
    )
}
export default Subscribe;