import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                            <h3>ORDER SUMMARY</h3>
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
                                <td>Tax</td>
                                <td></td>
                                <td>0 QR</td>
                                
                            </tr>
                            <tr>
                                <td>Shopping Charges</td>
                                <td></td>
                                <td>0 QR</td>    
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>{total} QR</td>                  
                            </tr>
                            </tbody>
                        </table>
                        </div>
                            <Link to='/about'><button className="btn full-width">Check Out</button></Link>				
                    </div>                
            </div>
            </div>
                }                           
            </div>
        )
    }
}
export default Sidebar;