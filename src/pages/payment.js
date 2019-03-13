import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import Header from '../components/header';
import { ContactUs } from '../components/contactUsForm';
import Refer from '../components/refer';
import PaymentForm from '../components/payment';

class Payment extends Component {
    render(){
        return(
            <Layout>
                <Header/> 
                <PaymentForm/>
                <Refer/>
                <ContactUs/>
            </Layout>
        )
    }
}
export default Payment;