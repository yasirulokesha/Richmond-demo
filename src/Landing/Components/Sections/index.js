import React from 'react';
import Data from '../../../Data/sections.json';

const openInNewTab = (url) => {
    window.open(url, '_self', 'noopener,noreferrer')
}

function Sections(){
    return(
        <div className="sections" >
            <div className="sec-content">
                {Data.map(post => {
                    return(
                        <ul key={post.Topic}>
                            <li className={post.style} onClick={() => openInNewTab(post.Bl)}>{post.Topic}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l1)}>{post.ca1}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l2)}>{post.ca2}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l3)}>{post.ca3}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l4)}>{post.ca4}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l5)}>{post.ca5}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l6)}>{post.ca6}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l7)}>{post.ca7}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l8)}>{post.ca8}</li>
                            <li className="sec" onClick={() => openInNewTab(post.l9)}>{post.ca9}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Sections;