import React from 'react';
import Header from './Components/Header';
import Cover from './Components/Cover';
import Body from './Components/Body';
import Sections from './Components/Sections';
import Footer from './Components/Footer'

function Home() {
    return(
        <div>
            <Header/> 
            <Cover/>
            <Body/>
            <Sections/>
            <Footer/>
        </div>      
    )
}

export default Home;