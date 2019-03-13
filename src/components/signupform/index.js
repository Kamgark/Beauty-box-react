import React,{Component} from 'react';
import fire from '../../config/fire';
import {Link} from 'react-router-dom';
class SignUpForm extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
    render(){
    return(
        <section className="image-contaner">
            <div className="container">
                <div className="row">
                    <div className="card card-width">
                        <div className="card-body">
                            <div className="container">
                                <form className="form-signin" role="form">
                                    <h2 className="form-signin-heading">SIGN UP</h2><br/><br/>
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="John" required="" autofocus=""/><br/>
                                    <label>Email Address</label>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John@gmail.com" required="" autofocus=""/><br/>
                                    <label>Password</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="*******" required=""/><br/>
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="*******" required=""/><br/>
                                    {/* <label className="checkbox">
                                    <input type="checkbox" value="remember-me"/> Remember me
                                    </label> */}
                                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signup}><Link to="/index"><a>Sign Up</a></Link></button>
                                    <p className="sign-color">Already have Account, <Link to="/"><a>Sign in.</a></Link></p>
                                </form>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>
    )}
}
export default SignUpForm;