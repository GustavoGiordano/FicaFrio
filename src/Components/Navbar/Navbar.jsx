import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import FicaFrioLogo from '../../assets/Logo.png';
import Button from 'react-bootstrap/Button';
import './Navbar.css'


function Navegacao() {


    return (
        <>
            <section id="nav-bar">
                <Navbar  expand="lg" className="navbar ">
                    <Container fluid>
                        <Navbar.Brand><img src={FicaFrioLogo} alt="FicaFrio Logo" width={100} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link  >Agenda</Nav.Link>
                            <Nav.Link  >LandinPage</Nav.Link>
                            <Nav.Link  >LandinPage</Nav.Link>
                        </Nav>
                        <div className='button' >
                            <Button>Entrar</Button>
                            <Button>Criar Conta</Button>

                        </div>
                            
                        
                    </Container>
                </Navbar>
            </section>
            <Outlet />
        </>
    )
}

export default Navegacao;