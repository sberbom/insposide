import React from 'react';
import {Button} from 'react-bootstrap'
import '../styles/info.css'

class Info extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0)
    }

    
    render(){
        return(
            <div>
                <div className="header-container">
                    <div className="header-image" style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/NTNU.jpg?alt=media&token=05257554-bf64-4833-aa52-bf504431b480)`}}/>
                    <h1 className="display-4 main-title">{'Hva skjer i ENT3R Trondheim?'}</h1>
                </div>
                <div className="info-video-container">
                    <iframe className="info-video" title="info-video" src="https://www.youtube.com/embed/5W7lGo9UISc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="info-container">
                    <div className="tentamenstimer-container">
                        <h2>Tentamenstimer</h2>
                        <p>I uke 48, 49 og 50 skal vi ha digitale tentamenstimer. 
                            I timene kan du komme å få hjelp med lekser, til å øve til prøve, eller andre ting du måtte lure på. 
                            Timene vil være i de digitale klasserommene våre, mandager til torsdager fra 16:00 til 18:00. 
                            Du kan komme på så mange timer du vil. 
                            Link til klasserommene blir sendt ut til alle påmeldte samme dag som timen.  
                        </p>
                        <a  rel="noopener noreferrer" className="btn btn-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSem7vUhpVtG9-foFIEjp-6eRLx5_86LfNwvxkeJZVRf8c-hXQ/viewform?usp=sf_link">
                            Påmelding Digitale Tentamenstimer
                        </a>
                    </div>
                    <div className="elevundersøkelsen-container">
                        <h2>Elevundersøkelsen</h2>
                        <p>Vi i ENT3R vil gjerne bli enda bedre! For å få til det må vi vite hvordan du har det og hva du synes om ENT3R. 
                            Vi vil derfor at du svarer på elevundersøkelsen. Elevundersøkelsen er anonym. </p>
                        <Button>
                            Elevundersøkelsen
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;