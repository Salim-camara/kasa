import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Sheet = () => {
    const location = useLocation();
    const data = location

    console.log('l8 ', data)
    return (
        <div>
            <div>
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default Sheet;