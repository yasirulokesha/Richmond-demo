import {createUseStyles} from 'react-jss';
import logo from './Landing/Components/Header/collegelogo.png'

// color_blue = '#00C2FF';
// color_wt = '#FFF';

export const styling = createUseStyles({

  '@global':{
    body: {
      margin: '0px',
      overflowX: 'hidden',
    },
    
    html: {
      scrollBehavior: 'smooth'
    }
  },

    content: {
        maxWidth: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        '& p':{
            textAlign: 'justify',
            width: '100%',
        }
      },
      
      header: {
        position: 'absolute',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 0,
        paddingTop: '1vh',
        '&:after':{
            height: 10,
            width: '100vw',
            display: 'block',
            content: "''",
            backgroundColor: '#00C2FF',
            position: 'absolute',
            marginTop: '-1vh',
        },
        
        '& ul':{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            color: 'rgb(255, 255, 255)',
            '& li':{
                textAlign: 'center',
                display: 'block',
                width: 'fit-content',
                margin: 30,
                fontWeight: 500,
                height: 'fit-content',
                padding: 5,
                "& :hover": {
                    cursor: 'pointer',
                    color: '#00C2FF',
                },
                "& :hover .dropdown": {
                    display: 'block',
                },
            }
        },

      },

      logo:{
        background: ['url({logo})', 'no-repeat', 'top'],
        content: 'url({logo})',
        display: 'block',
        height: 70,
        width: 70,
        marginLeft: '4vw',
        marginTop: 30,
    },
      
      actions: {
        marginTop: 30,
        marginRight: '5vw',
        display: 'flex',
      },
      
      action: {
        width: 'fit-content',
        margin: '20pt',
        color: '#FFF',
        fontSize: '20pt',
      },
    
      searchInput: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '10vw',
        height: '2vh',
        zIndex: 60,
        '&:hover':{
            color: '#00C2FF',
        }
      },

      landingContent: {
        width: '50%',
        marginTop: '20vh',
        marginBottom: '15vh',
        '& p':{
            textAlign: 'center',
        }
      },
      
      text: {
        display: 'grid',
        marginBottom: '15vh',
        fontFamily: 'MonteCarlo-Regular',
        '&:after':{
            display: 'block',
            content: ",,",
            fontFamily: 'Calistoga',
            fontSize: '50pt',
            color: '#00C2FF',
            transform: 'rotate(180deg)'
        },
        '&:before':{
            marginBottom: -50,
            content: "''",
            fontFamily: 'Calistoga',
            fontSize: '50pt',
            color: '#00C2FF',
        }
      },

      topic: {
        fontFamily: 'Roboto-Bold',
        fontSize: '20pt',
      },
      
      sections: {
        display: 'flex',
        backgroundColor: '#C1F0FF',
        height: 'fit-content',
        padding: '3vw',
        '&ul':{
            textAlign: 'left',
            listStyle: 'none',
            marginRight: 0,
            '& li':{
                display: 'grid',
                width: 150,
                margin: 5,
                '& li:first-child':{
                    fontFamily: 'Roboto-Medium',
                    fontSize: '15pt',
                }
            }
        }
      },
      
      secContent: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      
    sec:{
        '&:hover':{
            cursor: 'pointer',
            color: '#ff7474',
        }
    },

    footer: {
        marginTop: 45,
        height: 'fit-content',
        marginBottom: 250,
        paddingBottom: 77,
        '& p':{
            fontSize: '12pt',
        },
        '&:after':{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            height: 1,
            backgroundColor: '#C4C4C4',
            width: '60%',
            content: "''",
            transform: 'translateY(275px)',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
      },
      
      left: {
        listStyle: 'none',
        float: 'left',
        zIndex: 5,
        position: 'absolute',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        '& p':{
            marginTop: -9,
        }
      },
      
      socials: {
        display: 'flex',
        marginLeft: -6,
        '& div':{
            fontSize: '25pt',
            margin: 5,
            color: '#00C2FF',    
        }
      },
      
    
      right: {
        textAlign: 'left',
        float: 'right',
        width: '50%',
        marginBottom: 50,
        '& h1': {
            fontSize: '15pt',
            fontFamily: 'Roboto-medium',
            marginBottom: -5,
        },
        '& p': {
            marginBottom: -2,
            marginBottom: 3,
        },
        '& form': {
            display: 'inline-flex',
            flexDirection: 'row',
            "& input": {
                paddingLeft: 20,
                width: '60%',
                backgroundColor: '#E5E5E5',
                height: 37,
                border: 'none',
                borderRadius: '9px 0px 0px 9px',
            },
            "& input::-webkit-input-placeholder" : {
                color: '#999',
                fontWeight: 'normal',
                fontStyle: 'italic',
            },
            "& input:-ms-input-placeholder" : {
                color:"#999",
                fontWeight: 'normal',
            },   
             
        },
        "& button" : {
            paddingTop: 6,
            position: 'absolute',
            border: 'none',
            cursor: 'pointer',
            width: 39,
            height: 39,
            fontSize: 24,
            color: '#FFF',
            background: '#00C2FF',
            borderRadius: '0px 9px 9px 0px',
        },   
    },

    button: {
        paddingTop: 6,
        position: 'absolute',
        border: 'none',
        cursor: 'pointer',
        width: 39,
        height: 39,
        fontSize: 24,
        color: '#FFF',
        background: '#00C2FF',
        borderRadius: '0px 9px 9px 0px',
    },  
      
    copyright: {
        fontSize: '10pt',
        fontFamily: 'Roboto-light',
        marginBottom: 40,
    },
      
    endLine: {
        display: 'block',
        content: "''",
        height: 10,
        width: '100vw',
        backgroundColor: '#00C2FF',
        position: 'absolute',
    },
      
    navT: {
        display: 'none',
    },
      
    // dropdown: {
    //     display: 'none',
    //     position: 'absolute',
    //     width: 'fit-content',
    //     marginLeft: -5,
    //     marginTop: 5,
    //     padding: 10,
    //     backgroundColor: '#FFF',
    //     color: '#1b1b1b',
    //     borderRadius: 8,
    //     animation: 'drop-down 300ms',
    //     height: 'fit-content',
    //     opacity: 100,
    // },
      
    dropdownItem: {
        display: 'block',
        width: 120,
        margin: 5,
        textAlign: 'left',
        animation: 'drop-down-i 250ms',
        opacity: 100,
        "& :hover":{
            color: '#00C2FF',   
        }
    },
      
      
      "::-webkit-scrollbar" : {
        width: 5,
      },
      "::-webkit-scrollbar-track" : {    
        background: '#f1f1f1', 
      },
      "::-webkit-scrollbar-thumb" : {
        background: '#C1F0FF', 
        borderRadius: 10,
        "& :hover" : {
            background: '#00C2FF', 
        }, 
      },
      
      /*Device Spport*/
      "@media only screen and (maxWidth: 1275px)": {
        navT: {
          display: 'block',
        },
        footer: {
          marginBottom: 250,
          paddingBottom: 77,
          "& :after": {
            width: "100%",
          },
          "& content": {
            width: '100%',
            "& :after": {
                transform: "translateY(230px)",
            },
          },  
        },
        content: {
          width: "90%",
        },
        header:{
            "& logo": {
            marginTop: '4vh',
            "& ul": {
                display: 'none',
                "& li": {
                    marginLeft: 0,
                },
            },
        },
        actions: {
            display: 'none',
        },
        sections:{ 
            "& ul": {
          width: '100%',
          marginLeft: 0,
        },
        secContent: {
          marginLeft: 0,
          gridTemplateColumns: 'auto',
        },
        left: {
          float: 'none',
          height: 'fit-content',
          marginBottom: 50,
          width: '90%',
        },
        right: {
          position: 'absolute',
          float: 'none',
          marginTop: 100,
          width: "90%",
        },
        topNav: {
          display: 'inline-flex',
          flexDirection: 'row',
          width: '100vw',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        mobNavBClose: {
          display: 'flex',
          float: 'right',
          marginLeft: 'auto',
          marginRight: 55,
        },
        mobNavB: {
          display: 'block',
          marginTop: '5.5vh',
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginRight: 20,
        },
        humIt: {
          display: 'block',
          width: 35,
          height: 4,
          borderRadius: 20,
          content: "''",
          position: 'relative',
          backgroundColor: '#FFF',
          margin: 5,
        },
        active: {
          display: 'block',
          position: 'fixed',
          zIndex: 60,
          marginTop: '-1vh',
          width: '100%',
          height: '105vh',
          overflow: 'scroll',
          backgroundColor: '#1b1b1b',
          marginBottom: 0,
          overflowY: 'hidden' ,
          animation: 'mob-nav 500ms',
        },
        closeIt: {
          display: 'block',
          width: 35,
          height: 4,
          borderRadius: 20,
          content: "''",
          position: 'relative',
          backgroundColor: '#FFF',
          margin: 5,
        },
        mobNavBClose: {
          marginTop: 'auto',
          marginBottom: 'auto',
          zIndex: 60,
          '& close-it:nth-child(1)': {
            transform: 'rotate(45deg)',
          },
          '& close-it:nth-child(2)': {
            transform: 'rotate(-45deg)',
            position: 'absolute',
          },
        },
      
        noScroll: {
          overflowY: 'hidden',
          overflowX: 'hidden',
        },
      
        hide: {
          display: 'none',
          backgroundColor: '#ff7474',
        },
        dropdown: {
          animation: 'drop-down-i 500ms',
        },
      },
      
    '@global': {
      '@keyframes mob-nav': {
        from: {
          transform: "translateX(100vw)",
        },
        to: {
          transform:' translateX(0vw)',
        },
      },
      
      '@keyframes drop-down' : {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 100,
        },
      },
      
      '@keyframes drop-down-i' : {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 100,
        },
      },}
    }
}});

