import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import fire from '../../config/fire';
import { Translate } from "react-localize-redux";
import LanguageToggle from '../language/index';
class Header extends Component{ 
    constructor(props) {
		super(props); 
        this.logout = this.logout.bind(this);
        this.state={
            dropdown: 'displaynone',
			header:false,
			languagedrop: 'displaynone'
		};
}
showhead=()=>{
	this.setState({header:!this.state.header});
}
dropdown=()=>{
	if(this.state.dropdown === 'displaynone'){
		this.setState({dropdown: 'display'})
	}else this.setState({dropdown: 'displaynone'})
}
dropdownOne=()=>{
	if(this.state.languagedrop === 'displaynone'){
		this.setState({languagedrop: 'display'})
	}else this.setState({languagedrop: 'displaynone'})
}
logout() {
		fire.auth().signOut();
}
showcart(){
	let {dispatch}=this.props
	dispatch({
		type:'showdiv',
		payLoad: true
})
}
    render(){
        // let {rightcart}= this.props;
        // let rightcarts=[...rightcart];
    return( 
        <section className="hero1 container-fluid">
            <div className="container">
                <div className="row sign-header">
                    <div className="col-md-3 mob-logo">
                        <div className="logo">
                            <img src={require("../../static/images/Logo1.png")}/>
                        </div>
                        <div className="nav-right">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                            <a className="nav-link" onClick={()=> this.showcart()}><i className="fa fa-shopping-cart"></i><div className="header-notif positioning-2"></div></a>
                            </li>
                        </ul>
				 <div className="mob-ham" onClick={()=>{this.showhead()}}>
						<div className="first-div"></div>
						<div className="second-div"></div>
						<div className="third-div"></div>
				</div>
				</div>
                    </div>
                    <div className="col-md-9">
                        <ul className="nav justify-content-end desktop-version">
                        <li className="nav-item">
							<NavLink to="/home"><a className="nav-link" ><Translate id="nave.home"/></a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/about"><a className="nav-link"><Translate id="nave.aboutus"/></a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/gifts"><a className="nav-link"><Translate id="nave.gifts"/></a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/offers"><a className="nav-link"><Translate id="nave.offers"/></a></NavLink>
				    </li>
                            <li className="nav-item">
                            <a className="nav-link" onClick={()=> this.showcart()}><i className="fa fa-shopping-cart"></i><div className="header-notif positioning-2"></div></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" onClick={()=>{this.dropdown()}}><img src={require("../../static/images/User-white.png")}/></a>
						<div className={"user-drop1 "+ this.state.dropdown }>
						<Link to='/'>
								<a onClick={this.logout}><Translate id="nave.logout"/></a>
								</Link>
						</div>
                            </li>
                            <li className="nav-item">
				      <a className="nav-link" onClick={()=>{this.dropdownOne()}}><img src={require("../../static/images/Flag'.png")}/>&nbsp;<i className="fa fa-chevron-down"/></a>
				    <div className={"language-drop "+ this.state.languagedrop}>
						<LanguageToggle/>
						</div>
						</li>
                        </ul>
                        {
					 this.state.header && <ul className="mob-nave mobile-header d">
					 <li className="nav-item">
						 <NavLink to="/home"><a className="" ><Translate id="nave.home"/></a></NavLink>
					 </li>
					 <li className="nav-item">
						 <NavLink to="/about"><a className=""><Translate id="nave.aboutus"/></a></NavLink>
					 </li>
					 <li className="nav-item">
						 <NavLink to="/gifts"><a className="" href="#"><Translate id="nave.gifts"/></a></NavLink>
					 </li>
					 <li className="nav-item">
						 <NavLink to="/offers"><a className="" href="/offers"><Translate id="nave.offers"/></a></NavLink>
					 </li>
					 <li className="nav-item">
					 <a className="" onClick={()=>{this.dropdown()}}><img src={require("../../static/images/User.png")}/></a>
					 <div className={"user-drop "+ this.state.dropdown }>
					 <Link to='/'>
							 <a onClick={this.logout}><Translate id="nave.logout"/></a>
							 </Link>
					 </div>
					 </li>
					 <li className="nav-item">
				      <a className="nav-link" onClick={()=>{this.dropdownOne()}}><img src={require("../../static/images/Flag'.png")}/>&nbsp;<i className="fa fa-chevron-down"/></a>
				    <div className={"language-drop "+ this.state.languagedrop}>
						<LanguageToggle/>
						</div>
						</li>
				</ul>
				 }
                    </div>
                </div>
            </div>
        </section>
    )}
}
export default Header;