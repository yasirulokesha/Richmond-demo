import React, {useState} from 'react';
import {ImSearch} from '@react-icons/all-files/im/ImSearch';
import {IoIosNotifications} from '@react-icons/all-files/io/IoIosNotifications';
import Data from './Data/sections.json';

const open = (status) => {
    document.getElementById('nav').classList.add('active')
    document.getElementById('body').classList.add('no-scroll')
}

const close = (status) => {
    document.getElementById('nav').classList.remove('active')
    document.getElementById('body').classList.remove('no-scroll')
}

const openInNewTab = (url) => {
    window.open(url, '_self', 'noopener,noreferrer')
}

function Header(){

    const [indicator, value] = useState(0);


    const navigate = ()=>{
        value(value)
    } 

    return(
        <header>
            <span className='logo'></span>
            <ul id='nav'>
                <div className="top-nav" onClick={() => close('active')}>
                    <h1 className='nav-t'>Richmond College</h1>
                    <div className='mob-nav-b-close'>
                        <div className="close-it"></div>
                        <div className="close-it"></div>
                    </div>
                </div>
                <li onClick={() => openInNewTab('/')}>Home</li>
                {Data.map(post => {
                    return(
                        <li key={post.Topic}>
                            <div onClick={navigate}>{post.Topic}</div>
                            <div className='dropdown'>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l1)}>{post.ca1}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l2)}>{post.ca2}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l3)}>{post.ca3}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l4)}>{post.ca4}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l5)}>{post.ca5}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l6)}>{post.ca6}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l7)}>{post.ca7}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l8)}>{post.ca8}</div>
                                <div className='dropdown-item' onClick={() => openInNewTab(post.l9)}>{post.ca9}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className='mob-nav-b' id='opn-b' onClick={() => open('active')}>
                <div className="hum-it"></div>
                <div className="hum-it"></div>
                <div className="hum-it"></div>
            </div>
            <div className="actions">
                {/* <input className='search-input' type='text'></input> */}
                <div className='action search'><ImSearch/></div>
                <span className='action' href='#'><IoIosNotifications /></span>
            </div>
        </header>
    )
}


export default Header;