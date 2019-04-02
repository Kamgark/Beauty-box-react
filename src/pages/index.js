import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import Header from '../components/header';
import SignInForm from '../components/signinform';
class Signin extends Component {
    render(){
        return(
            <Layout>
                <Header/>
                <SignInForm/>
            </Layout>
        )
    }
} 
export default Signin;