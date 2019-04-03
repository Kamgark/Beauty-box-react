import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import { ContactUs } from '../components/contactUsForm';
import Refer from '../components/refer'; 
import Popular from '../components/popular';
import Services from '../components/services';
import Cards from '../components/cards';
import Subscribe from '../components/subscribe';
import BeautyfulBox from '../components/beautyfulBox';
import Icons from '../components/icons';
import HeaderOne from '../components/frontPageHeader/index'
import Sidebar from '../components/sidebar';
import {BeautyConsumer} from '../store/context';
import Chat from "../components/chatbtn/index";
class Home extends Component {
    render(){
        
        return( 
            <Layout>
                <BeautyConsumer>
                {
                    ({dispatch, total, showdiv, rightcart})=>(
                        <div>
                            <HeaderOne dispatch={dispatch} rightcart={rightcart}/>      
                            <Icons/>
                            <BeautyfulBox/>
                            <Subscribe/>
                            <Cards/>
                            <Services/>
                            <Popular dispatch={dispatch} total={total} showdiv={showdiv} rightcart={rightcart}/>
                            <Sidebar dispatch={dispatch} total={total} showdiv={showdiv} rightcart={rightcart}/>
                            <Refer/>
                            <ContactUs/>
                            <Chat/>
                        </div>
                        )
                    }
                </BeautyConsumer>
            </Layout>
        )
    }
}
export default Home;