// .content{
//   max-width: 60%;
//   margin-left: auto;
//   margin-right: auto;
//   text-align: center;
// }

// .content p{
//   text-align: justify;
//   width: 100%;
// }

// header{
//   position: absolute;
//   z-index: 50;
//   display: flex;
//   flex-direction: row;
//   width: 100vw;
//   margin-top: auto;
//   margin-bottom: auto;
//   margin-right: 0;
//   padding-top: 1vh;
// }

// header::after{
//   height: 10px;
//   width: 100vw;
//   display: block;
//   content: '';
//   background-color: #00C2FF;
//   position: absolute;
//   margin-top: -1vh;
// }

// header .logo{
//   content: url(./Landing/Components/Header/collegelogo.png);
//   display: block;
//   height: 70px;
//   width: 70px;
//   margin-left: 4vw;
//   margin-top: 30px;
// }

// header ul{
//   margin-left: auto;
//   margin-right: auto;
//   display: flex;
//   color: rgb(255, 255, 255);
// }

// header ul li{
//   text-align: center;
//   display: block;
//   width: fit-content;
//   margin: 30px;
//   font-weight: 500;
//   height: fit-content;
//   padding: 5px;
// }

// .actions{
//   margin-top: 30px;
//   margin-right: 5vw;
//   display: flex;
// }

