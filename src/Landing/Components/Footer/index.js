import React from 'react';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill';
import { BsArrowBarRight } from '@react-icons/all-files/bs/BsArrowBarRight';

const openInNewTab = (url) => {
    window.open(url, '_self', 'noopener,noreferrer')
}

function Footer(){
    return(
        <div>
            <div className='footer'>
                <div className="content">
                    <div className="left">
                        <div className='socials'>
                            <div onClick={() => openInNewTab('#')}><AiFillYoutube/></div>
                            <div onClick={() => openInNewTab('#')}><FaFacebook/></div>
                            <div onClick={() => openInNewTab('#')}><AiOutlineTwitter/></div>
                            <div onClick={() => openInNewTab('#')}><RiInstagramFill/></div>
                        </div>
                        <p>samplemail@richmond.lk</p>
                    </div>
                    <div className="right">
                        <h1>Subscribe</h1>
                        <p>Subscribe newslatter to instant updates.</p>
                        <form method='post'>
                            <input type='email' title='mail' placeholder='sample@mail.com'></input>
                            <div className='button'><span><BsArrowBarRight/></span></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright content">Copyright 2021 | Richmond College(Galle) | Produced by a College Student</div>
            <div className="end-line"></div>
        </div>
    )
}

export default Footer;