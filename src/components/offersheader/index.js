import React,{Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import fire from '../../config/fire'
class OffersHeader extends Component{
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.state={
			dropdown: 'displaynone'
		};
}
dropdown=()=>{
	if(this.state.dropdown === 'displaynone'){
		this.setState({dropdown: 'display'})
	}else this.setState({dropdown: 'displaynone'})
}
logout() {
		fire.auth().signOut();
}
	render(){
    return (
        <div> 
    <div className="overlay"></div>
        <section className="hero-2" >
	<div className="container">
		<div className="row header">
			<div className="col-md-3">
				<div className="logo">
					<img src={require("../../static/images/Logo.png")} alt=""/>
				</div>
		    </div>
			<div className="col-md-9">
				 <ul className="nav justify-content-end">
				 <li className="nav-item">
							<NavLink to="/home"><a className="nav-link">HOME</a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/about"><a className="nav-link">ABOUT US</a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/gifts"><a className="nav-link">GIFTS</a></NavLink>
				    </li>
				    <li className="nav-item">
							<NavLink to="/offers"><a className="nav-link">OFFERS</a></NavLink>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="/"><img src={require("../../static/images/cart-white.png")}/></a>
				    </li>
				    <li className="nav-item">
						<a className="nav-link" onClick={()=>{this.dropdown()}}><img src={require("../../static/images/User-white.png")}/></a>
						<div className={"user-drop2 "+ this.state.dropdown }>
						<Link to='/'>
								<a onClick={this.logout}>Log Out</a>
								</Link>
						</div>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="/"><img src={require("../../static/images/Flag'.png")}/>&nbsp;<i className="fa fa-chevron-down"/></a>
				    </li>
				 </ul>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="row head-text">
			<div className="col-md-12">
				<div className="content-container center-align">
					<h1>SPECIAL OFFERS</h1>
				</div>
			</div>
		</div>
	</div>
	
</section>
</div>
    )}
}
export default OffersHeader;