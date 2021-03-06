import React, {Component} from 'react';
import { Translate } from "react-localize-redux";
class PaymentForm extends Component{ 
    render(){
        let {rightcart,total}= this.props;
        let rightcarts=[...rightcart];
    return(
        <section className="payment-section" id="payment-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card payment-card m-0">
                            <div className="card-body">
                                <form className="form">
                                    <h3><Translate id="nave.yourinformation">YOUR INFORMATION</Translate></h3>
                                    <label><Translate id="nave.fullname">FULL NAME</Translate></label><br/>
                                    <input type="text" name="name" className="name"/><br/>
                                    <label><Translate id="nave.address">ADDRESS</Translate> 1</label><br/>
                                    <input type="text" name="adress" className="name"/><br/>
                                    <div className="adress">
                                    <span>
                                    <label><Translate id="nave.address">ADDRESS</Translate> 2</label><br/>
                                    <input type="text" name="adress2"/><br/>
                                    </span>
                                    <span>
                                    <label><Translate id="nave.city">CITY</Translate></label><br/>
                                    <input type="text" name="city"/><br/>
                                    </span>
                                    <span>
                                    <label><Translate id="nave.state">STATE</Translate></label><br/>
                                    <select className="form-control" id="sel1">
                                        <option>Select state</option>
                                        <option>pakistan</option>
                                        <option>Kashmir</option>
                                        <option>fata</option>
                                    </select><br/>
                                    </span>
                                    <span>
                                    <label><Translate id="nave.zipcode">ZIP CODE</Translate></label><br/>
                                    <input type="text" name="zip"/>
                                    </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card payment-card m-0">
                            <div className="card-body">
                                <form className="form checkbox">
                                    <h3><Translate id="nave.selectpaymentmethod">SELECT PAYMENT METHOD</Translate></h3>
                                    
                                    <input type="checkbox"/><Translate id="nave.cashondelivery">Cash On Delivery</Translate>
                                    {/* <div className="buttons">
                                    <button className="btn"><img src={require("../../static/images/Untitled-6.png")} alt=""/> Credit Card</button>
                                    <button className="btn"><img src={require("../../static/images/Untitled-5.png")} alt=""/> Bank Transfer</button>
                                    <button className="btn"><img src={require("../../static/images/paypal.png")} alt=""/> Paypal</button>
                                </div> */}
                                {/* <label>NAME ON CARD</label>
                                <input type="text" name="name" className="name"/>
                                <label>CARD NUMBER</label>
                                <input type="number" name="number" placeholder="0000-0000-0000-0000" className="name"/>
                                <div className="list">
                                    <span>
                                    <label>MONTH</label><br/>
                                    <select className="form-control option" id="sel1">
                                        <option>Select Month</option>
                                        <option>Jun</option>
                                        <option>Feb</option>
                                        <option>March</option>
                                    </select><br/>
                                </span>
                                <span>
                                    <label>YEAR</label><br/>
                                    <select className="form-control option" id="sel1">
                                        <option>Select Year</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                    </select><br/>
                                </span>
                                <span>
                                    <label>CVV</label><br/>
                                    <input type="text" name="name" className="ccv"/><br/>
                                </span>
                                </div> */}
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
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
                            <button className="btn"><Translate id="nave.checkout">Check Out</Translate></button>				
                    </div>
                </div>
            </div>
        </div>
    </section>
    )}
}
export default PaymentForm;