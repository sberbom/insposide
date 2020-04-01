import React from 'react';
import '../styles/klasserom.css'

function Klasserom(props) {
        return(
            <div>
                <div class="jumbotron-klasserom j_forside-klasserom"></div>
                <div class="info-container-klasserom">
                <div class="info-text-klasserom"> 
                    <h3>Informasjon om <br class="mobile-klasserom"/> ENT3R Trondheim og COVID-19</h3>
                    <p class="lead-klasserom">
                        I forbindelse med spredningen av koronaviruset har ENT3R Trondheim bestemt å 
                        avlyse alle fysiske ENT3R-timer. 
                        Vi skal allikevel arrangere ENT3R-timer, men dette blir over internett og vår digitale 
                        plattform ENT3R digital. Nedenfor finner du informasjon om hvordan du bruker ENT3R digital 
                        og link til ditt klasserom. Klasserommet er åpent 16:00 - 18:00. På ENT3R digital vil du møte minst én av dine vanlige mentorer på 
                        din vanlige dag. Vi gleder oss til å se deg på ENT3R digital!
                    </p>
                    <h3>Finn ditt klasserom</h3>
                    <div>
                        <ul class="list-group-klasserom desktop-klasserom">
                            <li class="list-group-item">Ungdomsskole : <br/><a href="https://eu.bbcollab.com/guest/74c27af156f74dc0b47e3dc8d7bb2dfe">https://eu.bbcollab.com/guest/74c27af156f74dc0b47e3dc8d7bb2dfe</a></li>
                            <li class="list-group-item">VG1: <br/><a href="https://eu.bbcollab.com/guest/ca49490225664bf9988e53f51bf039b8">https://eu.bbcollab.com/guest/ca49490225664bf9988e53f51bf039b8</a></li>
                            <li class="list-group-item">VG2/VG3: <br/><a href="https://eu.bbcollab.com/guest/70013147571145a0bee93225595248f9">https://eu.bbcollab.com/guest/70013147571145a0bee93225595248f9</a></li>
                        </ul>
                        <ul class="list-group-klasserom mobile-klasserom">
                            <li class="list-group-item">Ungdomskole : <br/><a href="https://eu.bbcollab.com/guest/74c27af156f74dc0b47e3dc8d7bb2dfe">https://eu.bbcollab.com/guest/74...</a></li>
                            <li class="list-group-item">VG1: <br/><a href="https://eu.bbcollab.com/guest/ca49490225664bf9988e53f51bf039b8">https://eu.bbcollab.com/guest/ca...</a></li>
                            <li class="list-group-item">VG2/VG3: <br/><a href="https://eu.bbcollab.com/guest/70013147571145a0bee93225595248f9">https://eu.bbcollab.com/guest/70...</a></li>
                        </ul>
                    </div>
                    <h3>Hva er ENT3R Digital?</h3>
                    <p>
                        ENT3R digital fungerer som vanlig ENT3R, med unntak av at timene gjennomføres digitalt På ENT3R 
                        digital kommer du først inn i hoverommet sammen med alle andre elever fra ditt trinn. 
                        Der kan du velge å rekke opp hånda. Rekker du opp hånda flytter mentoren deg inn i et grupperom. 
                        Der kan du og mentoren snakke sammen via video og lyd. Det er kun deg og mentoren din som kan høre 
                        hva dere snakker om. Mentoren har tegnebrett, og kan dermed tegne og forklare oppgaver eller temaer
                        du lurer på.
                    </p>
                    <div class="video-container-klasserom mobile-klasserom">
                        <iframe class="video-iframe-klasserom" title="beskrivelseDigital" src="https://www.youtube.com/embed/OgbKGejVW0k"></iframe>
                    </div>
                    <div class="card card-klasserom widthAuto-klasserom">
                        <div class="card-body card-body-klasserom">
                            <h3 class="card-title">Tips til ENT3R Digital</h3>
                            <ul>
                                <li class="card-text-klasserom">Bruk Google Chrome - Vi har erfarte at Google Chrome er den beste nettleseren for ENT3R digita</li>
                                <li class="card-text-klasserom">Bruk headset - Hvis man bruker ENT3R digital uten headset kan det bli ekko for mentoren, 
                                    noe som kan gjøre det vanskelig å hjelpe
                                </li>
                                <li class="card-text-klasserom">Kontroller at nettleseren har tillatelse til å bruke både kameraet og mikrofonen på datamaskinen din</li>
                                <li class="card-text-klasserom">Bruker du iPad? - For å kunne bruke iPad må du installere gratis-app’en «Blackboard Collaborate»</li>
                                <li class="card-text-klasserom">Spør om hjelp! - I ENT3R digital er det vanskelig for mentoren å se om du trenger hjelp. 
                                    Ikke vær redd for å rekke opp hånda. Mentorene er der for å hjelpe deg!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="video-container-klasserom desktop-klasserom">
                <iframe class="video-iframe-klasserom" title="beskrivelseDigital" src="https://www.youtube.com/embed/OgbKGejVW0k"></iframe>
            </div>
        </div>
        )
}

export default Klasserom;