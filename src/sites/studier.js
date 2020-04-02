import React from 'react';
import '../styles/studier.css'
import { withRouter } from 'react-router-dom'
import Studie from '../components/studie'
import queryString from 'query-string'

class Studier extends React.Component {
    constructor(props) {
        super(props)
        this.kommunikasjonsteknologi = React.createRef()
        this.entrepenørskolen = React.createRef()
        this.industriellØkologi = React.createRef()
        this.pup = React.createRef()
        this.fornybar = React.createRef()
        this.elsys = React.createRef()
        this.kyb = React.createRef()
        this.indøk = React.createRef()
        this.lektor = React.createRef()
        this.bygg = React.createRef()
        this.kjemi = React.createRef()
        this.data = React.createRef()
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
            case "NTNUs Entreprenørskole":
                window.scrollTo(0, this.entrepenørskolen.current.offsetTop - 70);
                break;
            case "Industriell økologi":
                window.scrollTo(0, this.industriellØkologi.current.offsetTop - 70);
                break;
            case "Produksjon og produktutvikling":
                window.scrollTo(0, this.pup.current.offsetTop - 70);
                break;
            case "Fornybar Energi":
                window.scrollTo(0, this.fornybar.current.offsetTop - 70);
                break;
            case "Elektronisk systemdesign og innovasjon":
                window.scrollTo(0, this.elsys.current.offsetTop - 70);
                break;
            case "Kybernetikk og Robotikk":
                window.scrollTo(0, this.kyb.current.offsetTop - 70);
                break;
            case "Industriell økonomi og teknologiledelse":
                window.scrollTo(0, this.indøk.current.offsetTop - 70);
                break;
            case "Lektorutdanning i Realfag":
                window.scrollTo(0, this.lektor.current.offsetTop - 70);
                break;
            case "Bygg- og miljøteknikk":
                window.scrollTo(0, this.bygg.current.offsetTop - 70);
                break;
            case "Industriell kjemi og bioteknologi":
                window.scrollTo(0, this.kjemi.current.offsetTop - 70);
                break;
            case "Datateknologi":
                window.scrollTo(0, this.data.current.offsetTop - 70);
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
                        video={"https://www.youtube.com/embed/pC0t0WhXVBw"}
                        p1={"Mange spådde at internett bare kom til å være et blaff, men i dag er vi alltid koblet på nett, enten det er via ruteren hjemme eller på telefonen gjennom teletjenester. Derfor blir vi konstant utsatt for digitale angrep, men heldigvis for deg så har andre lagd løsninger som beskytter systemene og dine enheter mot digitale trusler. Kanskje du vil bli en av disse personene?"}
                        p2={"Du må ha mye kunnskap om informasjonsteknologi for å lage gode og sikre systemer. Kommunikasjonen mellom enheter skal være trygg, og det skal være minimal sjanse for at systemet slutter å fungere. Du vil de første årene lære å lage apper gjennom programmering, hvordan internett er bygd opp, hvordan du sender datapakker gjennom nettverk, hvordan du hacker andre så du vet hvordan du beskytter deg selv og mye, mye mer. Dette gjør at du kan arbeide innenfor alt som har med teknologi å gjøre. De siste to årene av studiet vil du spesialisere deg innenfor enten Informasjonssikkerhet, som vil gi deg en dypere innføring i hvordan man beskytter informasjon og mer om hacking, Digital økonomi, hvor du vil lære hvordan teknologi og digitale tjenester påvirker samfunnet og forretningsmodeller, eller Nett, tjenester og applikasjoner der du vil lære om arkitekturen som ligger bak alt av nettbaserte tjenester og bygge de slik at de er raske og stabile."}
                        NTNU={"https://www.ntnu.no/studier/mtkom"}
                    />
                    <Studie 
                        ref={this.entrepenørskolen}
                        name={"NTNUs Entreprenørskole"}
                        video={"https://www.youtube.com/embed/vsZ6UKHDegc"}
                        p1={"Viste du at selskapet bak de kule sekkene fra Douchebags ble starte på NTNUs Entreprenørskole? Eller har du hørt om selskapet Ntention fra samme skole som lager smarte hansker til NASAs astronauter som skal utforske Mars? På NTNUs Entreprenørskole skal du sammen med et team starte et reelt oppstartselskap for å lære om entreprenørskap og teknologi i praksis og for å skape din egen drømmejobb som gründer."}
                        p2={"NTNUs Entreprenørskole er et masterstudium i teknologi og entreprenørskap der hvert kull består av ca 30 høyt motiverte studenter med ulik teknisk, realfaglig eller samfunnsvitenskapelig bakgrunn som jobber i team for å kommersialisere et teknologi- eller kunnskapsbasert prosjekt. Målet er å bli verdens beste forretningsutviklere, og jobbe i eget selskap når du er ferdig med studiene. Det er kun din egn fantasi som kan begrense hva du kan prøve å starte. Du lærer å vurdere hvilke entreprenørielle ideer er gode og hvilke er dårlige. Du lærer å jobbe i et tverrfaglig team og får kunnskap og verktøy som du trenger i alle fasene i et innovasjonsprosjekt, og du får lære av de aller flinkeste entreprenørene i Norge. Naturligvis kommer du til å feile stort og smått i prosjektet, men du lærer å reise deg igjen og gjør det enda bedre neste gang. Hvis du ikke vil eller kan fortsette i din egen bedrift etter studiene har du en solid utdanning og erfaring som gjør deg ettertraktet av mange spennende, store og små bedrifter. På entreprenørskolen vil alle gjøre verden til et litt bedre sted, ikke fordi det er enkelt, men fordi det er meningsfullt og spennende å utforske nye muligheter."}
                        NTNU={"https://www.ntnu.no/studier/mientre"}
                    />
                    <Studie 
                        ref={this.industriellØkologi}
                        name={"Industriell økologi"}
                        video={"https://www.youtube.com/embed/8zyeutW0JxY"}
                        p1={"Industriell økologi er en to-årig internasjonal master på NTNU hvor du lærer om hvordan mennesker og industri påvirker naturen og hvordan vi kan og bør utforme og endre teknologi, forbruk og levemønster for å ta best mulig vare på jordkloden vår. "}
                        p2={"Er du interessert i bærekraft og kunne du kanskje tenke deg å jobbe med bærekraft i framtiden? Da er nok industriell økologi noe for deg. Dette er en to-årig internasjonal master på NTNU hvor du lærer om samspillet mellom mennesker, industri og natur. Ved industriell økologi er det fire hovedområder du kan spesialisere deg innen økosystemer og naturressurser, sirkulær økonomi, energi, bygninger og transport  og bærekraftig produksjon og forbruk. Industriell økologi er en tverrfaglig master. Dette vil si at du kan begynne på denne masteren uansett hvilken bachelorgrad du har tatt, så lenge du har minst 7,5 studiepoeng i statistikk. Dette betyr også at du får studere med personer som har helt ulike studiebakgrunner (og som kommer fra hele verden!). Selv tok jeg en bachelorgrad i anvendt matematikk ved INSA Toulouse i Frankrike og deretter et år med biologi på NTNU. Dersom du er opptatt av bærekraft og ønsker å jobbe innen et bredt og internasjonalt fagfelt, er denne mastergraden perfekt for deg!"}
                        NTNU={"https://www.ntnu.no/indecol"}
                    />
                    <Studie 
                        ref={this.pup}
                        name={"Produksjon og produktutvikling"}
                        video={"https://www.youtube.com/embed/v4ITGojUNT0"}
                        p1={"Produksjon og produktutvikling er et utrolig gøy studie som byr på mye praktisk gjennom fagene. Man lærer hvordan man kan bidra til nyskapning, hvordan utvikle produkter på best mulig måte. Man er med på å forme fremtidens teknologiske løsninger."}
                        p2={"Dersom du er interessert i fysikk og matematikk, men også vil lære litt om hvordan man gjennomfører ting i praksis, er dette studiet for deg! Et produkt er mye mer enn bare en dings man kan ha i hånden, det er alt fra elektriske biler til en prosess hvor man gjenvinner mest mulig varme. Dette studiet lærer deg om maskinkonstruksjoner, fornybar energi, litt programmering, roboteknikk og hvordan man forbedrer produksjon- og energiprosesser. Etterhvert velger man studieretning, der er det mye spennende man kan ta tak i. Man kan velge mellom Ledelse og Systemfag, Produktutvikling og Materialer, Industriell Mekanikk og Energi-, Prosess- og Strømningsteknikk. Det er en stor bredde i studiet, som igjen gjør at mange fagfelt ønsker å ha deg i bedriften sin. Du blir som en slags «potet» i ingeniørfeltet. Dette gjør at du har utrolig mange muligheter etter endt studiet! Det var noe av det viktigste for meg da jeg skulle velge hva jeg ville gjøre resten av livet."}
                        NTNU={"https://www.ntnu.no/studier/mtprod"}
                    />
                    <Studie 
                        ref={this.fornybar}
                        name={"Fornybar Energi"}
                        video={"https://www.youtube.com/embed/f_dZA3Yb6_Y"}
                        p1={"Utslipp av klimagasser er en av de største truslene mot menneskeheten i dag. Dette synliggjøres blant annet gjennom ekstremvær, vannmangel og utrydding av arter. Men verden trenger stadig mer energi. Hvordan løser vi dette?"}
                        p2={"Med et voksende behov for miljøvennlig energi i verden, er samfunnet i kontinuerlig utvikling. Hvis du studerer fornybar energi, kan du være med på denne utviklingen! Du får vite det nyeste nye om elektriske fly og bølgekraftverk, noe som danner grunnlaget for at du en dag kan redde verden litt!"}
                        p3={"Klassene består av i underkant av 70 personer, så vi er en sammensveiset gjeng. Vi har tett kontakt med foreleserne, og studiet er ganske moderne, ettersom forelesninger kan foregå både i klasserom og på video. Når du er ferdig med bacheloren kan du jobbe i energiselskap, industri, konsulentbransjen, forskning og utvikling. Det er også vanlig å studere videre på master. De fleste begynner på toårig master i energi og miljø. Andre muligheter er industriell kybernetikk, helse miljø og sikkerhet, ledelse av teknologi."}
                        NTNU={"https://www.ntnu.no/studier/biforen"}
                    />
                    <Studie 
                        ref={this.elsys}
                        name={"Elektronisk systemdesign og innovasjon"}
                        video={"https://www.youtube.com/embed/WCO1lQ9tyXo"}
                        p1={"Elektroniske Systemer og Innovasjon er et praktisk studieprogram hvor man lærer masse om elektronikk og programmering. Med denne kunnskapen har man muligheten til å være med på utviklingen av mange forskjellige fagfelt som helseteknologi, romteknologi, kunstig intelligens og mye mer!"}
                        p2={"Elektronisk Systemdesign og Innovasjon (ELSYS) er studieprogrammet for deg som er interessert i teknologi og har lyst å være med på å forme fremtidens teknologier! Allerede første semester får man et praktisk prosjekt hvor man får føle på det å være ingeniør, uten at det krever forkunnskaper innen programmering og elektronikk. På studiet lærer man om hele spekteret innen elektronikken; fra elektroners oppførsel på kvantenivå til høynivå programmering. Etter hvert spesialiserer man seg innen den av de seks hovedprofilene som virker gøyest. Design av digitale system, signalbehandling, akustikk og nanoelektronikk er noen eksempler på hva man kan spesialisere seg innen. Siden elektronikk og programmering er så essensielt som det er i moderne teknologier er mulighetene mange når man går ut fra ELSYS. Romteknologi, tingenes internett, helseteknologi og utvikling av mikrochipper er bare noen av mulighetene du har etter endt studie!"}                     
                        NTNU={"https://www.ntnu.no/studier/mtelsys"}
                    />
                    <Studie 
                        ref={this.kyb}
                        name={"Kybernetikk og Robotikk"}
                        video={"https://www.youtube.com/embed/WUOtARgYK28"}
                        p1={"Kybernetikk og Robotikk er et studie som gir deg innsikt i fremtidens teknologier; robotisering, digitalisering og automatisering er typiske ting vi driver med. Hvis du interesserer deg for matematikk eller datateknologi, eller er nysgjerrig på roboter, droner eller autonome systemer, passer dette studiet perfekt for deg!"}                     
                        p2={"Kybernetikk og Robotikk handler først og fremst om hvordan vi kan overvåke og styre kompliserte systemer. Dette høres kanskje litt fjernt ut, men det er denne teknologien som brukes i blant annet selvkjørende biler, roboter, ultralydavbildning og mye annen spennende teknologi! På studiet har vi mye laboratoriearbeid, det gir oss muligheten til å prøve ut det vi lærer i praksis og se resultater av arbeidet vårt. Kybernetikk og Robotikk er studiet for deg som synes at mange områder innenfor realfag er spennende. I løpet av studiets 5 år får man særlig god kompetanse innenfor både matematikk og datateknologi, og det er dette som danner grunnmuren for å drive med blant annet automatisering og digitalisering. Dette brede kunnskapsområdet gjør at man kan bruke utdanningen innenfor utrolig mange ulike områder.  Kanskje vil du lage selvstyrende roboter, eller ubemannete fremkomstmidler? Eller vil du jobbe innenfor helse og utvikle proteser, eller finne nye måter å detektere sykdommer? Da synes jeg du skal søke!"}
                        NTNU={"https://www.ntnu.no/studier/mttk"}
                    />
                    <Studie 
                        ref={this.indøk}
                        name={"Industriell økonomi og teknologiledelse"}
                        video={"https://www.youtube.com/embed/4KjLup78ckM"}
                        p1={"Sivilingeniørutdanningen industriell økonomi og teknologiledelse (Indøk) er et tverrfaglig masterprogram ved NTNU. Tradisjonelle sivilingeniøremner kombineres med emner i ledelse og økonomi. Utdanningen er en av de mest attraktive i Norge. "}                     
                        p2={"Muligheten til å kombinere teknologi med økonomi og ledelse er det som gjør studieprogrammet i Industriell økonomi og teknologiledelse (Indøk) unikt. På Indøk lærer du å analysere komplekse problemstillinger i tverrfaglige team. Du bygger videre på matematikk og fysikk fra videregående, og får også etter hvert dybdekunnskap innenfor økonomi og ledelse."}
                        p3={"Indøkere er blant de mest ettertraktede studentene i det norske næringsliv, og mange sikrer seg jobb før de er ferdige med studiet. I dag finnes indøkere i over 700 forskjellige bedrifter i Norge og utlandet. De finnes eksempelvis i store industriselskap som Equinor og Orkla, i høyteknologibedrifter som Microsoft, innen bank og forsikring, innen IT og telekommunikasjon, for eksempel Telenor, eller innen konsulentvirksomhet som Accenture, Boston Consulting Group og McKinsey. Valgmulighetene er mange! "}
                        p4={"Det sosiale miljøet på Indøk er veldig godt, både innad i klassene og på tvers av årskurs. Linjeforeningene har arrangementer hver uke i løpet av semesteret, så det er alltid noe som skjer på Indøk."}
                        p5={"Gira på å vite mer? Sjekk ut indøk.no for mer info!"}
                        NTNU={"https://www.ntnu.no/studier/mtiot"}
                    />
                    <Studie 
                        ref={this.lektor}
                        name={"Lektorutdanning i Realfag"}
                        video={"https://www.youtube.com/embed/I33gaZO-IWI"}
                        p1={"Har du lyst til å utvikle din faglige interesse for realfag og samtidig synes formidling er spennende? Da kan lektorutdanningen i realfag være noe for deg. Du får bred realfaglig og teknologisk innsikt samtidig som du opparbeider deg gode pedagogisk evner. Dette gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig sektor. "}                     
                        p2={"Er du glad i mennesker, har en iver for realfag og har lyst til at flere skal se gleden, nytten og fasinasjonen med realfag? Da kan lektorutdanningen i realfag være noe for akkurat deg! Lektorutdanningen i realfag gir deg en unik kompetanse i realfagene du brenner mest for, samtidig som du gjennom praksis i studiet får en solid pedagogisk bakgrunn. Du kan være med på å skape teknologiske løsninger for en bærekraftig fremtid, eller finne ut hvordan programmering og digital undervisning best kan implementeres i skolen. Begge deler er mulig på lektorstudiet! Du velger først to av fagene kjemi, fysikk, biologi, informatikk og matte, og fordyper deg videre i ett av fagene. På den måten har du faktisk muligheten til å få to utdanninger på 5 år, både lektorgraden OG en master i et valgt realfag på lik linje med alle som studerer det realfaget. Det er kult og unikt, og gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig næringsliv."}
                        NTNU={"https://www.ntnu.no/studier/mlreal"}
                    />
                    <Studie 
                        ref={this.bygg}
                        name={"Bygg- og miljøteknikk"}
                        video={"https://www.youtube.com/embed/rmo-SfSVffE"}
                        p1={"Vil du være med å forme verden? Vil du sørge for rent drikke vann? Energi effektivisere bygninger? Bidra til å bygge miljøvennlig? Løse storbyers trafikkproblemer? Vil du studere noe håndfast som gir tydelige resultater? "}
                        p2={"Er du venn med Newtons lover? Hvis ikke så kommer du vertfall til å bli det. Men bygg er ikke bare det, det er økonomi, ledelse, team arbeid, matematikk, energieffektivisering, bærekraft og mye mye mer."}
                        p3={"Som byggingeniør skal man ofte konstruere og dimensjonere konstruksjoner. Enkelt sagt betyr det å finne gode og lønnsomme løsninger. Ved valg av retning vil du kunne spesialisere deg innen det du syntes er mest spennende. Du kan være en leder på byggeplassen eller spesialisere deg innen alt fra brann og akustikk til geoteknikk. Det er også mulig å spesialisere seg innen maritime konstruksjoner dersom havets enorme krefter er noe du tørr å deale med. "}
                        p4={"Men bygg og miljøteknikk stopper ikke der. Med retninger innen vann forsyning, rensing og vannkraft har du store muligheter for å gjøre verden til et bedre sted.  Infrastruktur og transport er en annen fordypning der du bla. kan få muligheten til å drive by utvikling og bygge infrastruktur. "}
                        p5={"Med en sivilingeniør grad fra bygg og miljøteknikk har du veldig mange muligheter innen en stor bransje. Linjen er en av NTNU sine største linjer og dermed også en linje med et stort mangfold. Så her finner du lett noen å trives med! "}
                        NTNU={"https://www.ntnu.no/studier/mtbygg"}
                    />
                    <Studie 
                        ref={this.kjemi}
                        name={"Industriell kjemi og bioteknologi"}
                        video={"https://www.youtube.com/embed/-egvgEP1nO0"}
                        p1={""}
                        p2={""}
                        NTNU={"https://www.ntnu.no/studier/mtkj"}
                    />
                    <Studie 
                        ref={this.data}
                        name={"Datateknologi"}
                        video={""}
                        p1={"Datateknologi står sentralt i all framtidsrettet teknologi, og du kan lære alt fra temaer som kunstig intelligens til spillteknologi og programvareutvikling. Med en master i Datateknologi blir du svært ettertraktet i jobbmarkedet, og du vil kunne få kompetanse til å løse viktige samfunnsutfordringer."}
                        p2={"Dersom du er glad i realfag og nysgjerrig på koding, har du kommet til rett studie! På Datateknologi lærer du teknikker for å utvikle datasystemer, og du får brukt det teoretiske fagstoffet til å løse utfordringer i prosjektoppgaver sammen med andre studenter. Det å løse problemer og jobbe i team, blir du altså god på! Dette gjør at mange blir ledere i prosjekter når de kommer ut i jobb, andre blir eksperter på ett enkelt teknologiområde. Man trenger ingen forkunnskaper i programmering før man starter på studiet. De første årene byr på en bred kompetanse innenfor datafag og andre generelle ingeniørfag. I det tredje året kan du spesialisere deg og velge mellom fire studieretninger: Kunstig intelligens, databaser og søk, programvaresystemer og Algoritmer og datamaskiner. Studiet passer for deg som ønsker å skape fremtidens teknologi, i dag jobbes det for eksempel med å bruke datateknologi til å forstå sammenhenger i genmateriale, som kan bidra til å utvikle medisiner og kurere sykdommer. "}
                        NTNU={"https://www.ntnu.no/studier/mtkj"}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Studier);