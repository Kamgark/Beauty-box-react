import React, {Component} from 'react';
import data from '../../data/data.json';

class Popular extends Component{

    addtocart(val){
        let {rightcart,dispatch,total}= this.props;
        let rightcarts= [...rightcart];
        rightcarts.push(val);
        total=total + val.price
        dispatch({
            type: 'total',
            payLoad: total
        })
        dispatch({
            type: 'rightcart',
            payLoad: rightcarts
        })
        dispatch({
            type:'showdiv',
            payLoad: true
        })
    }
    render(){
    return(
        <section className="image-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-text">
                            <p>Previous Months</p>
                            <h5><span>POPULAR</span> BEAUTY BOXS</h5>
                            <p><img src={require("../../static/images/LIne.png")}/></p>
                        </div>
                    </div>
                    {
                        
                        data.data && data.data.products.map((items,index)=>{
                            return(
                                <div className="col-md-3">
                                <div className="gift-img">
                                    <img src={require('../../static/images/'+ items.imageUrl)} className="image"/>
                                    <div className="overlay">
                                        <div className="btn white-btn" onClick={()=> this.addtocart(items)}>ADD TO CART</div>
                                        <div className="footer">
                                            <h3>{items.date}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )}
}
export default Popular;