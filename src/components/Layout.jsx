import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

function Layout(props) {
    return(
        <div className="layout">
            {/* Pasam props-urile mai departa catre header. */}
            <Header />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;