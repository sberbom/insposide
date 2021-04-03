import React from 'react';
import '../styles/QandA.css'
import Title from '../components/title'
import Question from '../components/question'
// import QuestionForm from '../components/questionForm'

class QandA extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return(
            <div className="QandA-container">
                <Title title="Spørsmål og svar om høyere utdanning"/>
                <p className="lead">Det er utallige studiemuligheter i Norge, derfor kan det være vanskelig å få oversikt over mulighetene som er der. Kanskje er det et studie som passer perfekt for deg, men du har ikke funnet det eller skjønt helt hva det innebærer? Nedenfor har vi samlet spørsmål som gikk igjen da våre egne mentorer skulle velge høyere utdanning for at du skal slippe å lure på det samme.</p>
                <div className="FAQ-container list-group">
                    <Question
                        question="Hva er egentlig en ingeniør?"
                        p1="Kort og godt kan du se på ingeniører som realfaglige problemløsere. I hverdagen jobber ingeniører med å løse små og store problemer, for eksempel ved å utvikle ny teknologi eller anvende eksisterende teknologi på nye måter. Teknologi og løsninger utviklet av ingeniører ser man overalt i samfunnet, enten det er veiene du går på, telefonen/datamaskinen du leser dette på eller vannkraftverket som gir huset ditt strøm."
                        p2="Som ingeniør følger det et stort ansvar for å ivareta sikkerhet og trygghet for personer og miljø samtidig som du skal løse problemer på en kostnadseffektiv måte. Vi lever i en usikker tid med tanke på klimautfordringer, digitalisering og overpopulasjon, og behovet for fornybare energikilder, ny teknologi og bærekraftige løsninger blir bare større og større. Som ingeniør kan du være med på å forme fremtiden og gjøre en forskjell!"
                    />
                    <Question
                        question="Hva er “bachelor” og “master”, og hva er forskjellen på disse"
                        p1="Bachelor og master refererer til hvilken grad du vil få etter at du er ferdig med utdanningen din. Typisk er bachelorstudier i Norge 3-årige mens masterstudier er 5-årige. På NTNU i Trondheim finnes det blant annet bachelorstudier hvor du blir ingeniør og masterstudier hvor du blir sivilingeniør. Hvis du stopper med en mastergrad etter tre år vil du ikke kunne si at du har en bachelorgrad, derfor må du fullføre alle fem årene får å få en grad."
                        p2="Bachelorstudier er ofte mer praktisk rettet og fokuserer på å forberede studentene på arbeidslivet, og har ofte tett dialog med industri. På NTNU i Trondheim finnes det 8 ingeniørlinjer med bachelorgrad. I tillegg kan du velge å ta en bachelor i kjemi, fysikk, matematiske fag eller informatikk."
                        p3="Masterstudier er mer teoretisk rettet, og det er derfor et større fokus på å få en dypere teoretisk forståelse. På masterstudier lærer du ikke bare å anvende teorien, men også hvordan teorien henger sammen. På masterstudier er det større fokus på å “lære å lære”, altså vil du sitte igjen med evnen til å forstå, utvikle og anvende ny kunnskap på egenhånd. På NTNU i Trondheim finnes det 17 sivilingeniørlinjer med bachelorgrad."
                    />
                    <Question
                        question="Hva er forskjellen på sivilingeniør og ingeniør?"
                        p1="Hovedforskjellen på ingeniør og sivilingeniør er krav til utdanning. Du kan bli ingeniør etter tre års utdanning, tilsvarende en bachelorgrad, mens en sivilingeniørgrad krever fem års utdanning, tilsvarende en mastergrad."
                        p2="Typisk vil det være stor variasjon i hva en ingeniør og en sivilingeniør jobber med. Ingeniører er ofte med på å utvikle løsninger og jobber med sitt spesifikke fagområde. Ingeniører har ofte mer praktiske “hands-on” arbeidsoppgaver. Sivilingeniører jobber ofte med ledelse av ingeniørprosjekter, men de kan også jobbe som eksperter innenfor et fagområde. Sivilingeniører har ofte mer ansvar, høyere lønn og større påvirkningskraft på bedrifter og selskaper."
                        p3="Sivilingeniør er en “beskyttet tittel”, derfor må du ha tilstrekkelig utdanning for å kalle deg sivilingeniør. På samme måte er lege en beskyttet tittel – det hadde oppstått problemer hvis alle kunne kalt seg lege! Sivilingeniør-tittelen skal dermed være et kvalitetsstempel på den utdanningen du har. Ingeniør er derimot ikke en beskyttet tittel, altså er det ikke nødvendigvis et krav om utdanning for å kalle deg ingeniør."
                    />
                    <Question
                        question="Hva hvis jeg ikke vet om jeg klarer å studere i 5 år?"
                        p1="5 år er lenge, derfor kan masterstudier virke som en ekstra stor forpliktelse. Hvis du er usikker på om du ønsker å studere så lenge, kan man fullføre et bachelorstudium for deretter å søke om å ta et 2-årig studie oppå bachelorgraden. Da vil du få en mastergrad. "
                    />
                    <Question
                        question="Hva om jeg ikke liker studiet jeg har begynt på?"
                        p1="Noe av det vanskeligste med å velge studie er at det er så mye å velge mellom. Det kan være vanskelig å skille realfag- og teknologistudier ved NTNU i Trondheim, og man får ofte ikke et inntrykk av hva de ulike studiene faktisk innebærer før du begynner å studere selv. Det er kanskje litt kjipt å velge feil, men man må huske på at ingenting er bortkastet! En fordel i Trondheim er at det er mange studier som godtar det man kaller “intern overgang”, som innebærer at du kan bytte til et annet, liknende studie uten å søke via Samordna Opptak."
                    />
                    <Question
                        question="Hvor gode karakterer må jeg ha?"
                        p1="For opptak til 5-årige masterprogram i teknologi/sivilingeniør ved NTNU kreves R1+R2 og Fysikk 1 fra videregående skole, og med karakter 4 eller bedre i R2."
                        p2="Hvis det er mange søkere til et studium, går karaktersnittet opp. Det er dermed svært ulikt mellom de ulike studiene."
                    />
                    <Question
                        question="Hvor kan jeg finne ut hvilke fag jeg må ha for å komme inn på et studie?"
                        p1="Dette kan du gjøre via “studieoversikten” på Samordna Opptak sine nettsider. Der kan du velge studie(r) du er interessert i. Så trykker du på informasjonstegnet ved “opptakskrav”, og det vil komme opp hvilke fag studiet krever. Der kan du også se fjorårets studiepoengkrav."
                    />
                    <Question
                        question="Hvordan kan jeg bo når jeg studerer?"
                        p1="Studentsamskipnaden har både kollektiv (hvor flere bor sammen), parleiligheter og enmannsleiligheter til leie. Dette er trygt å leie, og de prøver å holde prisene så lave de kan for oss studenter. Det er vanlig å flytte inn i kollektiv med mange du ikke kjenner, men du kan også skrive opp ønske om hvem du vil bo med. Dette kan du lese mer om her: https://www.sit.no/hybel/sok-bolig. Om du vil studere et annet sted en Trondheim, Ålesund eller Gjøvik, har de studentsamskipnader der også, som du kan finne ved å søke det opp. Det går også an å leie privat eller kjøpe selv."
                    />
                    <Question
                        question="Hva er “stipend” og “studielån”?"
                        p1="Studielån er et lån alle studenter får fra Lånekassen. Etter fullført studium vil 40% av lånet bli omgjort til stipend om du har fått alle studiepoengene som kreves for lånet. Det vil si at du får 40%, mens resten blir gjort om til et lån. Det kreves 30 studiepoeng per semester. Dette lånet trenger du ikke å betale renter på før etter du har sluttet å studere, og derfor er det et veldig bra lån å ha!"
                    />
                    <Question
                        question="Hva skjer om jeg ikke har de fagene som trengs for å komme inn på det studiet jeg vil?"
                        p1="NTNU tilbyr forkurs, som går over enten ett eller to semester. Der kan man få de fagene man trenger for å komme inn på ingeniørstudiet. Dette kan du lese mer om på https://www.ntnu.no/studier/ftforkurs"
                    />
                    {/* <QuestionForm /> */}
                </div>
            </div>
        )
    }
}

export default QandA;