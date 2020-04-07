import React from 'react';
import Title from './title.js'
import { Link, withRouter } from 'react-router-dom'
import '../styles/survey.css'

class Survey extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            visited: false,
        }
    }

    componentDidMount() {
        this.getVisited()
    }

    setVisited = () => {
        window.localStorage.setItem('velgriktig', true);
        this.setState({visited: true})
    }

    hideVisited = () => {
        window.localStorage.setItem('velgriktig', false);
        this.setState({visited: false})
    }

    getVisited = () => {
        if(window.localStorage.getItem('velgriktig') === "true"){
            this.setState({visited: true})
        }
    }

    render() {
        return(
            <div className="suvery-container">
                <Title title=" Vinn gavekort!"/>
                <p className="lead">Det finnes mange steder å finne informasjon om høyere utdanning. Her har vi samlet noen 
                    lure linker som du kan bruke når du søker etter informasjon. Vi syntes spesielt 
                    utdanningstesten til Velgriktig.no er veldig fin! Hvis du går inn på Velgriktig.no sin 
                    utdanningstest via vår link kan du komme tilbake til denne siden og registrere at 
                    du har tatt utdanningstesten. Da er du med i trekningen av to gavekort på 500kr!</p>
                <div className="list-container card card-wide">
                    <ul className="tip-list">
                        <li><Link to="/spørsmål_og_svar">ENT3Rs spørsmål og svar</Link></li>
                        <li><a onClick={this.setVisited} href="https://utdanningstesten.velgriktig.no/" rel="noopener noreferrer" target="_blank">Utdanningstesten til Velgriktig</a></li>
                        <li><a href="https://velgriktig.no/" rel="noopener noreferrer" target="_blank">Velgriktig.no</a></li>
                        <li><a href="https://www.samordnaopptak.no/info/opptak/opptak-uhg/poenggrenser/poenggrenser-tidligere-ar/" rel="noopener noreferrer" target="_blank">Poenggrenser tidligere år</a></li>
                        <li><a href="https://www.samordnaopptak.no/info/soke/soke-uhg/index.html" rel="noopener noreferrer" target="_blank">Slik søker du samordna opptak</a></li>
                        <li><a href="https://www.samordnaopptak.no/info/" rel="noopener noreferrer" target="_blank">Samordna opptak</a></li>
                        <li><a href="https://utdanning.no/karakterkalkulator/#/" rel="noopener noreferrer" target="_blank">Karakterkalkulator</a></li>
                    </ul>
                    {this.state.visited &&
                    <div className="form-container"> 
                        <div onClick={this.hideVisited} className="btn btn-primary survey-btn">Skjul undersøkelse</div>
                        <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLScybkgcZ56nTpoLJ1BUHXp2fF96Y929tBso9wCA3Np1AXxg4Q/viewform?embedded=true" title="response"  frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>    
                        }
                </div>
            </div>
        )
    }
}

export default withRouter(Survey);