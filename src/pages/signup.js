import React, {Component} from 'react';
import '../style.css';
import Layout from '../components/layout';
import Header from '../components/header';
import SignUpForm from '../components/signupform';
class Signup extends Component {
    render(){
        return(
            <Layout>
                <Header/>
                <SignUpForm/>
            </Layout>
        )
    }
}
export default Signup;