// .action{
//   width: fit-content;
//   margin: 20pt;
//   color: #FFF;
//   font-size: 20pt;
// }

// .search-input{
//   margin-top: auto;
//   margin-bottom: auto;
//   width: 10vw;
//   height: 2vh;
//   z-index: 60;
// }

// .action:hover{
//   color: #00C2FF;
// }

// .landing-content{
//   width: 50%;
//   margin-top: 20vh;
//   margin-bottom: 15vh;
// }

// .landing-content p{
//   text-align: center;
// }

// .text{
//   display: grid;
//   margin-bottom: 15vh;
//   font-family: 'MonteCarlo-Regular';
// }

// .text::after{
//   display: block;
//   content: ",,";
//   font-family: 'Calistoga';
//   font-size: 50pt;
//   color: #00C2FF;
//   transform: rotate(180deg)
// }

// .text::before{
//   margin-bottom: -50px;
//   content: "''";
//   font-family: 'Calistoga';
//   font-size: 50pt;
//   color: #00C2FF;
// }

// .topic{
//   font-family: 'Roboto-Bold';
//   font-size: 20pt;
// }

// .sections{
//   display: flex;
//   background-color: #C1F0FF;
//   height: fit-content;
//   padding: 3vw;
// }

// .sec-content{
//   display: grid;
//   grid-template-columns: auto auto auto auto;
//   margin-left: auto;
//   margin-right: auto;
// }

