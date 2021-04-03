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
        {props.p1 && <p>
            {props.egetOpptak ?
            <ul className="infoBox-list">
                <li>
                    {props.name} har eget opptak se 
                    <a href={props.NTNU} target="_blank"  rel="noopener noreferrer" className="text-link"> NTNU.no</a>
                </li>
            </ul>
            :
            <ul className="infoBox-list">
                <li>Fagkrav: {props.fagkrav}</li>
                <li>Karaktersnitt 2020 ordinær: {props.snittOrd}</li>
                <li>Karaktersnitt 2020 førstegang: {props.snittFør}</li>
                <li>Mest relevante VGS fag: {props.VGSfag}</li>
            </ul>
            }
            {props.p1}</p>}
        {props.p2 && <p>{props.p2}</p>}
        {props.p3 && <p>{props.p3}</p>}
        {props.p4 && <p>{props.p4}</p>}
        {props.p5 && <p>{props.p5}</p>}
        {props.p6 && <p>{props.p6}</p>}
        {props.p7 && <p>{props.p7}</p>}
        {props.p8 && <p>{props.p8}</p>}
        <a href={props.NTNU} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Les mer på NTNU.no</a>
    </div>
    )
);
export default Studie;