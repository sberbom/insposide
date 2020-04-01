import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../styles/card.css'

function SBCard(props) {
    return(
        <div className="SB-card card">
            <img className="study-photo" src={props.image} alt="study" />
            <div className="card-text-container">
                <div className="card-text">
                    {props.splitTitle ? 
                        <div>
                            <h5 className="split-title">{props.splitTitle}</h5>
                            <h5 className="none-split-title">{props.title}</h5>
                        </div>
                    :
                        <h5>{props.title}</h5>
                    }
                    <p>{props.description}</p>
                    <div className="card-fade-overlay"></div>
                </div>
                <Link className="btn btn-primary card-button" to={`/studier?studie=${props.title}`} >Les mer</Link>
            </div>
        </div>
    )
}

export default withRouter(SBCard);



