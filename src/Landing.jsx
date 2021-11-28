// import React from 'react';
// import {gsap} from 'gsap';
// import {makeStyles} from '@mui/styles';
// import landing from './Assests/Images/landing.webp';

// var tl = gsap.timeline({default:{duration:3}});
// tl.from('.Heading', {opacity:0, y: 20});

// const useStyles = makeStyles({
//   Landing:{
//     width: '100vw',
//     height: '100vh',
//     backgroundImage: `url(${landing})`,
//     backgroundAttachment: 'fixed',
//     backgroundSize: 'cover',
//     backgroundClip: 'initial',
//     overflowX: 'hidden',
//     display: 'grid',
//     textAlign: 'center',
//     "&::after": {
//       display: 'block',
//       position: 'absolute',
//       zIndex: 5,
//       content: "''",
//       width: '100vw',
//       height: '100vh',
//       background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.589) 0%, rgba(0, 0, 0, 0) 50%)',
//       backgroundColor: 'rgba(0, 0, 0, 0.164)'
//     }
//   },
//   Heading: {
//     position: 'absolute',
//     zIndex: 7,
//     fontSize: '4vh',
//     fontWeight: 'bold',
//     color: '#FFF',
//     width: '100vw', 
//     fontFamily: 'Roboto-Bold',
//   },
//   contentheading: {
//     marginTop: 'auto',
//     marginBottom: '70vh'
//   },
//   Quoat: {
//     marginTop: '-6vh',
//     fontSize: '5vh',
//     fontWeight: 100,
//     fontFamily: 'Old-english'
//   }
// })



// function Landing() {
//   let styles = useStyles();
//   return (
//     <div className={styles.Landing} >
//       <div className={styles.contentheading}>
//         <div className={styles.Heading}>
//           <h1>Welcome to<br></br>Richmond College</h1>
//           <h1 className={styles.Quoat}>Nisi Dominus Frustra</h1>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Landing;
