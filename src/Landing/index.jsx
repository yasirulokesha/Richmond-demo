import React,{Component} from 'react';
import Header from './Components/Header';
import Cover from './Components/Cover';
import Body from './Components/Body';
import Footer from './Components/Footer'

function Home() {
    return(
        <div>
            <Header/> 
            <Cover/>
            <Body/>
            <Footer/>
        </div>      
    )
}

export default Home;