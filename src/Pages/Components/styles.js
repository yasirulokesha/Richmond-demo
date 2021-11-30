import {createUseStyles} from 'react-jss';

export const pageStyles = createUseStyles({
    p_cont:{
        display: 'flex',
        width: '100vw',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    p_nav:{
        width: '25vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'rgb(137, 227, 255)'
    },
    contentBody:{
        width: '70vw',
        marginLeft: 'auto',
        marginRight: '25px',
        overflow: 'hidden',
        marginTop: '33vh'
    },
    menu:{
      marginTop: '40vh',
      textAlign: 'right',
      listStyle: 'none',
      marginRight: '15px',
      height: 'fit-content',
      "& li":{
          marginTop: 'auto',
          marginBottom: 20,
          "& a":{
              fontFamily: 'Roboto-Regular',
              fontSize: '12pt',
              color: 'rgb(0, 0, 0)',
              width: 'fit-content',
              margin: 8,
              textDecoration: 'none',
              "&:hover":{
                  fontFamily: 'Roboto-Medium'
              }
          }
      }
    },
    active:{
        fontFamily: 'Roboto-Medium'
    },
    p:{
        textAlign: 'justify',
        fontFamily: 'Roboto-Light',
        fontSize: '10pt'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: 0,
      paddingTop: '1vh',
      color: 'rgb(0, 0, 0)'
    }
  })
  