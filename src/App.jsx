import { Outlet } from 'react-router-dom'

import Nave from './Components/Navbar/Nave';
import Rodape from './Components/Rodape/Rodape';


import 'bootstrap/dist/css/bootstrap.min.css';// Ativa a estilização do bootstrap(PF N APAGUE);
import './App.css'





function App() {
  /* A função App esta apenas puxando o elementos */

  return (
    <>
      <div id='main'>
        <section id='header'>
          <Nave />

        </section>
        <section>
          <section id='body'>
            <Outlet />

          </section>
        </section>
        <section id='footer'>
          <Rodape />
        </section>
      </div>
    </>
  )
}

export default App
