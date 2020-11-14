import React, {useState, useEffect} from 'react';
import '../styles/info.css'

const Info = () => {

    const [isRegister, setIsRegister] = useState(false);

    useEffect(()=> {
        !isRegister && window.scrollTo(0,0)
        }
    )

    return(
        <div>
            <div className="header-container">
                <div className="header-image desktop" style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/NTNU.jpg?alt=media&token=05257554-bf64-4833-aa52-bf504431b480)`}}/>
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
                        Vi vil derfor at du svarer på elevundersøkelsen. Elevundersøkelsen er anonym. 
                        Etter du har svart på undersøkelsen kan du komme tilbake til denne siden og registrere det. 
                        Alle som registrerer seg med i trekningen av et midtbygavekort. </p>
                    {isRegister && 
                        <a  rel="noopener noreferrer" className="btn btn-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe4Gkq9soSkhWZxsntqwtBKhsSJ-m-qfaHYS5qDllqzIutCow/viewform?usp=sf_link">
                            Registrer at du har tatt elevundersøkelsen
                        </a>
                    }
                    <a  rel="noopener noreferrer" className="btn btn-primary" onClick={() => setIsRegister(true)}target="_blank" href="https://response.questback.com/realfagsrekruttering/jepskraavf">
                        Elevundersøkelsen
                    </a>
                </div>
            </div>
            <div className="digital-elevkveld-container">
                <h2>Digital elevkveld</h2>
                <p>
                    25. November skal vi ha digital elevkveld om studieteknikk med Olav Schewe. 
                    Å lykkes som elev og student handler ikke bare om å være smart. 
                    Faktisk mener psykologer nå at så mye som 70% av det vi lærer skyldes studieteknikk og motivasjon. 
                    Denne elevkvelden skal vi lære hvordan studenter og elever kan bli bedre til å lære ved hjelp av studieteknikk.  
                </p>
                <a  rel="noopener noreferrer" className="btn btn-primary" target="_blank" href="https://elevkveld.no">
                    Les mer på elevkveld.no
                </a>
            </div>
        </div>
    )
}

export default Info;