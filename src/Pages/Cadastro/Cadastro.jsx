import React from 'react'
import Logo from '../../assets/Logo.png'
import { Card, Button } from 'react-bootstrap';

const Cadastro = () => {
  return (
    /*<div className="card">
      <img className='logo' src={Logo} alt="Logo" />
      <div className="card-content">
        <h2>Pronto para ficar frio?</h2>
        <div className="caixa1">Senha</div>
        <div className="caixa1">Senha</div>
        <div className="caixa2">Esqueceu sua senha?</div>
        <Button>Continuar</Button>
        <p className='link_cadastro'>Não possui conta? <a href="">Clique aqui e faça seu cadastro</a></p>
      </div>
    </div >*/

    <div className="fundoCadastro">
      <Card className="text-center">

        <Card.Link href="/" className='logo'>
          <img
            src={Logo}
            alt="Logo"
            width={100}
          />
        </Card.Link>

        <Card.Title><strong>Olá! Seja bem vindo(a) ao Fica Frio.</strong></Card.Title>

        <Card.Text className='textoFria'>
          <strong>Meu nome é Fri.ia, sou a sua companheira que vai resfriar o seu uso nesse site</strong>
        </Card.Text>

        <Button className='continuar'>
          <strong>Continuar</strong>
        </Button>

        <Card.Text className='naoPossuiConta'>
          Já tem uma conta? -
          <Card.Link href="login">
            Clique aqui e faça o login
          </Card.Link>
        </Card.Text>

      </Card>
    </div>
  )
}

export default Cadastro