// .sections ul li{
//   display: grid;
//   width: 150px;
//   margin: 5px;
// }

// .sec:hover{
//   cursor: pointer;
//   color: #ff7474;
// }

// .sections ul{
//   text-align: left;
//   list-style: none;
//   margin-right: 0px;
// }

// .sections ul li:nth-child(1){
//   font-family: 'Roboto-Medium';
//   font-size: 15pt;
// }

// .footer{
//   margin-top: 45px;
//   height: fit-content;
//   margin-bottom: 250px;
//   padding-bottom: 77px;
// }

// .left{
//   list-style: none;
//   float: left;
//   z-index: 5;
//   position: absolute;
//   width: 50%;
//   display: flex;
//   flex-direction: column;
// }

// .socials{
//   display: flex;
//   margin-left: -6px;
// }

// .socials div{
//   font-size: 25pt;
//   margin: 5px;
//   color: #00C2FF;
// }

// .left p{
//   margin-top: -9px;
// }

// .footer p{
//   font-size: 12pt;
// }

// .footer::after{
//   position: relative;
//   z-index: 5;
//   display: block;
//   height: 1px;
//   background-color: #C4C4C4;
//   width: 60%;
//   content: '';
//   transform: translateY(275px);
//   margin-left: auto;
//   margin-right: auto;
// }

// .right{
//   text-align: left;
//   float: right;
//   width: 50%;
//   margin-bottom: 50px;
// }

// .right h1{
//   font-size: 15pt;
//   font-family: 'Roboto-medium';
//   margin-bottom: -5px;
// }

// .right p{
//   margin-bottom: -2px;
//   margin-bottom: 3px;
// }

// .rigth form{
//   display: inline-flex;
//   flex-direction: row;
// }

// .right input{
//   padding-left: 20px;
//   width: 60%;
//   background-color: #E5E5E5;
//   height: 37px;
//   border: none;
//   border-radius: 9px 0px 0px 9px;
// }

// .right form input::-webkit-input-placeholder {
//   color: #999;
//   font-weight: normal;
//   font-style: italic;
// }

// .right form input:-moz-placeholder {
//    color: #999;
//    font-weight: normal;
// }

// .right form input:-ms-input-placeholder {
//    color: #999;
//    font-weight: normal;
// }   

// .right form .button {
//   padding-top: 6px;
//   position: absolute;
//   border: none;
//   cursor: pointer;
//   width: 39px;
//   height: 39px;
//   font-size: 24px;
//   color: #fff;
//   background: #00C2FF;
//   border-radius: 0px 9px 9px 0px;
// }  

// .copyright{
//   font-size: 10pt;
//   font-family: 'Roboto-light';
//   margin-bottom: 40px;
// }

// .end-line{
//   display: block;
//   content: '';
//   height: 10px;
//   width: 100vw;
//   background-color: #00C2FF;
//   position: absolute;
// }

// .nav-t{
//   display: none;
// }

// .dropdown{
//   display: none;
//   position: absolute;
//   width: fit-content;
//   margin-left: -5px;
//   margin-top: 5px;
//   padding: 10px;
//   background-color: #FFF;
//   color: #1b1b1b;
//   border-radius: 8px;
//   animation: drop-down 300ms;
//   height: fit-content;
//   opacity: 100;
// }

// .dropdown-item{
//   display: block;
//   width: 120px;
//   margin: 5px;
//   text-align: left;
//   animation: drop-down-i 250ms;
//   opacity: 100;
// }

