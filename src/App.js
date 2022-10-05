import React from 'react';
import './App.css';
import Botton from './components/Botton';
import Screen from './components/Screen';
import BottonClear from './components/BottonClear';
import { useState } from 'react';
//import { evaluate } from 'mathjs'; //npm install mathjs 


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  };

/*   const calcularResultado = () => {
    setInput(evaluate(input));
  }; */

  return (
    <div className="App">

      <div className='bubbles'>
        <span className='bubble-1'></span>
        <span className='bubble-2'></span>
        <span className='bubble-3'></span>
        <span className='bubble-4'></span>
        <span className='bubble-5'></span>
        <span className='bubble-6'></span>
        <span className='bubble-7'></span>
      </div>

      <div className='container-calculator'>

        <Screen input={input} />

        <div className='fila'>
          <Botton manejarClick={agregarInput}>7</Botton>
          <Botton manejarClick={agregarInput}>8</Botton>
          <Botton manejarClick={agregarInput}>9</Botton>
          <Botton manejarClick={agregarInput}>+</Botton>
        </div>

        <div className='fila'>
          <Botton manejarClick={agregarInput}>4</Botton>
          <Botton manejarClick={agregarInput}>5</Botton>
          <Botton manejarClick={agregarInput}>6</Botton>
          <Botton manejarClick={agregarInput}>-</Botton>
        </div>

        <div className='fila'>
          <Botton manejarClick={agregarInput}>1</Botton>
          <Botton manejarClick={agregarInput}>2</Botton>
          <Botton manejarClick={agregarInput}>3</Botton>
          <Botton manejarClick={agregarInput}>*</Botton>
        </div>

        <div className='fila'>
          <Botton manejarClick={agregarInput}>0</Botton>
          <Botton manejarClick={agregarInput}>.</Botton>
          <Botton manejarClick={calcularResultado}>=</Botton>
          <Botton manejarClick={agregarInput}>/</Botton>
        </div>

        <BottonClear manejarClear={() => setInput('')} />

      </div>
        
    </div>
  );
}

export default App;
