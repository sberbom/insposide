import React from 'react';
import '../styles/studie.css'

const StudieMarin = React.forwardRef((props, ref) => (
    <div className="studie-container" ref={ref}>
        {props.splitName ?
        <div>
            <h2 className="study-title-split">{props.name}</h2>
            <h2 className="study-title-split-mobile">{props.splitName}</h2>
        </div>
        :
        <h2 className="study-title">{props.name}</h2>
        }
        {props.image && <img className="study-header" src={props.image} alt="study" />}
        {props.video && <iframe className="study-video" allowFullScreen="allowfullscreen" src={props.video} title={props.name}></iframe>}
        <p>Har du noen gang sett på flytende vindmøller, en oljeplattform eller et fullastet containerskip og lurt på hvordan det fungerer, utvikles og lages? Da er marin et studie for deg!</p>
        <p>På marin teknikk lærer du  å utvikle løsninger som skal operere under ekstreme omgivelser både på havoverflaten og havbunnen. Dette kan være skip, plattformer, vindmøller, undervannsroboter og havmerder for fiskeoppdrett.</p>
        <p>Som kystnasjon har Norge bred erfaring innen utnytting av maritime ressurser og utvikling av maritim teknologi, og den kompetansen man får ved å studere marin teknikk i Trondheim er blant de beste i verden. Marin teknikk vil spille en viktig rolle for å skape et bærekraftig samfunn, og vi er derfor helt avhengig av å lage nye, fornybare løsninger også på havet – dette kan du være med på hvis du studerer marin teknikk! Se mer om studiet <a href="https://www.youtube.com/watch?v=TEGKpzlrFtM" rel="noopener noreferrer" target="_blank">her</a>.</p>
        <p>Marin teknikk er det eneste sivilingeniørstudiet på NTNU i Trondheim med eget campus – Tyholt. Dette gjør at det sosiale er helt unikt for marin, og man får et fellesskap og samlende studentmiljø. <a href="https://www.youtube.com/watch?v=pdEkqNqGvx0" rel="noopener noreferrer" target="_blank">Her</a> kan du se mer om det sosiale på marin teknikk.</p>
        <a href={props.NTNU} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Les mer på NTNU.no</a>
    </div>
    )
);
export default StudieMarin;