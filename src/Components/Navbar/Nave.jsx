import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link,  } from 'react-router-dom';
import FicaFrioLogo from '../../assets/Logo.png';
import Button from 'react-bootstrap/Button';
import './Nave.css'


const Nave = () => {
        
    

    return (
        <>
            <section id="nav-bar">
                <Navbar expand='lg' className="navbar ">
                    <Container fluid >
                        <Navbar.Brand as={Link} to="/"><img src={FicaFrioLogo} alt="FicaFrio Logo" width={100} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='Agenda' >Agenda</Nav.Link>
                            <Nav.Link as={Link} to='calendario' >Calendario</Nav.Link>
                            <Nav.Link as={Link} to='planos' >Planos</Nav.Link>
                            <Nav.Link as={Link} to='sobre-nos' >Sobre Nos</Nav.Link>


                        </Nav>
                        
                        <div className='button' >
                            <Button className='botao' as={Link} to='login'>Entrar</Button>
                            <Button className='botao' as={Link} to='cadastro'>Criar Conta</Button>

                        </div>


                    </Container>
                </Navbar>
            </section>

        </>
    )
}

export default Nave;