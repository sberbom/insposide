import React from 'react';
import Header from '../components/header'
import SBCard from '../components/card'
import '../styles/card.css'

class Home extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        return(
            <div className="home-container">
                <Header 
                backgroundImage={"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/NTNU.jpg?alt=media&token=05257554-bf64-4833-aa52-bf504431b480"}
                text={"Lær mer om teknologistudiene på NTNU"}
                />
                <div className="card-container">
                    <SBCard
                        title={"Lektorutdanning i Realfag"}
                        description={"Har du lyst til å utvikle din faglige interesse for realfag og samtidig synes formidling er spennende? Da kan lektorutdanningen i realfag være noe for deg. Du får bred realfaglig og teknologisk innsikt samtidig som du opparbeider deg gode pedagogisk evner. Dette gjør deg attraktiv som arbeidstaker både i skolen (8.-13. trinn) og i privat/offentlig sektor. "}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/martine_cut.jpg?alt=media&token=b1292946-f5d0-4c4b-a76c-8125ff0d8f8c"}
                        />
                    <SBCard
                        title={"Bygg- og miljøteknikk"}
                        description={"Vil du være med å forme verden? Vil du sørge for rent drikkevann? Energi effektivisere bygninger? Bidra til å bygge miljøvennlig? Løse storbyers trafikkproblemer? Vil du studere noe håndfast som gir tydelige resultater?"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/kristin_cut.jpg?alt=media&token=a840348a-d5b5-4d47-aa12-96f14dc34add"}
                        />
                    <SBCard
                        title={"Kommunikasjonsteknologi"}
                        splitTitle={"Kommunikasjons-teknologi"}
                        description={"Mange spådde at internett bare kom til å være et blaff, men i dag er vi alltid koblet på nett, enten det er via ruteren hjemme eller på telefonen gjennom teletjenester. Derfor blir vi konstant utsatt for digitale angrep, men heldigvis for deg så har andre lagd løsninger som beskytter systemene og dine enheter mot digitale trusler. Kanskje du vil bli en av disse personene?"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/h%C3%A5vard_cut.jpg?alt=media&token=8953bd52-ed5e-49f2-9d53-99903627eae4"}
                        />
                    <SBCard
                        title={"NTNUs Entreprenørskole"}
                        description={"Visste du at selskapet bak de kule sekkene fra Douchebags ble starte på NTNUs Entreprenørskole? Eller har du hørt om selskapet Ntention fra samme skole som lager smarte hansker til NASAs astronauter som skal utforske Mars? På NTNUs Entreprenørskole skal du sammen med et team starte et reelt oppstartselskap for å lære om entreprenørskap og teknologi i praksis og for å skape din egen drømmejobb som gründer."}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/saeid_cut.jpg?alt=media&token=7e1c8092-c51d-4b7e-8161-226276431b44"}
                        />
                    <SBCard
                        title={"Industriell økologi"}
                        description={"Industriell økologi er en to-årig internasjonal master på NTNU hvor du lærer om hvordan mennesker og industri påvirker naturen og hvordan vi kan og bør utforme og endre teknologi, forbruk og levemønster for å ta best mulig vare på jordkloden vår. "}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/andrea_cut.jpg?alt=media&token=89ea50f1-13ab-46c0-84f9-fe9f12bfaace"}
                        />
                    <SBCard
                        title={"Produksjon og produktutvikling"}
                        description={"Produksjon og produktutvikling er et utrolig gøy studie som byr på mye praktisk gjennom fagene. Man lærer hvordan man kan bidra til nyskapning, hvordan utvikle produkter på best mulig måte. Man er med på å forme fremtidens teknologiske løsninger."}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/lene.jpeg?alt=media&token=09774b7d-1462-48a4-9c36-62f17f58f41f"}
                        />
                    <SBCard
                        title={"Fornybar energi"}
                        description={"Utslipp av klimagasser er en av de største truslene mot menneskeheten i dag. Dette synliggjøres blant annet gjennom ekstremvær, vannmangel og utrydding av arter. Men verden trenger stadig mer energi. Hvordan løser vi dette?"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/agata_cut.jpg?alt=media&token=166cb2a4-7e05-4a36-80a7-c024dfc7d864"}
                        />
                    <SBCard
                        title={"Elektronisk systemdesign og innovasjon"}
                        description={"Elektroniske Systemer og Innovasjon er et praktisk studieprogram hvor man lærer masse om elektronikk og programmering. Med denne kunnskapen har man muligheten til å være med på utviklingen av mange forskjellige fagfelt som helseteknologi, romteknologi, kunstig intelligens og mye mer!"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/carl_fredrik_cut.jpg?alt=media&token=68ae149a-9e4b-4a03-a63c-669459fd0e7a"}
                        />
                    <SBCard
                        title={"Kybernetikk og Robotikk"}
                        description={"Kybernetikk og Robotikk er et studie som gir deg innsikt i fremtidens teknologier; robotisering, digitalisering og automatisering er typiske ting vi driver med. Hvis du interesserer deg for matematikk eller datateknologi, eller er nysgjerrig på roboter, droner eller autonome systemer, passer dette studiet perfekt for deg!"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/sina_cut.jpg?alt=media&token=79f2d537-54f2-45ee-8658-0595f2d66318"}
                        />
                    <SBCard
                        title={"Industriell økonomi og teknologiledelse"}
                        description={"Sivilingeniørutdanningen industriell økonomi og teknologiledelse (Indøk) er et tverrfaglig masterprogram ved NTNU. Tradisjonelle sivilingeniøremner kombineres med emner i ledelse og økonomi. Utdanningen er en av de mest attraktive i Norge."}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/tobias.jpeg?alt=media&token=0e66a408-93e5-43a5-ae20-d90c413e106d"}
                        />
                    <SBCard
                        title={"Industriell kjemi og bioteknologi"}
                        description={"Industriell kjemi og bioteknologi hjelper deg med å forstå verden både på et mikroskopisk nivå og i storskala på industrielt nivå. Vil du være en del av utviklingen innenfor alt fra genforskning til hydrogendrevne biler, da bør du søke industriell kjemi!"}
                        image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6W_B3AiQ97WiKjJtgbJb4Srr1CuQslpZOpDNRZ1LLK3UnpQjF&usqp=CAU"}
                        />
                    <SBCard
                        title={"Energi og miljø"}
                        description={"På Energi og miljø lærer man om og hvordan man kan bruke teknologi for å produsere fornybar energi og hvordan samfunnet som helhet kan bli mer miljøvennlig. Studiet gir deg den faglige tyngden slik at du kan være med å tenke ut fremtidens løsninger. Dette gjør studiet svært spennende og givende!"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/agnes_cut.jpeg?alt=media&token=d023f109-c7a5-4d6e-803e-8a71e1149f28"}
                        />
                    <SBCard
                        title={"Datateknologi"}
                        description={"Datateknologi står sentralt i all framtidsrettet teknologi, og du kan lære alt fra temaer som kunstig intelligens til spillteknologi og programvareutvikling. Med en master i Datateknologi blir du svært ettertraktet i jobbmarkedet, og du vil kunne få kompetanse til å løse viktige samfunnsutfordringer."}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/katrine_cut.jpg?alt=media&token=5f0edd02-dc94-473a-9bc0-ed60983dcd88"}
                        />
                    <SBCard
                        title={"Fysikk og Matematikk"}
                        description={"Fysikk og Matematikk gir deg en fysisk forståelse av ALT rundt oss - både det vi kan se, men også det vi ikke kan se med det blotte øyet. Hvis du studerer Fysikk og Matematikk vil du kunne være med på å utvikle teknologi som kan brukes i alle fagfelt! "}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/selma_cut.jpg?alt=media&token=4b78af04-fc33-4432-819c-8db468d5717c"}
                        />
                    <SBCard
                        title={"Marin teknikk"}
                        description={"Har du noen gang sett på flytende vindmøller, en oljeplattform eller et fullastet containerskip og lurt på hvordan det fungerer, utvikles og lages? Da er marin et studie for deg!"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/fredrik.jpg?alt=media&token=f006a776-e6f9-4f32-9974-55686c3b6233"}
                        />
                    <SBCard
                        title={"Maskiningeniør"}
                        description={"Som Maskiningeniør lærer du hvordan mekanismer fungerer på innsiden og du lærer hvordan det blir produsert. Alt fra dørhåndtak, vaskemaskin, Coca-Cola bok og jetmotorer og mer. Vil du være med å utvikle produkter og/eller maskiner, kanskje nettopp din oppfinnsomhet og kreativitet gjør deg til den nye Elon Musk?"}
                        image = {"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/asbj%C3%B8rn_cut.jpg?alt=media&token=d2d9b5a0-45c3-4cd2-b10d-645a5080cbf0"}
                        />
                </div>
            </div>
        )
    }
}

export default Home;