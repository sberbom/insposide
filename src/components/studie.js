import React from 'react';
import '../styles/studie.css'

const Studie = React.forwardRef((props, ref) => (
    <div className="studie-container" ref={ref}>
        {props.splitName ?
        <div>
            <h2 className="study-title-split">{props.name}</h2>
            <h2 className="study-title-split-mobile">{props.splitName}</h2>
        </div>
        :
        <h2 className="study-title">{props.name}</h2>
        }
        {props.image && <img className="study-header" src={props.image} alt="study" />}
        {props.video && <iframe className="study-video" allowFullScreen="allowfullscreen" src={props.video} title={props.name}></iframe>}
        {props.p1 && <p>{props.p1}</p>}
        {props.p2 && <p>{props.p2}</p>}
        {props.p3 && <p>{props.p3}</p>}
        <a href={props.NTNU} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Les mer på NTNU.no</a>
    </div>
    )
);
export default Studie;