import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';// Ativa a estilização do bootstrap(PF N APAGUE);
import Nave from './Components/Navbar/Nave';

import './App.css'


function App() {
  /* A função App esta apenas puxando o elementos */

  return (
    <>
      <div className='main'>
        <section className='header'>
          <Nave />
        </section>
        <section>
          <section className='body'>
            <Outlet />
          </section>
        </section>
        {/* <section className='footer'>
          <Rodape />
        </section> */}
      </div>
    </>
  )
}

export default App
