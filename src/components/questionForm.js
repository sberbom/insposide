import React from 'react';
import { Form, Button } from "react-bootstrap";
import firebase from '../firebase'
import 'firebase/firestore';
import '../styles/questionForm.css'

class QuestionForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.nameRef = React.createRef()
        this.responseRef = React.createRef()
        this.questionRef = React.createRef()
    }

    submit = () => {
        const db = firebase.firestore()
        db.collection("questions").add({
            name: this.nameRef.current.value,
            response: this.responseRef.current.value,
            question: this.questionRef.current.value,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            
        })
        .then(this.reset())
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    reset = () => {
        this.nameRef.current.value = ""
        this.responseRef.current.value = ""
        this.questionRef.current.value = ""
    }
    
    render() {
        return(
            <div className="questionForm-container card">
                <h3 className="center">Send inn ditt spørsmål</h3>
                <Form>
                    <Form.Group controlId="name" >
                        <Form.Label>Navn: </Form.Label>
                        <Form.Control placeholder="Kari Normann" ref={this.nameRef}/>
                    </Form.Group>

                    <Form.Group controlId="response">
                        <Form.Label>Hvordan vil du ha svar på spørsmålet ditt? </Form.Label>
                        <Form.Control placeholder="Telefonnummer, e-post, ..." ref={this.responseRef} />
                    </Form.Group>

                    <Form.Group controlId="question">
                        <Form.Label>Spørsmål </Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Jeg lurer på ..." ref={this.questionRef} />
                    </Form.Group>

                    <Button variant="primary" onClick={this.submit}>
                        Send inn
                    </Button>
                </Form>
            </div>
        )
    }
}

export default QuestionForm;