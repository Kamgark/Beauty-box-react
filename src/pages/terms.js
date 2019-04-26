import React, {Component} from 'react';
import '../style.css';
import Header from "../components/header/index";
import Layout from '../components/layout';
import Terms from "../components/terms/index";
import Chat from "../components/chatbtn/index";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";
class TermsPage extends Component{
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
               <Header/>
               <Terms/>
               <Chat/>
           </Layout>
        )
    }
}
export default withLocalize(TermsPage);