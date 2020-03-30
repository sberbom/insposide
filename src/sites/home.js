import React from 'react';
import Header from '../components/header'
import SBCard from '../components/card'
import '../styles/card.css'

import Selda_flamme from '../files/Selda_flamme.JPG'


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
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "}
                        image = {Selda_flamme}
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