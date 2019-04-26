import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Translate } from "react-localize-redux";
class Sidebar extends Component{
    state={
        showcart: false,
        claseName:''
    }
    showcart(value){
        switch(value){
            case 'enter':
                this.setState({showcart: true, claseName: 'transitioncart'});
                break;
            case 'leave':
                this.setState({showcart: false, claseName: ''});
                break;
            default:
                break;
            
        }   

    }
    render(){
        let {dispatch, showdiv, rightcart,total}= this.props;
        let rightcarts=[...rightcart];
        return(
            <div>
                {
                        showdiv && <div className="red-button" onMouseEnter={() => this.showcart("enter")}>{rightcarts.length}</div>
                }
                
               { this.state.showcart && 
                <div onMouseLeave={()=> this.showcart('leave')} className={"right-sidebar-outer " + this.state.claseName}>
                    <div className="right-sidebar">        
                            <div className="card order-summary">
                        <div className="card-order">
                            <h3><Translate id="nave.ordersummary">ORDER SUMMARY</Translate></h3>
                            <table className="table">
                            <tbody>
                        {rightcarts && rightcarts.map((items,index)=>{
                            return(
                                <tr>
                                <td>{items.name}</td>
                                <td>{items.subscription} subscription</td>
                                <td>{items.price} QR</td>
                            </tr>
                            )})}
                            
                            <tr>
                                <td><Translate id="nave.tax">Tax</Translate></td>
                                <td></td>
                                <td>0 QR</td>
                                
                            </tr>
                            <tr>
                                <td><Translate id="nave.shoppingcharges">Shopping Charges</Translate></td>
                                <td></td>
                                <td>0 QR</td>    
                            </tr>
                            <tr>
                                <td><Translate id="nave.total">Total</Translate></td>
                                <td></td>
                                <td>{total} QR</td>                  
                            </tr>
                            </tbody>
                        </table>
                        </div>
                            <Link to='/about'><button className="btn full-width"><Translate id="nave.checkout">Check Out</Translate></button></Link>				
                    </div>                
            </div>
            </div>
                }                           
            </div>
        )
    }
}
export default Sidebar;