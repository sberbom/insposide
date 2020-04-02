import React from 'react';
import '../styles/title.css'

function Title(props) {
        return(
            <div className="title-container">
                <h3 className="display-4 title">{props.title}</h3>
            </div>
        )
}

export default Title;