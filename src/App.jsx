import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';// Ativa a estilização do bootstrap(PF N APAGUE);
import Nave from './Components/Navbar/Nave';
import Footer from './Components/Footer/Footer';
import './App.css'
import Foot from './Components/Footer/Footer'







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
          <section className='footer'>
            <Foot/>
          </section>
        </section>
      </div>
    </>
  )
}

export default App
