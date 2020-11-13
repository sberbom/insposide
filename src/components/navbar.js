import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import '../styles/navbar.css'

function SBNavbar(props)  {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
            <Link to="/" className="navbar-brand">
                <img
                    alt="logo"
                    src={"https://firebasestorage.googleapis.com/v0/b/insposide.appspot.com/o/logo.png?alt=media&token=cc698c58-cb9e-44a8-8d39-f48e87cc02b0"}
                    width="140"
                    height="40"
                    className="d-inline-block align-top"
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/">Hjem</Link>
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/info">Infomasjon</Link>
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/studier">Studier</Link>
                    {/* <Link className="nav-link" onClick={() => setExpanded(false)} to="/klasserom">Klasserom</Link> */}
                    <NavDropdown title="Mer" id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-item" onClick={() => {props.history.push('/ressurser'); setExpanded(false)}}>Nyttige linker</NavDropdown.Item>
                        {/* <NavDropdown.Item className="dropdown-item" onClick={() => {props.history.push('/spørsmål_og_svar'); setExpanded(false)}}>Spørsmål og svar</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item target="_blank" className="dropdown-item" href="http://ent3r.no">ENT3R.no</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" className="dropdown-item" href="https://www.instagram.com/ent3r_trondheim/?hl=nb">Instagram</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" className="dropdown-item" href="https://elevkveld.no">Elevkveld</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
        
export default withRouter(SBNavbar);