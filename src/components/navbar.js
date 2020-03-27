import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import ENT3RLogo from '../files/logo.png'
import '../styles/navbar.css'

class SBNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top" >
                <Link to="/" className="navbar-brand">
                    <img
                        alt="logo"
                        src={ENT3RLogo}
                        width="140"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Hjem</Link>
                        <Link className="nav-link" to="/studier">Studier</Link>
                        <Nav.Link target="_blank" href="http://ent3r.no">ENT3R.no</Nav.Link>
                        <Nav.Link target="_blank" href="https://www.instagram.com/ent3r_trondheim/?hl=nb">Instagram</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )}
        }
        
export default withRouter(SBNavbar);