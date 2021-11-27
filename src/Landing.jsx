import React from 'react';
import './landing.css';
import {gsap} from 'gsap';
import {makeStyles} from '@material-ui/core';
import landing from './Assests/Images/landing.webp';

var tl = gsap.timeline({default:{duration:3}})

const useStyles = makeStyles(theme=>({
  Landing:{
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${landing})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundClip: 'initial',
    overflowX: 'hidden',
    display: 'grid',
    textAlign: 'center',
    '&:after':{
      display: 'block',
      position: 'absolute',
      zIndex: 5,
      content: '',
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.589) 0%, rgba(0, 0, 0, 0) 50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.164)'
    }
  }
}))

tl.from('.Heading', {opacity:0, y: 20});

function Landing() {
  let styles = useStyles();
  return (
    <div className={styles.Landing} >
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
