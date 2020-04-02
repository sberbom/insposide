import React from 'react';
import Header from '../components/header'
import SBCard from '../components/card'
import '../styles/card.css'

import Selda_flamme from '../files/Selda_flamme.JPG'
import håvard from '../files/håvard.jpg'



class Home extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        return(
            <div>
                <Header 
                backgroundImage={Selda_flamme}
                text={"Lær mer om studiene på NTNU"}
                />
                <div className="card-container">
                    <SBCard
                        title={"Industiell kjemi og bioteknologi"}
                        description={"Studiet mitt er det beste her får jeg mulighet til å blande ting som kanskje kan sprenge i lufta og eksplodere! Dette er veldig kult. Her en gang så måtte vi "}
                        image = {Selda_flamme}
                        />
                    <SBCard
                        title={"Komunnikasjonsteknologi"}
                        splitTitle={"Komunnikasjons-teknologi"}
                        description={"Mange spådde at internett bare kom til å være et blaff, men i dag er vi alltid koblet på nett, enten det er via ruteren hjemme eller på telefonen gjennom teletjenester. Derfor blir vi konstant utsatt for digitale angrep, men heldigvis for deg så har andre lagd løsninger som beskytter systemene og dine enheter mot digitale trusler. Kanskje du vil bli en av disse personene?"}
                        image = {håvard}
                        />
                    <SBCard
                        title={"Datateknologi"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is "}
                        image = {Selda_flamme}
                        />
                    <SBCard
                        title={"Energi og Miljø"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is "}
                        image = {Selda_flamme}
                        />
                    <SBCard
                        title={"Marin"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is "}
                        image = {Selda_flamme}
                        />
                    <SBCard
                        title={"Fysikk og mattematikk"}
                        description={"Fysikk og Matematikk gir deg en fysisk forståelse av ALT rundt oss - både det vi kan se, men også det vi ikke kan se med det blotte øyet. Hvis du studerer Fysikk og Matematikk vil du kunne være med på å utvikle teknologi som kan redde kloden!"}
                        image = {Selda_flamme}
                        />
                </div>
            </div>
        )
    }
}

export default Home;