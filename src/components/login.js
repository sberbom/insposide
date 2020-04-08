import React from 'react';
import '../styles/title.css'
import {Modal, Button, Form} from 'react-bootstrap'

class Login extends React.Component {

    componentDidMount() {
        if(this.props.show){
            document.body.style.overflow = 'hidden';
          }   
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Logg inn
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Passord</Form.Label>
                            <Form.Control type="password" placeholder="Passord" ref={this.props.passwordRef}/>
                            {this.props.error && <Form.Text className="text-muted">
                                Feil passord
                            </Form.Text>}
                        </Form.Group> 
                    </Form>
                    <Button onClick={this.props.onSignIn}>Logg inn</Button>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <p>For å få tillgang til klasserommene må du være elev hos ENT3R Trondheim. Er du usikker på hva passordet er kan du spørre din mentor.</p>
                        <p>Er du ikke elev hos ENT3R kan du melde deg på <a href="https://reg.ent3r.no/registrer/velg" target="_blank" rel="noopener noreferrer">her</a>.</p>
                    </div>
                </Modal.Footer>
                </Modal>
            );
    }
}

export default Login;