import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import OffersHeader from '../components/offersheader';
import { Offercards } from '../components/offercards';
class Offers extends Component {
    render(){ 
        return(
            <Layout>
                <OffersHeader/>
                <Offercards/>
            </Layout>
        )
    }
}
export default Offers;