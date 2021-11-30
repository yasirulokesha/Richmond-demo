import React from 'react';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill';
import { BsArrowBarRight } from '@react-icons/all-files/bs/BsArrowBarRight';
import {styling} from '../../../styles';

const openInNewTab = (url) => {
    window.open(url, '_self', 'noopener,noreferrer')
}

function Footer(){
    let classes = styling();
    return(
        <div>
            <div className={classes.footer}>
                <div className={classes.content}>
                    <div className={classes.left}>
                        <div className={classes.socials}>
                            <div onClick={() => openInNewTab('#')}><AiFillYoutube/></div>
                            <div onClick={() => openInNewTab('#')}><FaFacebook/></div>
                            <div onClick={() => openInNewTab('#')}><AiOutlineTwitter/></div>
                            <div onClick={() => openInNewTab('#')}><RiInstagramFill/></div>
                        </div>
                        <p>samplemail@richmond.lk</p>
                    </div>
                    <div className={classes.right}>
                        <h1>Subscribe</h1>
                        <p>Subscribe newslatter to instant updates.</p>
                        <form method='post'>
                            <input type='email' title='mail' placeholder='sample@mail.com'></input>
                            <div className={classes.button}><span><BsArrowBarRight/></span></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${classes.copyright} ${classes.content}`}>Copyright 2021 | Richmond College(Galle) | Produced by a College Student</div>
            <div className={classes.endLine}></div>
        </div>
    )
}

export default Footer;