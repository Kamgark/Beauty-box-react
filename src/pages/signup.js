import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import Header from '../components/header';
import SignUpForm from '../components/signupform';
import Chat from "../components/chatbtn/index";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/global.json";
class Signup extends Component {
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
                <SignUpForm/>
                <Chat/>
            </Layout>
        )
    }
}
export default withLocalize(Signup);