import React from 'react';
import '../styles/header.css'

function Header(props) {
        return(
            <div>
                <div className="header-container" style={{backgroundImage: `url(${props.backgroundImage})`}}>
                    <h1 className="display-4 main-title">{props.text}</h1>         
                </div>
            </div>
        )
}

export default Header;