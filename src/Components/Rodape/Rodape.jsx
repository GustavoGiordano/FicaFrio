import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Logo from '../../assets/Logo.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

import './Rodape.css'



function Rodape() {


    return (
        <>
            <div>
                <Row>
                    <Col md={4}>
                        <ul>
                            <li><img src={Logo} alt="LogoTipo" /></li>
                            <h1>Redes socias:</h1>
                        </ul>
                        <div className='social-links'>
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1>Links Uteis</h1>
                        <ul>
                            <li>Soluções</li>
                            <li>Recursos</li>
                            <li>Planos</li>
                            <li>Sobre Nós</li>
                            <li>Fale Conosco</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h1>Boletim de Notícias</h1>
                        <p>Acompanhe o projeto e receba dicas de organização</p>
                        Concordo em receber noticias da equipe Frio
                    </Col>
                </Row>

                <div className='direitos-reservados'>
                    <h1>2023 Fica Fri.io - Todos direitos reservados</h1>
                </div>
            </div>

        </>
    )
}

export default Rodape