import {createUseStyles} from 'react-jss';

// color_blue = '#00C2FF';
// color_wt = '#FFF';

export const styling = createUseStyles({
    '@font-face': {
        fontFamily: 'Roboto-Bold',
        src: 'url(./Assests/Fonts/Roboto-Bold.ttf)'
    },
    '@font-face': {
        fontFamily: 'Roboto-Light',
        src: 'url(./Assests/Fonts/Roboto-Light.ttf)',
    },
    '@font-face': {
        fontFamily: 'Roboto-Medium',
        src: 'url(./Assests/Fonts/Roboto-Medium.ttf)',
    },
      
      '@font-face': {
        fontFamily: 'Roboto-Regular',
        src: 'url(./Assests/Fonts/Roboto-Regular.ttf)',
      },
      
      '@font-face': {
        fontFamily: 'Old-english',
        src: 'url(Assests/Fonts/old-english.ttf)',
      },
      
      '@font-face': {
        fontFamily: 'Calistoga',
        src: 'url(./Assests/Fonts/SecularOne-Regular.ttf)',
      },
      
      '@font-face': {
        fontFamily: 'LuckiestGuy',
        src: 'url(./Assests/Fonts/LuckiestGuy-Regular.ttf)',
      },
      
      '@font-face': {
        fontFamily: 'MonteCarlo-Regular',
        src: 'url(./Assests/Fonts/MonteCarlo-Regular.ttf)',
      },
      
      body : {
        margin: 0,
        overflowX: 'hidden',
        /* backgroundColor: #E5EBF0, */
      },
      
      html: {
        scrollBehavior: "smooth",
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
        '& logo':{
            content: 'url(./Landing/Components/Header/collegelogo.png)',
            display: 'block',
            height: 70,
            width: 70,
            marginLeft: '4vw',
            marginTop: 30,
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
      
    dropdown: {
        display: 'none',
        position: 'absolute',
        width: 'fit-content',
        marginLeft: -5,
        marginTop: 5,
        padding: 10,
        backgroundColor: '#FFF',
        color: '#1b1b1b',
        borderRadius: 8,
        animation: 'drop-down 300ms',
        height: 'fit-content',
        opacity: 100,
    },
      
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