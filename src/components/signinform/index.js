import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/fire';
import {Redirect} from 'react-router-dom';
import { Translate } from "react-localize-redux";
class SignInForm extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: '',
          loader:false,
            red: false
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      guest(){
        this.setState({loader: true})
        fire.auth().signInAnonymously().catch(function(error) {
            this.setState({loader: false});
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
          }); 
      }
      login(e) {
          this.setState({loader: true})
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            this.setState({red: true})
        }).catch((error) => {
            this.setState({loader: false});

          });
      }
    render(){
        let red=this.state.red;
        if(red){
            return (
                <Redirect to="/"/>
            )
        }
    return(
        <div>{ 
            this.state.loader ?  <div className="fuck">
                <div id="breaty" class="loader"></div>
            </div>:
                <section className="image-contaner">
                <div className="container">
                    <div className="row">
                        <div className="card card-width">
                            <div className="card-body">
                                <div className="container">
                                    <form className="form-signin" role="form">
                                        <h2 className="form-signin-heading"><Translate id="nave.welcomeback">WELCOME BACK!</Translate></h2><br/><br/>
                                        <label><Translate id="nave.usernameemail">User Name/Email</Translate></label>
                                        <input value={this.state.email} onChange={this.handleChange} type="email"
                                               name="email" class="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="John@gmail.com" required=""
                                               autofocus=""/><br/>
                                        <label><Translate id="nave.password">PASSWORD</Translate></label>
                                        <input value={this.state.password} onChange={this.handleChange} type="password"
                                               name="password" class="form-control" id="exampleInputPassword1"
                                               placeholder="*******" required=""/><br/>
                                        {/* <label className="checkbox">
                                         <input type="checkbox" value="remember-me"/> Remember me
                                         </label> */}
                                        <button className="btn btn-lg btn-primary btn-block" type="submit"
                                                onClick={this.login}><Translate id="nave.signin">Sign in</Translate>
                                        </button>
                                        <div className="login-sign-div" >
                                            <p className="sign-color"><Translate id="nave.or">OR</Translate></p>
                                            <button className="btn btn-lg btn-primary btn-block guest-btn" type="submit">
                                                <Link to="/"><a onClick={()=>{this.guest()}}><Translate id="nave.guest">Guest</Translate></a></Link>
                                            </button>
                                            <p className="sign-color"><Translate id="nave.donthaveaccount"/><Link to="/gifts"><a > <Translate id="nave.password">Sign Up</Translate></a></Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
        </div>
            )}
}
export default SignInForm;