import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Logo from '../../assets/Logo.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Rodape.css'



function Rodape() {


    return (
        <>
            <div className='rodape'>
                <Row>
                    <Col className='rodape_col' md={5}>
                        <ul className='LogoTipo'>
                            <img src={Logo} alt="LogoTipo" />
                            <hr className='linhadivisoria'/>
                            <h1>Redes socias:</h1>
                        </ul>
                        <div className='social-links'>
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter"/>
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter"/>
                            <FontAwesomeIcon icon="fa-brands fa-square-instagram"/>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                        </div>
                    </Col>
                    <Col className='rodape_LinksUteis' md={4}>
                        <h1>Links Uteis</h1>
                        <ul>
                            <li>Soluções</li>
                            <li>Recursos</li>
                            <li>Planos</li>
                            <li>Sobre Nós</li>
                            <li>Fale Conosco</li>
                        </ul>
                    </Col>
                    <Col className='rodape_BoletimNoticias' md={3}>
                        <h1>Boletim de Notícias</h1>
                        <p>Acompanhe o projeto e receba dicas de organização</p>
                        <Form className='Formulario'>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Row>
                                    <Col className='Email' sm="5">
                                        <Form.Control type="email" placeholder="Insira seu Email" />
                                    </Col>
                                    <Col className='Botao'>
                                        <Button as="input" type="submit" value="Inscreva-se" />{''}
                                    </Col>
                                </Row>
                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div div key={`default-${type}`} className="mb-3">
                                    <Form.Check className='CheckBoxNoticias' // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={`Concordo em receber noticias da equipe Frio`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Col>
                </Row>

                <div className='direitos-reservados'>
                    <h1>@2023 Fica Fri.io - Todos direitos reservados</h1>
                </div>
            </div>

        </>
    )
}

export default Rodape