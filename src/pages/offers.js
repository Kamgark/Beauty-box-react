import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import OffersHeader from '../components/offersheader';
import { Offercards } from '../components/offercards';
import Sidebar from '../components/sidebar';
import {BeautyConsumer} from '../store/context';
import Chat from "../components/chatbtn/index";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";
class Offers extends Component {
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
                            <OffersHeader dispatch={dispatch} rightcart={rightcart}/>
                            <Sidebar dispatch={dispatch} total={total} showdiv={showdiv} rightcart={rightcart}/>
                        </div>
                    )
                }
                </BeautyConsumer> 
                <Offercards/>
                <Chat/>
            </Layout>
        )
    }
}
export default withLocalize(Offers);