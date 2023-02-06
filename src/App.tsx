import { useState } from 'react';

import "./style.css";
import timer from './assets/cronometro.png';

let timerCount: any = null;
let numberCount = 0;

function App() {
  const [number, setNumber] = useState(0);
  const [btnGo, setBtnGo] = useState("Go")

  function go() {

    if(timerCount !== null) {
      clearInterval(timerCount);
      timerCount = null;

      setBtnGo("GO");
    } else {

      timerCount = setInterval(() => {
        numberCount += 0.1;
        setNumber(numberCount);
      }, 100)

      setBtnGo("Stop");
    }
  }

  function clear() {
    if(timerCount !== null) {
      clearInterval(timerCount);
      timerCount = null;
    }

    numberCount = 0;
    setNumber(0);
    setBtnGo("GO")
  }

  return (
    <div className='container'>
      <img src={timer} alt="timer" className='img' />
      <a className='timer'>{number.toFixed(1)}</a>
      <div className='areaBtn'>
        <a className='button' onClick={go}>{btnGo}</a>
        <a className='button' onClick={clear}>Clear</a>
      </div>
    </div>
  )
}

export default App
