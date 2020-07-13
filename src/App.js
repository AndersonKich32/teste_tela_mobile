import React, {useState, useEffect} from 'react';
import './App.css';
import { FaCrosshairs, FaArrowRight } from "react-icons/fa"
import logoVW from './assets/logoVW.png'

export default function App() {
  const [location, setLocation] = useState('Rua Olinda, 140')
  const [posicaoX, setPosicaoX] = useState('')
  const [posicaoY, setPosicaoY] = useState('')
  const [hideCursor, setHideCursor] = useState(1)
  

 function handleMouseMove(e){
   e.preventDefault()
  
    if((e.pageX >= 495 && e.pageX <=860) && (e.pageY >= 50 && e.pageY <= 400)){
        setHideCursor(1)
    }else{
       setHideCursor(0)
    }

    setPosicaoX(e.pageX - 550)
    setPosicaoY(e.pageY - 50)
  }


  return (
    <div className="App" >
      <div className='App-container'>
        <div className='App-container-maps' onMouseMove={handleMouseMove}>
          <div className='box-seta' style={{top:`${posicaoY}px`, left:`${posicaoX}px`, opacity:`${hideCursor}`}}>
              <div className='box-seta-title'>Local da Ocorrência</div>
          </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.140671264786!2d-51.097374685548814!3d-29.77357368198167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196bd8a31aa083%3A0xe60fd819f1df27ff!2sR.%20Theophilo%20Zanutto%20-%20Campestre%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093046-353!5e0!3m2!1spt-BR!2sbr!4v1581305217529!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen=""></iframe>
        </div>
        
        <div className='App-container-painel'>

          <form className='App-form'>
            <fieldset className='App-form-fieldset-01'>
              <div className='App-form-input'>
                <input type='text' readOnly value={location}/>
                <FaCrosshairs size={24} color='#091D3C'/>
              </div>
            </fieldset>

            <fieldset className='App-form-fieldset-02'>
              <span>Confirme seu local</span>
              <p className='description'>Ajude seu prestador a localiza-lo mais rapidamente, ajuste sua localização acima'</p>
              <div className='App-form-input'>
                <input type='submit' value='Comfirmar o Local da Ocorrência'/>
                <FaArrowRight size={20} color='#fff'/>
            </div>

            <div className='box-dados-veiculo'>
            <div className='logo-veiculo'><img src={logoVW} alt="logo"/></div>

              <div className='dados'>
                <p className='title'>placa</p>
                <p className='placa'> ixs-8269</p>
              </div>
              <div className='dados'>
                <p className='title'>protocolo</p>
                <p className='protocolo'>1457845856894</p>
              </div>
            </div>

            </fieldset>
          </form>

        </div>

      </div>
    </div>
  );
}

