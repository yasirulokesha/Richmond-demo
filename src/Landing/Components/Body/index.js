import React from 'react';
import Datacontent from './content.json'

function Body(){

    return (
        <div className='content landing-content'>
            <h1 className='text'>All For Richmond None For Self</h1>
            <h1 className="topic">Our Mission</h1>            
            <p>{Datacontent.map((post)=>{return(<p>{post.Mission}</p>)})}</p>
            <br></br>
            <h1 className="topic">Our Vision</h1>
            <p>{Datacontent.map((post)=>{return(<p>{post.Vision}</p>)})}</p>        
        </div>
    )
}

export default Body;