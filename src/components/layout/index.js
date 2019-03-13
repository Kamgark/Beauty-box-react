import React from 'react';
import Footer from '../footer/index';
const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Footer/>
        </div>
    )
};
export default Layout;