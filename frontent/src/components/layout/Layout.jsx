import React from 'react'
import Footer from '../footer/Footer';
import Routers from '../../routers/Routers';
import Header from '../header/Header';

const Layout = () => {
  return( 
    <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </>
  );
};

export default Layout;