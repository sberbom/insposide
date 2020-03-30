import React from 'react';
import '../styles/header.css'

function Header(props) {
        return(
            <div>
                <div className="header-container" style={{backgroundImage: `url(${props.backgroundImage})`}}>
                    <iframe className="header-video" allowFullScreen="allowfullscreen" src={"https://www.youtube.com/embed/UxSOJVjO28o?autoplay=1"} title="headervideo"></iframe>
                </div>
                <h1 className="display-4 main-title">{props.text}</h1>
            </div>
        )
}

export default Header;