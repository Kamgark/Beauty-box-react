import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from '../../config/fire';
import {Redirect} from 'react-router-dom';
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
                                        <h2 className="form-signin-heading">WELCOME BACK!</h2><br/><br/>
                                        <label>User Name/Email</label>
                                        <input value={this.state.email} onChange={this.handleChange} type="email"
                                               name="email" class="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="John@gmail.com" required=""
                                               autofocus=""/><br/>
                                        <label>PASSWORD</label>
                                        <input value={this.state.password} onChange={this.handleChange} type="password"
                                               name="password" class="form-control" id="exampleInputPassword1"
                                               placeholder="*******" required=""/><br/>
                                        {/* <label className="checkbox">
                                         <input type="checkbox" value="remember-me"/> Remember me
                                         </label> */}
                                        <button className="btn btn-lg btn-primary btn-block" type="submit"
                                                onClick={this.login}>Sign in
                                        </button>
                                        <div className="login-sign-div" >
                                            <p className="sign-color">OR</p>
                                            <p className="sign-color">Continue as <Link to="/"><a onClick={()=>{this.guest()}}>Guest</a></Link></p>
                                            <p className="sign-color">Don't have Account,<Link to="/gifts"><a > Sign Up</a></Link></p>
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