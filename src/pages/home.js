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
class Home extends Component {
    render(){
        return(
            <Layout>
                <HeaderOne/>
                <Icons/>
                <BeautyfulBox/>
                <Subscribe/>
                <Cards/>
                <Services/>
                <Popular/>
                <Refer/>
                <Sidebar/>
                <ContactUs/>
            </Layout>
        )
    }
}
export default Home;