// .dropdown-item:hover{
//   color: #00C2FF;
// }

// header ul li:hover{
//   cursor: pointer;
//   color: #00C2FF;
// }

// header ul li:hover .dropdown{
//   display: block;
// }

// ::-webkit-scrollbar {
//   width: 5px;
// }
// ::-webkit-scrollbar-track {    
//   background: #f1f1f1; 
// }
// ::-webkit-scrollbar-thumb {
//   background: #C1F0FF; 
//   border-radius:10px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: #00C2FF; 
// } 


/*Device Spport*/
//  @media only screen and (max-width: 1275px) {
//   .nav-t{
//     display: block;
//   }
//   .footer{
//     margin-bottom: 250px;
//     padding-bottom: 77px;
//   }
//   .footer::after{
//     width: 100%;
//   }
//   .footer .content{
//     width: 100%;
//   }  
//   .content{
//     width: 90%;
//   }
//   header .logo{
//       margin-top: 4vh;
//   }
//   header ul{
//       display: none;
//   }
//   header ul li{
//     margin-left: 0px;
//   }
//   .actions{
//       display: none;
//   }
//   .content{
//     max-width: 90%;
//   }
//   .sections ul{
//     width: 100%;
//     margin-left: 0;
//   }
//   .sec-content{
//     margin-left: 0px;
//     grid-template-columns: auto;
//   }
//   .left{
//     float: none;
//     height: fit-content;
//     margin-bottom: 50px;
//     width: 90%;
//   }
//   .right{
//     position: absolute;
//     float: none;
//     margin-top: 100px;
//     width: 90%;
//   }
//   .footer .content::after{
//     transform: translateY(230px);
//   }
//   .footer{
//     margin-bottom: 250px;
//   }
//   .top-nav{
//     display: inline-flex;
//     flex-direction: row;
//     width: 100vw;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   .mob-nav-b-close{
//     display: flex;
//     float: right;
//     margin-left: auto;
//     margin-right: 55px;
//   }
//   .mob-nav-b{
//     display: block;
//     margin-top: 5.5vh;
//     margin-bottom: auto;
//     margin-left: auto;
//     margin-right: 20px;
//   }
  
//   .hum-it{
//     display: block;
//     width: 35px;
//     height: 4px;
//     border-radius: 20px;
//     content: '';
//     position: relative;
//     background-color: #FFF;
//     margin: 5px;
//   }
  
//   .active{
//     display: block;
//     position: fixed;
//     z-index: 60;
//     margin-top: -1vh;
//     width: 100%;
//     height: 105vh;
//     overflow: scroll;
//     background-color: #1b1b1b;
//     margin-bottom: 0px;
//     overflow-y: hidden ;
//     animation: mob-nav 500ms;
//   }
  
  
//   .close-it{
//     display: block;
//     width: 35px;
//     height: 4px;
//     border-radius: 20px;
//     content: '';
//     position: relative;
//     background-color: #FFF;
//     margin: 5px;
//   }
  
//   .mob-nav-b-close{
//     margin-top: auto;
//     margin-bottom: auto;
//     z-index: 60;
//   }
  
//   .mob-nav-b-close .close-it:nth-child(1){
//     transform: rotate(45deg);
//   }
//   .mob-nav-b-close .close-it:nth-child(2){
//     transform: rotate(-45deg);
//     position: absolute;
//   }

//   .no-scroll{
//     overflow-y: hidden;
//     overflow-x: hidden;
//   }

//   .hide{
//     display: none;
//     background-color: #ff7474;
//   }
//   .dropdown{
//     animation: drop-down-i 500ms;
//   }
// }


// @keyframes mob-nav{
//   0%{
//     transform: translateX(100vw);
//   }
//   100%{
//     transform: translateX(0vw);
//   }
// }

// @keyframes drop-down {
//   0%{
//     opacity: 0;
//   }
//   100%{
//     opacity: 100;
//   }
// }

// @keyframes drop-down-i {
//   0%{
//     opacity: 0;
//   }
//   100%{
//     opacity: 100;
//   }
// } 