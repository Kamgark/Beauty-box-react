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
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";
class Payment extends Component {
    constructor(props) {
        super(props);
    
        this.props.initialize({
          languages: [
            { name: "English", code: "en" },
            { name: "Arabic", code: "fr" }
          ],
          translation: globalTranslations,
          options: { renderToStaticMarkup }
        });
        this.props.addTranslationForLanguage(globalTranslations, "ar");
      }
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
export default withLocalize(Payment);