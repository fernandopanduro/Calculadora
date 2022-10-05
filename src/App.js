import React from 'react';
import './App.css';
import Botton from './components/Botton';
import Screen from './components/Screen';
import BottonClear from './components/BottonClear';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState('Hola');

  const agregarInput = val => {
    setInput(input + val)
  };

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
          <Botton>7</Botton>
          <Botton>8</Botton>
          <Botton>9</Botton>
          <Botton>+</Botton>
        </div>

        <div className='fila'>
          <Botton>4</Botton>
          <Botton>5</Botton>
          <Botton>6</Botton>
          <Botton>-</Botton>
        </div>

        <div className='fila'>
          <Botton>1</Botton>
          <Botton>2</Botton>
          <Botton>3</Botton>
          <Botton>*</Botton>
        </div>

        <div className='fila'>
          <Botton>0</Botton>
          <Botton>.</Botton>
          <Botton>=</Botton>
          <Botton>/</Botton>
        </div>

        <BottonClear />

      </div>
        
    </div>
  );
}

export default App;
