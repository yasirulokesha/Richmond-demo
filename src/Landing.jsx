import React from 'react';
import './landing.css';
import {gsap} from 'gsap'

var tl = gsap.timeline({default:{duration:3}})

tl.from('.Heading', {opacity:0, y: 20});

function Landing() {
  return (
    <div className="Landing" >
      <div className="content-heading">
        <div className='Heading'>
          <h1>Welcome to<br></br>Richmond College</h1>
          <h1 className='Quoat'>Nisi Dominus Frustra</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
