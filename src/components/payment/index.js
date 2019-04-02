import React, {Component} from 'react'
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
                                    <h3>YOUR INFORMATION</h3>
                                    <label>FULL NAME</label><br/>
                                    <input type="text" name="name" className="name"/><br/>
                                    <label>ADRESS 1</label><br/>
                                    <input type="text" name="adress" className="name"/><br/>
                                    <div className="adress">
                                    <span>
                                    <label>ADRESS 2</label><br/>
                                    <input type="text" name="adress2"/><br/>
                                    </span>
                                    <span>
                                    <label>CITY</label><br/>
                                    <input type="text" name="city"/><br/>
                                    </span>
                                    <span>
                                    <label>STATE</label><br/>
                                    <select className="form-control" id="sel1">
                                        <option>Select state</option>
                                        <option>pakistan</option>
                                        <option>Kashmir</option>
                                        <option>fata</option>
                                    </select><br/>
                                    </span>
                                    <span>
                                    <label>ZIP CODE</label><br/>
                                    <input type="text" name="zip"/>
                                    </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card payment-card m-0">
                            <div className="card-body">
                                <form className="form checkbox">
                                    <h3>SELECT PAYMENT METHOD</h3>
                                    
                                    <input type="checkbox"/>Cash On Delivery
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
                            <button className="btn">Check Out</button>				
                    </div>
                </div>
            </div>
        </div>
    </section>
    )}
}
export default PaymentForm;