import React from 'react'
import { Container } from 'react-bootstrap';
import Navegacao from '../Navbar/Navbar';

 const Layout = ({children}) => {
  return (
    <>
    <Navegacao/>
    <Container>
        {children}
    </Container>
    </>
  )
}

export default Layout;