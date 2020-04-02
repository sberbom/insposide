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
        this.fysikkOgMattematikk = React.createRef()
        this.entrepenørskolen = React.createRef()
    }

    componentDidMount(){
        this.scroll() 
    }

    scroll = () => {
        const value = queryString.parse(this.props.location.search)
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
            case "Fysikk og mattematikk":
                window.scrollTo(0, this.fysikkOgMattematikk.current.offsetTop - 70);
                break;
            case "NTNUs Entreprenørskole":
                window.scrollTo(0, this.entrepenørskolen.current.offsetTop - 70);
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
                        p1={"Du må ha mye kunnskap om informasjonsteknologi for å lage gode og sikre systemer. Kommunikasjonen mellom enheter skal være trygg, og det skal være minimal sjanse for at systemet slutter å fungere. Du vil de første årene lære å lage apper gjennom programmering, hvordan internett er bygd opp, hvordan du sender datapakker gjennom nettverk, hvordan du hacker andre så du vet hvordan du beskytter deg selv og mye, mye mer. Dette gjør at du kan arbeide innenfor alt som har med teknologi å gjøre. De siste to årene av studiet vil du spesialisere deg innenfor enten Informasjonssikkerhet, som vil gi deg en dypere innføring i hvordan man beskytter informasjon og mer om hacking, Digital økonomi, hvor du vil lære hvordan teknologi og digitale tjenester påvirker samfunnet og forretningsmodeller, eller Nett, tjenester og applikasjoner der du vil lære om arkitekturen som ligger bak alt av nettbaserte tjenester og bygge de slik at de er raske og stabile."}
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
                    <Studie 
                        ref={this.fysikkOgMattematikk}
                        name={"Fysikk og Matematikk "}
                        image={"https://www.ntnu.no/documents/143156/1267126263/PKF_1622_web_800_410.jpg/f4fb2aa6-970a-406d-8bd2-6f4df8582f1c?t=1450781757676"}
                        p1={"Fysikk og Matematikk (fysmat) gir deg grundig teoretisk kompetanse innen matematiske modeller og fysiske prinsipper. Dersom du er nysgjerrig og glad i matte og fysikk er dette studiet for deg! Du får gjøre forsøk og se fysikken i praksis i tillegg til å lære deg å programmere og bruke dette i beregninger. Disse fagområdene danner en basis for all teknologisk utvikling.  Det sies at etter man har studert fysmat blir man sivilingeniørenes potet – du kan brukes til alt! Dette er fordi man rett og slett blir en god problemløser, og dette trenger du innen ALLE fagfelt! Etter to år på fysmat, vil du kunne velge å spesialisere deg innen en av tre spennende fagområder. Du har valget mellom Teknisk Fysikk - du graver dypere ned i fysikkens verden, Industriell Matematikk – gir deg en bred og anvendbar kompetanse innen matte, Biofysikk og Medisinsk teknologi – hvor du kan være med på å utvikle kunstige organer.  "}
                        NTNU={"https://www.ntnu.no/studier/mtfyma"}
                    />
                    <Studie 
                        ref={this.entrepenørskolen}
                        name={"NTNUs Entreprenørskole"}
                        image={"https://www.ntnu.no/documents/143156/1267126263/PKF_1622_web_800_410.jpg/f4fb2aa6-970a-406d-8bd2-6f4df8582f1c?t=1450781757676"}
                        p1={"NTNUs Entreprenørskole er et masterstudium i teknologi og entreprenørskap der hvert kull består av ca 30 høyt motiverte studenter med ulik teknisk, realfaglig eller samfunnsvitenskapelig bakgrunn som jobber i team for å kommersialisere et teknologi- eller kunnskapsbasert prosjekt. Målet er å bli verdens beste forretningsutviklere, og jobbe i eget selskap når du er ferdig med studiene. Det er kun din egn fantasi som kan begrense hva du kan prøve å starte. Du lærer å vurdere hvilke entreprenørielle ideer er gode og hvilke er dårlige. Du lærer å jobbe i et tverrfaglig team og får kunnskap og verktøy som du trenger i alle fasene i et innovasjonsprosjekt, og du får lære av de aller flinkeste entreprenørene i Norge. Naturligvis kommer du til å feile stort og smått i prosjektet, men du lærer å reise deg igjen og gjør det enda bedre neste gang. Hvis du ikke vil eller kan fortsette i din egen bedrift etter studiene har du en solid utdanning og erfaring som gjør deg ettertraktet av mange spennende, store og små bedrifter. På entreprenørskolen vil alle gjøre verden til et litt bedre sted, ikke fordi det er enkelt, men fordi det er meningsfullt og spennende å utforske nye muligheter."}
                        NTNU={"https://www.ntnu.no/studier/mientre"}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Studier);