import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../styles/header.css'

class Header extends React.Component {

    goToR = () => {
        this.props.history.push(`/ressurser`) 
    }

    goToS = () => {
        this.props.history.push(`/spørsmål_og_svar`) 
    }

    render() {
        return(
            <div>
                <div className="header-container">
                    <div className="header-image" style={{backgroundImage: `url(${this.props.backgroundImage})`}}/>
                    <p className="lead lead-home big">ENT3R er ferdig for i år. Vi har hatt masse gøy er er veldig glad for at akkurat du har vært med på ENT3R!
                        Påmelding til neste skoleår kommer når skoleåret nærmer seg. Vi håper å se deg!
                    </p>
                    <p className="lead lead-home">Er du usikker på hva du ønsker å velge som høyere utdanning? Vi i ENT3R har samlet masse informasjon om
                        studiene på NTNU og tips til hvordan du kan velge høyere utdanning. Mentorene har laget videoer
                        og skrevet tekster du kan bruke for å lære mer om studiene!
                    </p>
                    <div className="heade-info-container">
                        <iframe className="header-video" allowFullScreen="allowfullscreen" src={"https://www.youtube.com/embed/aUFxiIip8XY"} title="headervideo"></iframe>
                        <div className="list-container card desktop">
                            <h5 onClick={this.goTo} className="list-title">Nyttige linker</h5>
                            <ul className="tip-list">
                                <li><Link to="/spørsmål_og_svar">ENT3Rs spørsmål og svar</Link></li>
                                <li><a href="https://utdanningstesten.velgriktig.no/" rel="noopener noreferrer" target="_blank">Utdanningstesten til Velgriktig</a></li>
                                <li><a href="https://velgriktig.no/" rel="noopener noreferrer" target="_blank">Velgriktig.no</a></li>
                                <li><a href="https://www.samordnaopptak.no/info/opptak/opptak-uhg/poenggrenser/poenggrenser-tidligere-ar/" rel="noopener noreferrer" target="_blank">Poenggrenser tidligere år</a></li>
                                <li><a href="https://www.samordnaopptak.no/info/soke/soke-uhg/index.html" rel="noopener noreferrer" target="_blank">Slik søker du samordna opptak</a></li>
                                <li><a href="https://www.samordnaopptak.no/info/" rel="noopener noreferrer" target="_blank">Samordna opptak</a></li>
                                <li><a href="https://utdanning.no/karakterkalkulator/#/" rel="noopener noreferrer" target="_blank">Karakterkalkulator</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="links-button-conatainer">
                        <div onClick={this.goToR} className="mobile btn btn-primary links-button">Nyttige linker</div>
                        <div onClick={this.goToS} className="mobile btn btn-primary links-button">Spørsmål og svar</div>
                    </div>
                </div>
                <h1 className="display-4 main-title">{this.props.text}</h1>
            </div>
        )
    }
}

export default withRouter(Header);