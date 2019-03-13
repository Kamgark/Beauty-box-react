import React, {Component} from 'react';

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
        return(
            <div>
                <div className="red-button" onMouseEnter={() => this.showcart("enter")}></div>
               { this.state.showcart && 
                <div onMouseLeave={()=> this.showcart('leave')} className={"right-sidebar-outer " + this.state.claseName}>
                    <div className="right-sidebar">        
                            <div className="card order-summary">
                        <div className="card-order">
                            <h3>ORDER SUMMARY</h3>
                            <table className="table">
                            <tbody>
                            <tr>
                                <td>icon</td>
                                <td>3 Month subcription</td>
                                <td>120 QR</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>12 Month subcription</td>
                                <td>140 QR</td>
                            </tr>
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
                                <td>260 QR</td>                  
                            </tr>
                            </tbody>
                        </table>
                        </div>
                            <button className="btn">Check Out</button>				
                    </div>                
            </div>
            </div>
                }                           
            </div>
        )
    }
}
export default Sidebar;