import React from 'react';
import '../styles/studier.css'
import { withRouter } from 'react-router-dom'
import Studie from '../components/studie'
import StudieMarin from '../components/studie_marin'
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
        this.emil = React.createRef()
        this.fysmat = React.createRef()
        this.marin = React.createRef()
        this.maskin=React.createRef()
        this.nano = React.createRef()
        this.biotek = React.createRef()
    }

    componentDidMount(){
        const value = queryString.parse(this.props.location.search)
        this.scroll(value.studie) 
    }

    scroll = (site) => {
        switch(site) {
            case undefined:
                window.scrollTo(0,0);
                break;
            case "Kommunikasjonsteknologi":
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
            case "Fornybar energi":
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
            case "Energi og miljø":
                window.scrollTo(0, this.emil.current.offsetTop - 70);
                break;
            case "Fysikk og Matematikk":
                window.scrollTo(0, this.fysmat.current.offsetTop - 70);
                break;
            case "Marin teknikk":
                window.scrollTo(0, this.marin.current.offsetTop - 70);
                break;
            case "Maskiningeniør":
                window.scrollTo(0, this.maskin.current.offsetTop - 70);
                break;
            case "Nanoteknologi":
                window.scrollTo(0, this.nano.current.offsetTop - 70);
                break;
            case "Bioteknologi":
                window.scrollTo(0, this.biotek.current.offsetTop - 70);
                break;
            default:
                window.scrollTo(0,0);
        }   
    }

    render() {
        return(
            <div className="sb-container" >
                <div className="studier-container">
                    <h2 className="content-header">Innhold</h2>
                    <div className="overview-container">
                        <div>
                            <p onClick={() => this.scroll("Bygg- og miljøteknikk")}>Bygg- og miljøteknikk</p>
                            <p onClick={() => this.scroll("Bioteknologi")}>Bioteknologi</p>
                            <p onClick={() => this.scroll("Datateknologi")}>Datateknologi</p>
                            <p onClick={() => this.scroll("NTNUs Entreprenørskole")}>NTNUs Entreprenørskole</p>
                            <p onClick={() => this.scroll("Elektronisk systemdesign og innovasjon")}>Elektronisk systemdesign og innovasjon</p>
                            <p onClick={() => this.scroll("Fornybar energi")}>Fornybar Energi</p>
                            <p onClick={() => this.scroll("Fysikk og Matematikk")}>Fysikk og Matematikk</p>
                            <p onClick={() => this.scroll("Energi og miljø")}>Energi og miljø</p>
                            <p onClick={() => this.scroll("Industriell økologi")}>Industriell økologi</p>
                        </div>
                        <div>
                            <p onClick={() => this.scroll("Industriell økonomi og teknologiledelse")}>Industriell økonomi og teknologiledelse</p>
                            <p onClick={() => this.scroll("Industriell kjemi og bioteknologi")}>Industriell kjemi og bioteknologi</p>
                            <p onClick={() => this.scroll("Kybernetikk og Robotikk")}>Kybernetikk og Robotikk</p>
                            <p onClick={() => this.scroll("Kommunikasjonsteknologi")}>Kommunikasjonsteknologi</p>
                            <p onClick={() => this.scroll("Lektorutdanning i Realfag")}>Lektorutdanning i Realfag</p>
                            <p onClick={() => this.scroll("Marin teknikk")}>Marin teknikk</p>
                            <p onClick={() => this.scroll("Maskiningeniør")}>Maskiningeniør</p>
                            <p onClick={() => this.scroll("Nanoteknologi")}>Nanoteknologi</p>
                            <p onClick={() => this.scroll("Produksjon og produktutvikling")}>Produksjon og produktutvikling</p>Nanoteknologi
                        </div>
                    </div>
                    <Studie 
                        ref={this.bygg}
                        name={"Bygg- og miljøteknikk"}
                        video={"https://www.youtube.com/embed/j363L38rthQ"}
                        p1={"Vil du være med å forme verden? Vil du sørge for rent drikkevann? Energi effektivisere bygninger? Bidra til å bygge miljøvennlig? Løse storbyers trafikkproblemer? Vil du studere noe håndfast som gir tydelige resultater? "}
                        p2={"Er du venn med Newtons lover? Hvis ikke så kommer du vertfall til å bli det. Men bygg er ikke bare det, det er økonomi, ledelse, team arbeid, matematikk, energieffektivisering, bærekraft og mye mye mer."}
                        p3={"Som byggingeniør skal man ofte konstruere og dimensjonere konstruksjoner. Enkelt sagt betyr det å finne gode og lønnsomme løsninger. Ved valg av retning vil du kunne spesialisere deg innen det du syntes er mest spennende. Du kan være en leder på byggeplassen eller spesialisere deg innen alt fra brann og akustikk til geoteknikk. Det er også mulig å spesialisere seg innen maritime konstruksjoner dersom havets enorme krefter er noe du tør å deale med. "}
                        p4={"Men bygg og miljøteknikk stopper ikke der. Med retninger innen vannforsyning, rensing og vannkraft har du store muligheter for å gjøre verden til et bedre sted.  Infrastruktur og transport er en annen fordypning der du bla. kan få muligheten til å drive byutvikling og bygge infrastruktur. "}
                        p5={"Med en sivilingeniør grad fra bygg og miljøteknikk har du veldig mange muligheter innen en stor bransje. Linjen er en av NTNU sine største linjer og dermed også en linje med et stort mangfold. Så her finner du lett noen å trives med! "}
                        NTNU={"https://www.ntnu.no/studier/mtbygg"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"54,9"}
                        snittFør={"52,5"}
                        VGSfag={"Fysikk"}
                    />
                    <Studie 
                        ref={this.biotek}
                        name={"Bioteknologi"}
                        video={"https://www.youtube.com/embed/EOpOKQdkRvc"}
                        p1={"Hvordan kan vi få mikroorganismer til å produsere ting vi har nytte av? På hvilke måter kan bakterier redusere forurensning? Hvilke faktorer påvirker sunnhet og kvalitet på maten vi spiser? Hvordan kan biopolymerer brukes til å lage nye og nyttige produkt? Alt dette og mer kan du fordype deg i ved å ta en master i bioteknologi."}
                        p2={"Den 5-årige bioteknologiutdanningen har som mål å gi deg et bredt og solid grunnlag i celle- og molekylærbiologi, biokjemi og mikrobiologi. Vi legger stor vekt på laboratoriebasert undervisning, og du får en variert og interessant studiehverdag."}
                        NTNU={"https://www.ntnu.no/studier/mbiot5/mbiot5"}
                        fagkrav={"R1(S1 og S2)"}
                        snittOrd={"60.7"}
                        snittFør={"57,6"}
                        VGSfag={"Biologi"}
                    />
                    <Studie 
                        ref={this.data}
                        name={"Datateknologi"}
                        video={"https://www.youtube.com/embed/UIktzSXirDo"}
                        p1={"Datateknologi står sentralt i all framtidsrettet teknologi, og du kan lære alt fra temaer som kunstig intelligens til spillteknologi og programvareutvikling. Med en master i Datateknologi blir du svært ettertraktet i jobbmarkedet, og du vil kunne få kompetanse til å løse viktige samfunnsutfordringer."}
                        p2={"Dersom du er glad i realfag og nysgjerrig på koding, har du kommet til rett studie! På Datateknologi lærer du teknikker for å utvikle datasystemer, og du får brukt det teoretiske fagstoffet til å løse utfordringer i prosjektoppgaver sammen med andre studenter. Det å løse problemer og jobbe i team, blir du altså god på! Dette gjør at mange blir ledere i prosjekter når de kommer ut i jobb, andre blir eksperter på ett enkelt teknologiområde. Man trenger ingen forkunnskaper i programmering før man starter på studiet. De første årene byr på en bred kompetanse innenfor datafag og andre generelle ingeniørfag. I det tredje året kan du spesialisere deg og velge mellom fire studieretninger: Kunstig intelligens, databaser og søk, programvaresystemer og Algoritmer og datamaskiner. Studiet passer for deg som ønsker å skape fremtidens teknologi, i dag jobbes det for eksempel med å bruke datateknologi til å forstå sammenhenger i genmateriale, som kan bidra til å utvikle medisiner og kurere sykdommer. "}
                        NTNU={"https://www.ntnu.no/studier/mtdt"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"61,6"}
                        snittFør={"59,0"}
                        VGSfag={"IT"}
                    />
                    <Studie 
                        ref={this.entrepenørskolen}
                        name={"NTNUs Entreprenørskole"}
                        video={"https://www.youtube.com/embed/vsZ6UKHDegc"}
                        p1={"Visste du at selskapet bak de kule sekkene fra Douchebags ble starte på NTNUs Entreprenørskole? Eller har du hørt om selskapet Ntention fra samme skole som lager smarte hansker til NASAs astronauter som skal utforske Mars? På NTNUs Entreprenørskole skal du sammen med et team starte et reelt oppstartselskap for å lære om entreprenørskap og teknologi i praksis og for å skape din egen drømmejobb som gründer."}
                        p2={"NTNUs Entreprenørskole er et masterstudium i teknologi og entreprenørskap der hvert kull består av ca 30 høyt motiverte studenter med ulik teknisk, realfaglig eller samfunnsvitenskapelig bakgrunn som jobber i team for å kommersialisere et teknologi- eller kunnskapsbasert prosjekt. Målet er å bli verdens beste forretningsutviklere, og jobbe i eget selskap når du er ferdig med studiene. Det er kun din egn fantasi som kan begrense hva du kan prøve å starte. Du lærer å vurdere hvilke entreprenørielle ideer er gode og hvilke er dårlige. Du lærer å jobbe i et tverrfaglig team og får kunnskap og verktøy som du trenger i alle fasene i et innovasjonsprosjekt, og du får lære av de aller flinkeste entreprenørene i Norge. Naturligvis kommer du til å feile stort og smått i prosjektet, men du lærer å reise deg igjen og gjør det enda bedre neste gang. Hvis du ikke vil eller kan fortsette i din egen bedrift etter studiene har du en solid utdanning og erfaring som gjør deg ettertraktet av mange spennende, store og små bedrifter. På entreprenørskolen vil alle gjøre verden til et litt bedre sted, ikke fordi det er enkelt, men fordi det er meningsfullt og spennende å utforske nye muligheter."}
                        NTNU={"https://www.ntnu.no/studier/mientre"}
                        egetOpptak={true} 
                    />
                    <Studie 
                        ref={this.elsys}
                        name={"Elektronisk systemdesign og innovasjon"}
                        video={"https://www.youtube.com/embed/WCO1lQ9tyXo"}
                        p1={"Elektroniske Systemer og Innovasjon er et praktisk studieprogram hvor man lærer masse om elektronikk og programmering. Med denne kunnskapen har man muligheten til å være med på utviklingen av mange forskjellige fagfelt som helseteknologi, romteknologi, kunstig intelligens og mye mer!"}
                        p2={"Elektronisk Systemdesign og Innovasjon (ELSYS) er studieprogrammet for deg som er interessert i teknologi og har lyst å være med på å forme fremtidens teknologier! Allerede første semester får man et praktisk prosjekt hvor man får føle på det å være ingeniør, uten at det krever forkunnskaper innen programmering og elektronikk. På studiet lærer man om hele spekteret innen elektronikken; fra elektroners oppførsel på kvantenivå til høynivå programmering. Etter hvert spesialiserer man seg innen den av de seks hovedprofilene som virker gøyest. Design av digitale system, signalbehandling, akustikk og nanoelektronikk er noen eksempler på hva man kan spesialisere seg innen. Siden elektronikk og programmering er så essensielt som det er i moderne teknologier er mulighetene mange når man går ut fra ELSYS. Romteknologi, tingenes internett, helseteknologi og utvikling av mikrochipper er bare noen av mulighetene du har etter endt studie!"}                     
                        NTNU={"https://www.ntnu.no/studier/mtelsys"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"59,1"}
                        snittFør={"57,8"}
                        VGSfag={"Fysikk"}
                    />
                    <Studie 
                        ref={this.fornybar}
                        name={"Fornybar Energi"}
                        video={"https://www.youtube.com/embed/f_dZA3Yb6_Y"}
                        p1={"Utslipp av klimagasser er en av de største truslene mot menneskeheten i dag. Dette synliggjøres blant annet gjennom ekstremvær, vannmangel og utrydding av arter. Men verden trenger stadig mer energi. Hvordan løser vi dette?"}
                        p2={"Med et voksende behov for miljøvennlig energi i verden, er samfunnet i kontinuerlig utvikling. Hvis du studerer fornybar energi, kan du være med på denne utviklingen! Du får vite det nyeste nye om elektriske fly og bølgekraftverk, noe som danner grunnlaget for at du en dag kan redde verden litt!"}
                        p3={"Klassene består av i underkant av 70 personer, så vi er en sammensveiset gjeng. Vi har tett kontakt med foreleserne, og studiet er ganske moderne, ettersom forelesninger kan foregå både i klasserom og på video. Når du er ferdig med bacheloren kan du jobbe i energiselskap, industri, konsulentbransjen, forskning og utvikling. Det er også vanlig å studere videre på master. De fleste begynner på toårig master i energi og miljø. Andre muligheter er industriell kybernetikk, helse miljø og sikkerhet, ledelse av teknologi."}
                        NTNU={"https://www.ntnu.no/studier/biforen"}
                        fagkrav={"R1, R2, Fysikk 1"}
                        snittOrd={"54,3"}
                        snittFør={"53,5"}
                        VGSfag={"Fysikk, Matte"}
                    />
                    <Studie 
                        ref={this.fysmat}
                        name={"Fysikk og Matematikk"}
                        video={"https://www.youtube.com/embed/k-BGvGA2gTg"}
                        p1={"Fysikk og Matematikk gir deg en fysisk forståelse av ALT rundt oss - både det vi kan se, men også det vi ikke kan se med det blotte øyet. Hvis du studerer Fysikk og Matematikk vil du kunne være med på å utvikle teknologi som kan brukes i alle fagfelt! "}
                        p2={"Dersom du er nysgjerrig og glad i matte og fysikk er dette studiet for deg! Fysikk og Matematikk (fysmat) gir deg grundig teoretisk kompetanse innen matematiske modeller og fysiske prinsipper. Du får se fysikken i praksis gjennom forsøk i tillegg til å lære deg å programmere og bruke dette i beregninger. Disse fagområdene danner en basis for all teknologisk utvikling. Det sies at etter man har studert fysmat blir man sivilingeniørenes potet – du kan brukes til alt! Dette er fordi man rett og slett blir en god problemløser, og dette trenger du innen ALLE fagfelt! Etter to år på fysmat, vil du kunne velge å spesialisere deg innen en av tre spennende fagområder. Du har valget mellom Teknisk Fysikk hvor du graver dypere ned i fysikkens verden, Industriell Matematikk som gir en bred og anvendbar kompetanse innen matte og Biofysikk og Medisinsk teknologi – hvor du kan være med på å utvikle kunstige organer og blir en smeltedigel mellom fysikk og biologi. "}
                        NTNU={"https://www.ntnu.no/studier/mtfyma"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"58,6"}
                        snittFør={"58,5"}
                        VGSfag={"Fysikk, Matte"}
                    />
                    <Studie 
                        ref={this.emil}
                        name={"Energi og miljø"}
                        video={"https://www.youtube.com/embed/VniTSyTWB7I"}
                        p1={"På Energi og miljø lærer man om og hvordan man kan bruke teknologi for å produsere fornybar energi og hvordan samfunnet som helhet kan bli mer miljøvennlig. Studiet gir deg den faglige tyngden slik at du kan være med å tenke ut fremtidens løsninger. Dette gjør studiet svært spennende og givende!"}
                        p2={"Kloden står ovenfor store klimaendringer, og det er et voksende behov for folk med realfaglig utdannelse innenfor bærekraft. På det femårige masterstudiet Energi og miljø (emil) får du innblikk i teknologien bak å spare energi, utvikle smarte løsninger og produsere fornybar energi. Studiet gir bred kunnskap innenfor relevante fag innenfor bærekraft. Når du er ferdigutdannet kan du velge mellom spennende fagfelt. Du kan jobbe innenfor blant annet forskning, industri eller bli rådgiver for andre bransjer som ønsker å bli mer miljøvennlige. Det er kun fantasien som setter grenser! Etter to år på studiet begynner man å spesialisere seg, og da kan man velge mellom tre hovedretninger. Den ene fokuserer på teknologi for produksjon og transport av elektrisk energi, Elektrisk energiteknikk og smarte nett. Du kan også velge en retning som heter Energiplanlegging og miljøanalyse, der du får dypere kunnskap om hvordan bygninger og samfunn som helhet kan spare energi og ressurser. På den siste hovedretningen, Energi og prosessteknikk, lærer du om energiprosesser innenfor vannkraft, vindkraft og lignende."}
                        NTNU={"https://www.ntnu.no/studier/mtenerg"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"56,0"}
                        snittFør={"54,40"}
                        VGSfag={"Fysikk, Matte"}
                    />
                    <Studie 
                        ref={this.industriellØkologi}
                        name={"Industriell økologi"}
                        video={"https://www.youtube.com/embed/8zyeutW0JxY"}
                        p1={"Industriell økologi er en to-årig internasjonal master på NTNU hvor du lærer om hvordan mennesker og industri påvirker naturen og hvordan vi kan og bør utforme og endre teknologi, forbruk og levemønster for å ta best mulig vare på jordkloden vår. "}
                        p2={"Er du interessert i bærekraft og kunne du kanskje tenke deg å jobbe med bærekraft i framtiden? Da er nok industriell økologi noe for deg. Dette er en to-årig internasjonal master på NTNU hvor du lærer om samspillet mellom mennesker, industri og natur. Ved industriell økologi er det fire hovedområder du kan spesialisere deg innen økosystemer og naturressurser, sirkulær økonomi, energi, bygninger og transport  og bærekraftig produksjon og forbruk. Industriell økologi er en tverrfaglig master. Dette vil si at du kan begynne på denne masteren uansett hvilken bachelorgrad du har tatt, så lenge du har minst 7,5 studiepoeng i statistikk. Dette betyr også at du får studere med personer som har helt ulike studiebakgrunner (og som kommer fra hele verden!). Selv tok jeg en bachelorgrad i anvendt matematikk ved INSA Toulouse i Frankrike og deretter et år med biologi på NTNU. Dersom du er opptatt av bærekraft og ønsker å jobbe innen et bredt og internasjonalt fagfelt, er denne mastergraden perfekt for deg!"}
                        NTNU={"https://www.ntnu.no/indecol"}
                        egetOpptak={true} 
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
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"60,3"}
                        snittFør={"64,2"}
                        VGSfag={""}
                    />
                    <Studie 
                        ref={this.kjemi}
                        name={"Industriell kjemi og bioteknologi"}
                        video={"https://www.youtube.com/embed/-egvgEP1nO0"}
                        p1={"Industriell kjemi og bioteknologi hjelper deg med å forstå verden både på et mikroskopisk nivå og i storskala på industrielt nivå. Vil du være en del av utviklingen innenfor alt fra genforskning til hydrogendrevne biler, da bør du søke industriell kjemi!"}
                        p2={"Industriell kjemi og bioteknologi handler ikke bare om reaksjoner mellom grunnstoff og det mange forbinder med klassisk kjemi fra videregående. Om du er interessert i teknologi og naturfag, er dette kanskje en linje for deg!  De to første årene gir deg en god innføring i alle realfag, noe som er viktig for å kunne forstå hvorfor kjemien er slik den er. Etter andre året velger man spesialisering innenfor bioteknologi, kjemi, kjemisk prosessteknologi eller materialteknologi og energiteknologi.  Som sivilingeniør innenfor et raskt voksende fagfelt blir du svært attraktiv blant arbeidsgivere. Den sammensetningen av kunnskap vi får på industriell kjemi og bioteknologi er det få andre studier som tilbyr, og jobbmulighetene er derfor mange. Alle trenger en kjemiker!"}
                        NTNU={"https://www.youtube.com/embed/JORCcXuBnpw"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"54,5"}
                        snittFør={"55,7"}
                        VGSfag={"Kjemi"}
                    />
                    <Studie 
                        ref={this.kyb}
                        name={"Kybernetikk og Robotikk"}
                        video={"https://www.youtube.com/embed/quwEBGyi4Dw"}
                        p1={"Kybernetikk og Robotikk er et studie som gir deg innsikt i fremtidens teknologier; robotisering, digitalisering og automatisering er typiske ting vi driver med. Hvis du interesserer deg for matematikk eller datateknologi, eller er nysgjerrig på roboter, droner eller autonome systemer, passer dette studiet perfekt for deg!"}                     
                        p2={"Kybernetikk og Robotikk handler først og fremst om hvordan vi kan overvåke og styre kompliserte systemer. Dette høres kanskje litt fjernt ut, men det er denne teknologien som brukes i blant annet selvkjørende biler, roboter, ultralydavbildning og mye annen spennende teknologi! På studiet har vi mye laboratoriearbeid, det gir oss muligheten til å prøve ut det vi lærer i praksis og se resultater av arbeidet vårt. Kybernetikk og Robotikk er studiet for deg som synes at mange områder innenfor realfag er spennende. I løpet av studiets 5 år får man særlig god kompetanse innenfor både matematikk og datateknologi, og det er dette som danner grunnmuren for å drive med blant annet automatisering og digitalisering. Dette brede kunnskapsområdet gjør at man kan bruke utdanningen innenfor utrolig mange ulike områder.  Kanskje vil du lage selvstyrende roboter, eller ubemannete fremkomstmidler? Eller vil du jobbe innenfor helse og utvikle proteser, eller finne nye måter å detektere sykdommer? Da synes jeg du skal søke!"}
                        NTNU={"https://www.ntnu.no/studier/mttk"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"62,4"}
                        snittFør={"60,0"}
                        VGSfag={"IT, Fysikk"}
                    />
                    <Studie
                        ref={this.kommunikasjonsteknologi} 
                        name={"Kommunikasjonsteknologi"}
                        video={"https://www.youtube.com/embed/LTKCQsKcwLw"}
                        p1={"Mange spådde at internett bare kom til å være et blaff, men i dag er vi alltid koblet på nett, enten det er via ruteren hjemme eller på telefonen gjennom teletjenester. Derfor blir vi konstant utsatt for digitale angrep, men heldigvis for deg så har andre lagd løsninger som beskytter systemene og dine enheter mot digitale trusler. Kanskje du vil bli en av disse personene?"}
                        p2={"Du må ha mye kunnskap om informasjonsteknologi for å lage gode og sikre systemer. Kommunikasjonen mellom enheter skal være trygg, og det skal være minimal sjanse for at systemet slutter å fungere. Du vil de første årene lære å lage apper gjennom programmering, hvordan internett er bygd opp, hvordan du sender datapakker gjennom nettverk, hvordan du hacker andre så du vet hvordan du beskytter deg selv og mye, mye mer. Dette gjør at du kan arbeide innenfor alt som har med teknologi å gjøre. De siste to årene av studiet vil du spesialisere deg innenfor enten Informasjonssikkerhet, som vil gi deg en dypere innføring i hvordan man beskytter informasjon og mer om hacking, Digital økonomi, hvor du vil lære hvordan teknologi og digitale tjenester påvirker samfunnet og forretningsmodeller, eller Nett, tjenester og applikasjoner der du vil lære om arkitekturen som ligger bak alt av nettbaserte tjenester og bygge de slik at de er raske og stabile."}
                        NTNU={"https://www.ntnu.no/studier/mtkom"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"58,1"}
                        snittFør={"56,5"}
                        VGSfag={"IT"}
                    />
                    <Studie 
                        ref={this.lektor}
                        name={"Lektorutdanning i Realfag"}
                        video={"https://www.youtube.com/embed/I33gaZO-IWI"}
                        p1={"Har du lyst til å utvikle din faglige interesse for realfag og samtidig synes formidling er spennende? Da kan lektorutdanningen i realfag være noe for deg. Du får bred realfaglig og teknologisk innsikt samtidig som du opparbeider deg gode pedagogisk evner. Dette gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig sektor. "}                     
                        p2={"Er du glad i mennesker, har en iver for realfag og har lyst til at flere skal se gleden, nytten og fasinasjonen med realfag? Da kan lektorutdanningen i realfag være noe for akkurat deg! Lektorutdanningen i realfag gir deg en unik kompetanse i realfagene du brenner mest for, samtidig som du gjennom praksis i studiet får en solid pedagogisk bakgrunn. Du kan være med på å skape teknologiske løsninger for en bærekraftig fremtid, eller finne ut hvordan programmering og digital undervisning best kan implementeres i skolen. Begge deler er mulig på lektorstudiet! Du velger først to av fagene kjemi, fysikk, biologi, informatikk og matte, og fordyper deg videre i ett av fagene. På den måten har du faktisk muligheten til å få to utdanninger på 5 år, både lektorgraden OG en master i et valgt realfag på lik linje med alle som studerer det realfaget. Det er kult og unikt, og gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig næringsliv."}
                        NTNU={"https://www.ntnu.no/studier/mlreal"}
                        fagkrav={"R1(S1 og S2), 35 skolepoeng"}
                        snittOrd={"53,7"}
                        snittFør={"51,8"}
                        VGSfag={"IT"}
                    />
                    <StudieMarin 
                        ref={this.marin}
                        name={"Marin teknikk"}
                        video={"https://www.youtube.com/embed/aNyX2zF-i2w"}
                        NTNU={"https://www.ntnu.no/studier/mtmart"}
                    />
                    <Studie 
                        ref={this.maskin}
                        name={"Maskiningeniør "}
                        video={"https://www.youtube.com/embed/PTM14pvsZ6M"}
                        p1={"Som Maskiningeniør lærer du hvordan mekanismer fungerer på innsiden og du lærer hvordan det blir produsert. Alt fra dørhåndtak, vaskemaskin, Coca-Cola bok og jetmotorer og mer. Vil du være med å utvikle produkter og/eller maskiner, kanskje nettopp din oppfinnsomhet og kreativitet gjør deg til den nye Elon Musk?"}
                        p2={"Har du interesse for «duppe-dingser» er dette en linje for deg. Du kan velge mellom tre fordypninger: Drift og vedlikehold, VVS og Konstruksjonsteknikk."}
                        p3={"Drift og vedlikehold: Her er fokuset på hvordan du opererer maskiner og hvordan å drive dem, pluss hvor ofte det skal gjennomføre service."}
                        p4={"VVS (Varme, Ventilasjon og Sanitærteknikk): Her er fokuset på rør og «piping-design». Hydraulikk, pumper og rør-anlegg med olje, vann eller luft, er begreper du kommer innom. Har du noen gang kjent hvor tett og tung luften blir i et klasserom når ventilasjonen stenges?"}
                        p5={"Konstruksjonsteknikk: (Det jeg har valgt og kan mest om) Her lærer du å jobbe med materialet og dimensjonere. Du får et dypdykk i hvordan industrien kan fokusere på robust-het, design, sikkerhet, kvalitet og kvantitet. Det er et eget sveisekurs i 3.-året og du kan få litt praktisk erfaring på verkstedet til NTNU."}
                        p6={"Som maskiningeniør lærer du masse om mekanismer, produksjon og materialer. Hvorfor er så mange flasker som er laget av plast? Hvordan lager du en kirkeklokke som veier 4 tonn? Og hva er forskjellen mellom å lage én Coca-Cola boks og en million? Hvordan ville du valgt å lage den ene boksen. Er det verdt å kjøpe en maskin for 5 millioner kroner for å lage kun én? Med hva du lærer kan du hjelpe en bedrift til å spare millioner av kroner ved å øke produktiviteten/effetiviteten. Og som sagt i filmen, du kan bli nesten alt som omhandler maskiner."}
                        p7={"Dette er bacheloren Maskiningeniør, linja «Produksjon og produktutvikling» er mastergraden til Maskiningeniør. De er ikke helt like, men omfatter det samme. Jeg har noen venner som startet på bacheloren, men fant ut at de heller ville ta masteren. De fullførte førsteåret og startet på masteren etter det en annen valgte å bli lærer, som er helt normalt, det er lov og ombestemme seg. Jeg derimot likte maskiningeniør bacheloren så jeg fortsatte med den. Etter mine 3 år kan jeg søke om å ta en master. Det nye masterstudiet vil da vare 2 år, og jeg har brukt akkurat like lang tid på min master som om det var det jeg valgte fra starten av. Eneste forskjellen er at jeg hadde valget med å gå ut i jobb etter 3 år, det kan man ikke med master (du må fullføre). Men igjen, Master er en høyere tittel og det er lettere å få seg jobb etterpå."}
                        p8={"Om du får innvilget opptak på Maskiningeniør bachelor har vi (linjeforeningen) hatt som tradisjon å ringe hver enkelt å sørge for at alle vet hva som skjer etter sommerferien. De svarer også på spørsmål om du har noen."}                       
                        NTNU={"https://www.ntnu.no/studier/bimaskin"}
                        fagkrav={"R1, R2, Fysikk 1"}
                        snittOrd={"52,3"}
                        snittFør={"49,5"}
                        VGSfag={"Fysikk"}
                    />
                    <Studie 
                        ref={this.nano}
                        name={"Nanoteknologi"}
                        video={"https://www.youtube.com/embed/gSSXEoTDD7M"}
                        p1={"Hvordan kan atomer og molekyler settes sammen til nye typer materialer? Hvordan kan vi bygge nye komponenter for diagnostikk og medisinering, ren energiteknologi og nye elektroniske innretninger? Nanoteknologi handler om å studere og manipulere ulike materialer helt nede på atomnivå. Nanoteknologiutdanningen er tverrfaglig. Den kombinerer fagområdene fysikk, kjemi og biologi. Nanoteknologi gir muligheter til å designe materialer, systemer og komponenter med unike egenskaper som igjen åpner opp for framstilling av produkter med helt nye kvaliteter."}
                        NTNU={"https://www.ntnu.no/studier/mtnano"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"62,2"}
                        snittFør={"61,1"}
                        VGSfag={"Fysikk, kjemi"}
                    />
                    <Studie 
                        ref={this.pup}
                        name={"Produksjon og produktutvikling"}
                        video={"https://www.youtube.com/embed/v4ITGojUNT0"}
                        p1={"Produksjon og produktutvikling er et utrolig gøy studie som byr på mye praktisk gjennom fagene. Man lærer hvordan man kan bidra til nyskapning, hvordan utvikle produkter på best mulig måte. Man er med på å forme fremtidens teknologiske løsninger."}
                        p2={"Dersom du er interessert i fysikk og matematikk, men også vil lære litt om hvordan man gjennomfører ting i praksis, er dette studiet for deg! Et produkt er mye mer enn bare en dings man kan ha i hånden, det er alt fra elektriske biler til en prosess hvor man gjenvinner mest mulig varme. Dette studiet lærer deg om maskinkonstruksjoner, fornybar energi, litt programmering, roboteknikk og hvordan man forbedrer produksjon- og energiprosesser. Etterhvert velger man studieretning, der er det mye spennende man kan ta tak i. Man kan velge mellom Ledelse og Systemfag, Produktutvikling og Materialer, Industriell Mekanikk og Energi-, Prosess- og Strømningsteknikk. Det er en stor bredde i studiet, som igjen gjør at mange fagfelt ønsker å ha deg i bedriften sin. Du blir som en slags «potet» i ingeniørfeltet. Dette gjør at du har utrolig mange muligheter etter endt studiet! Det var noe av det viktigste for meg da jeg skulle velge hva jeg ville gjøre resten av livet."}
                        NTNU={"https://www.ntnu.no/studier/mtprod"}
                        fagkrav={"R1, R2 (Karakter 4 i R2), Fysikk 1"}
                        snittOrd={"55,0"}
                        snittFør={"53,5"}
                        VGSfag={"Matte"}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Studier);