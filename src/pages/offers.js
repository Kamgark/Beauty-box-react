import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import OffersHeader from '../components/offersheader';
import { Offercards } from '../components/offercards';
import Sidebar from '../components/sidebar';
import {BeautyConsumer} from '../store/context';
class Offers extends Component {
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
            </Layout>
        )
    }
}
export default Offers;