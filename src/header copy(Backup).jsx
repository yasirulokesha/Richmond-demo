import React from 'react';
import {ImSearch} from '@react-icons/all-files/im/ImSearch';
import {IoIosNotifications} from '@react-icons/all-files/io/IoIosNotifications';

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
                <li className='id'>About
                <div className="dropdown">
                    <div className='dropdown-item' onClick={() => openInNewTab('/About/Overview') }>About Richmond</div>
                    <div className='dropdown-item' onClick={() => openInNewTab('/About/History') }>History of Richmond</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>Management
                <div className="dropdown">
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>School
                <div className="dropdown">
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>Academic
                <div className="dropdown">
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>Lover's Quarel
                <div className="dropdown">
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>Contact
                <div className="dropdown">
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                    <div className='dropdown-item'>About</div>
                </div>
                </li>
                <li>News & Articles</li>
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