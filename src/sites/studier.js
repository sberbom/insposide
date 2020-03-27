import React from 'react';
import '../styles/studier.css'
import { withRouter } from 'react-router-dom'
import Studie from '../components/studie'
import queryString from 'query-string'



class Studier extends React.Component {
    constructor(props) {
        super(props)
        this.kommunikasjonsteknologi = React.createRef()
        this.datatekonologi = React.createRef()
        this.industriellKjemiOgBioteknologi = React.createRef()
    }

    componentDidMount(){
        this.scroll() 
    }

    scroll = () => {
        const value = queryString.parse(this.props.location.search)
        console.log(value.studie)
        switch(value.studie) {
            case undefined:
                window.scrollTo(0,0);
                break;
            case "Komunnikasjonsteknologi":
                window.scrollTo(0, this.kommunikasjonsteknologi.current.offsetTop - 70);
                break;
            case "Datateknologi":   
                window.scrollTo(0, this.datatekonologi.current.offsetTop - 70);
                break;
            case "Industiell kjemi og bioteknologi":
                window.scrollTo(0, this.industriellKjemiOgBioteknologi.current.offsetTop - 70);
                break;
            default:
                window.scrollTo(0,0);
        }   
    }

    render() {
        return(
            <div className="sb-container" >
                <div className="studier-container">
                    <Studie
                        ref={this.kommunikasjonsteknologi} 
                        name={"Kommunikasjonsteknologi"}
                        p1={"Verden vår blir mer og mer tilkoblet. Det er kommunikasjonsteknologien som datanettverk, Internett, telefon og mobiltelefon som er fundamentet for vårt digitaliserte samfunn. E-post, teksttjenester, videokonferanser eller sosiale medier – livet vårt er ikke lenger tenkelig uten slike tjenester, på jobb og i fritida. For å få ny teknologi til å fungere godt, må kommunikasjon mellom enheter være samstemt – og den må være sikker og trygg."}
                        p2={"Vil du være med på å realisere neste generasjons Internett og løse nye kommunikasjonsutfordringer? Vil du hjelpe å forsvare vårt samfunn mot digitale sikkerhetstrusler? Er du interessert i hvordan en smart by skapes gjennom intelligente løsninger, og på denne måten bidrar til å fremme et bærekraftig samfunn? Da passer dette fremtidsrettete studiet for deg."}
                        p3={"Studiet kommunikasjonsteknologi og digital sikkerhet gir deg en ettertraktet kompetanse i kommunikasjonssystemer, digital sikkerhet og nett. Du vil ha fag som data, algoritmer, nettverk, matematikk og sikkerhet. I praktiske lab-prosjekter får du bland annet bygge dine egne systemer og nettverk, gjøre etisk hacking for å identifisere sikkerhetstrusler og undersøke egenskaper av større infrastrukturer som mobilnett."}
                        image={"https://www.ntnu.no/documents/144904/0/Kommunikasjonsteknologi.jpg/dfc86db7-7d7c-e169-2dd1-92a8849e577a?t=1576840687835&imagePreview=1"}
                        NTNU={"https://www.ntnu.no/studier/mtkom"}
                    />
                    <Studie
                        ref={this.datatekonologi}
                        name={"Datatekonologi"}
                        video={"https://www.youtube.com/embed/UxSOJVjO28o"}
                        p1={"Datateknologi er en helt sentral del av alle fremtidsrettede teknologier, som for eksempel kunstig intelligens, medisinsk teknologi og søkemotorteknologi. Datateknologi bidrar til å løse viktige samfunnsutfordringer innen for eksempel klima, bærekraft og helse."}
                        p2={"På datateknologi lærer du teknikker og metoder for å utvikle datasystemer. Vi dekker hele prosjektløpet fra en løst formulert ide til ferdig løsning."}
                        NTNU={"https://www.ntnu.no/studier/mtdt"}
                    />
                    <Studie 
                        ref={this.industriellKjemiOgBioteknologi}
                        name={"Industriell kjemi og bioteknologi"}
                        video={"https://www.youtube.com/embed/vyZGYICsy5Q"}
                        p1={"Vil du være med å utvikle energi, materialer, mat og medisiner på en miljøvennlig måte? Mange av de største vitenskapelige nyvinningene i dag skjer innenfor industriell kjemi og bioteknologi. Derfor passer dette studiet for deg som vil bidra til å utvikle løsningene på morgendagens utfordringer."}
                        p2={"Som sivilingeniør i industriell kjemi og bioteknologi er du godt rustet for fremtiden, med en rekke spennende jobbmuligheter. Du kan blant annet jobbe innen havbruk- og matindustrien, i legemiddelindustrien, ved kjemiske laboratorier eller i olje- og gass-sektoren. Du kan også jobbe som forsker, eller som rådgiver i offentlig forvaltning eller konsulentfirma."}
                        NTNU={"https://www.ntnu.no/studier/mtkj"}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Studier);