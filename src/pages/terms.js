import React, {Component} from 'react';
import '../style.css';
import Header from "../components/header/index";
import Layout from '../components/layout';
import Terms from "../components/terms/index";
import Chat from "../components/chatbtn/index";
class TermsPage extends Component{
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
export default TermsPage;