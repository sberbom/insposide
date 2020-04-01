import React, {useState} from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import ENT3RLogo from '../files/logo.png'
import '../styles/navbar.css'

function SBNavbar(props)  {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
            <Link to="/" className="navbar-brand">
                <img
                    alt="logo"
                    src={ENT3RLogo}
                    width="140"
                    height="40"
                    className="d-inline-block align-top"
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/">Hjem</Link>
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/studier">Studier</Link>
                    <Link className="nav-link" onClick={() => setExpanded(false)} to="/klasserom">Klasserom</Link>
                    <Nav.Link target="_blank" href="http://ent3r.no">ENT3R.no</Nav.Link>
                    <Nav.Link target="_blank" href="https://www.instagram.com/ent3r_trondheim/?hl=nb">Instagram</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
        
export default withRouter(SBNavbar);