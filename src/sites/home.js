import React from 'react';
import Header from '../components/header'
import SBCard from '../components/card'
import Survey from '../components/survey'
import '../styles/card.css'

import Selda_flamme from '../files/Selda_flamme.JPG'
import håvard from '../files/håvard_cut.jpg'
import saeid from '../files/saeid_cut.jpg'
import andrea from '../files/andrea_cut.jpg'
import lene from '../files/lene.jpeg'
import agata from '../files/agata_cut.jpg'
import carl_fredrik from '../files/carl_fredrik_cut.jpg'
import sina from '../files/sina_cut.jpg'
import tobias from '../files/tobias.jpeg'
import martine from '../files/martine_cut.jpg'
import kristin from '../files/kristin_cut.jpg'


class Home extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        return(
            <div className="home-container">
                <Header 
                backgroundImage={Selda_flamme}
                text={"Lær mer om studiene på NTNU"}
                />
                <div className="card-container">
                    <SBCard
                        title={"Komunnikasjonsteknologi"}
                        splitTitle={"Komunnikasjons-teknologi"}
                        description={"Mange spådde at internett bare kom til å være et blaff, men i dag er vi alltid koblet på nett, enten det er via ruteren hjemme eller på telefonen gjennom teletjenester. Derfor blir vi konstant utsatt for digitale angrep, men heldigvis for deg så har andre lagd løsninger som beskytter systemene og dine enheter mot digitale trusler. Kanskje du vil bli en av disse personene?"}
                        image = {håvard}
                        />
                    <SBCard
                        title={"NTNUs Entreprenørskole"}
                        description={"Viste du at selskapet bak de kule sekkene fra Douchebags ble starte på NTNUs Entreprenørskole? Eller har du hørt om selskapet Ntention fra samme skole som lager smarte hansker til NASAs astronauter som skal utforske Mars? På NTNUs Entreprenørskole skal du sammen med et team starte et reelt oppstartselskap for å lære om entreprenørskap og teknologi i praksis og for å skape din egen drømmejobb som gründer."}
                        image = {saeid}
                        />
                    <SBCard
                        title={"Industriell økologi"}
                        description={"Industriell økologi er en to-årig internasjonal master på NTNU hvor du lærer om hvordan mennesker og industri påvirker naturen og hvordan vi kan og bør utforme og endre teknologi, forbruk og levemønster for å ta best mulig vare på jordkloden vår. "}
                        image = {andrea}
                        />
                    <SBCard
                        title={"Produksjon og produktutvikling"}
                        description={"Produksjon og produktutvikling er et utrolig gøy studie som byr på mye praktisk gjennom fagene. Man lærer hvordan man kan bidra til nyskapning, hvordan utvikle produkter på best mulig måte. Man er med på å forme fremtidens teknologiske løsninger."}
                        image = {lene}
                        />
                    <SBCard
                        title={"Fornybar energi"}
                        description={"Utslipp av klimagasser er en av de største truslene mot menneskeheten i dag. Dette synliggjøres blant annet gjennom ekstremvær, vannmangel og utrydding av arter. Men verden trenger stadig mer energi. Hvordan løser vi dette?"}
                        image = {agata}
                        />
                    <SBCard
                        title={"Elektronisk systemdesign og innovasjon"}
                        description={"Elektroniske Systemer og Innovasjon er et praktisk studieprogram hvor man lærer masse om elektronikk og programmering. Med denne kunnskapen har man muligheten til å være med på utviklingen av mange forskjellige fagfelt som helseteknologi, romteknologi, kunstig intelligens og mye mer!"}
                        image = {carl_fredrik}
                        />
                    <SBCard
                        title={"Kybernetikk og Robotikk"}
                        description={"Kybernetikk og Robotikk er et studie som gir deg innsikt i fremtidens teknologier; robotisering, digitalisering og automatisering er typiske ting vi driver med. Hvis du interesserer deg for matematikk eller datateknologi, eller er nysgjerrig på roboter, droner eller autonome systemer, passer dette studiet perfekt for deg!"}
                        image = {sina}
                        />
                    <SBCard
                        title={"Industriell økonomi og teknologiledelse"}
                        description={"Sivilingeniørutdanningen industriell økonomi og teknologiledelse (Indøk) er et tverrfaglig masterprogram ved NTNU. Tradisjonelle sivilingeniøremner kombineres med emner i ledelse og økonomi. Utdanningen er en av de mest attraktive i Norge."}
                        image = {tobias}
                        />
                    <SBCard
                        title={"Lektorutdanning i Realfag"}
                        description={"Har du lyst til å utvikle din faglige interesse for realfag og samtidig synes formidling er spennende? Da kan lektorutdanningen i realfag være noe for deg. Du får bred realfaglig og teknologisk innsikt samtidig som du opparbeider deg gode pedagogisk evner. Dette gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig sektor. "}
                        image = {martine}
                        />
                    <SBCard
                        title={"Bygg- og miljøteknikk"}
                        description={"Vil du være med å forme verden? Vil du sørge for rent drikke vann? Energi effektivisere bygninger? Bidra til å bygge miljøvennlig? Løse storbyers trafikkproblemer? Vil du studere noe håndfast som gir tydelige resultater?"}
                        image = {kristin}
                        />
                    <SBCard
                        title={"Industriell kjemi og bioteknologi"}
                        description={""}
                        image = {""}
                        />
                    <SBCard
                        title={"Datateknologi"}
                        description={"Datateknologi står sentralt i all framtidsrettet teknologi, og du kan lære alt fra temaer som kunstig intelligens til spillteknologi og programvareutvikling. Med en master i Datateknologi blir du svært ettertraktet i jobbmarkedet, og du vil kunne få kompetanse til å løse viktige samfunnsutfordringer."}
                        image = {""}
                        />
                </div>
                <Survey />
            </div>
        )
    }
}

export default Home;