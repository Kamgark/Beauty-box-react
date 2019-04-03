import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import Header from '../components/header';
import { ContactUs } from '../components/contactUsForm';
import Refer from '../components/refer';
import PaymentForm from '../components/payment';
import {BeautyConsumer} from '../store/context';
import Sidebar from '../components/sidebar';
import Chat from "../components/chatbtn/index";
class Payment extends Component {
    render(){
        return(
            <Layout>
                <BeautyConsumer>
                {
                    ({dispatch,rightcart,showdiv, total})=>(
                        <div>
                            <Header dispatch={dispatch} rightcart={rightcart}/>
                            <Sidebar dispatch={dispatch} total={total} showdiv={showdiv} rightcart={rightcart}/>
                            <PaymentForm total={total} rightcart={rightcart}/>
                        </div>
                    )
                }
                </BeautyConsumer> 
                <Refer/>
                <ContactUs/>
                <Chat/>
            </Layout>
        )
    }
}
export default Payment;