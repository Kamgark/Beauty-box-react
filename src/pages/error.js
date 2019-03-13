import React, {Component} from 'react';
import '../style.css';
import {Link} from 'react-router-dom' 
class Error extends Component {
    render(){
        return(
            <div className="error-div">
                <div className="error-inner">
                    <div className="error-logo">
					<img src={require("../static/images/Logo.png")}/>
				    </div>
                    <h1>Please Log In First</h1>
                    <p>To Login Click <Link to='/'><a>Here</a></Link></p>
                </div>
            </div>
        )
    }
}
export default Error;