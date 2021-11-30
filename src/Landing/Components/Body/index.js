import React from 'react';
import Datacontent from './content.json';
import {styling} from '../../../styles';

function Body(){
    let style = styling();
    return (
        <div className={`${style.content} ${style.landingContent}`} >
            <h1 className={style.text}>All For Richmond None For Self</h1>
            <h1 className={style.topic}>Our Mission</h1>            
            <p>{Datacontent.map((post)=>{return(<p>{post.Mission}</p>)})}</p>
            <br></br>
            <h1 className={style.topic}>Our Vision</h1>
            <p>{Datacontent.map((post)=>{return(<p>{post.Vision}</p>)})}</p>        
        </div>
    )
}

export default Body;