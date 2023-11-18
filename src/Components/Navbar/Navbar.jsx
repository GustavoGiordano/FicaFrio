import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import FicaFrioLogo from '../../assets/Logo.png';
import Button from 'react-bootstrap/Button';
import './Navbar.css'


const Navegacao = () => {


    return (
        <>
            <section id="nav-bar">
                <Navbar expand="lg" className="navbar ">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/"><img src={FicaFrioLogo} alt="FicaFrio Logo" width={100} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='Agenda' >Agenda</Nav.Link>
                            <Nav.Link as={Link} to='sobre_nos' >Sobre Nos</Nav.Link>


                        </Nav>
                        <div className='button' >
                            <Button>Entrar</Button>
                            <Button>Criar Conta</Button>

                        </div>


                    </Container>
                </Navbar>
            </section>

        </>
    )
}

export default Navegacao;