import { useEffect, useState } from 'react'
import './App.css'
import BtnClear from './components/BtnClear'
import Buttons from './components/Buttons'
import Screen from './components/Screen'
import {evaluate} from 'mathjs'
import Loading from './components/Loading'


function App() {
  const [input, setInput] = useState("0")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }, [])
  

  const handleInput = num =>{
    if(input === "0"){      
      setInput(num)    
    }else{
      setInput(input + num)   
    }
        
  }

  const resetInput = () =>{
      setInput("0")
  }
  const delInput = () =>{
    setInput(input.slice(0, -1))
}

  const calculator = () =>{
    setInput(evaluate(input))
  }

  return (
    <div className="App">
      {
      isLoading 
      ?
        <Loading />
      :
      <div className="contenedor__calculadora">
        <Screen input={input}/>
        <div className="contenedor__fila">
          <BtnClear resetInput={resetInput}>AC</BtnClear>
          <BtnClear resetInput={delInput}>Del</BtnClear>
          <Buttons handleInput={handleInput}>^</Buttons>
          <Buttons handleInput={handleInput}>/</Buttons>
        </div>
        <div className="contenedor__fila">
          <Buttons handleInput={handleInput}>7</Buttons>
          <Buttons handleInput={handleInput}>8</Buttons>
          <Buttons handleInput={handleInput}>9</Buttons>
          <Buttons handleInput={handleInput}>*</Buttons>
        </div>
        <div className="contenedor__fila">
          <Buttons handleInput={handleInput}>4</Buttons>
          <Buttons handleInput={handleInput}>5</Buttons>
          <Buttons handleInput={handleInput}>6</Buttons>
          <Buttons handleInput={handleInput}>-</Buttons>
        </div>
        <div className="contenedor__fila">
          <Buttons handleInput={handleInput}>1</Buttons>
          <Buttons handleInput={handleInput}>2</Buttons>
          <Buttons handleInput={handleInput}>3</Buttons>
          <Buttons handleInput={handleInput}>+</Buttons>
        </div>
        <div className="contenedor__fila last ">          
          <Buttons handleInput={handleInput}>0</Buttons>
          <Buttons handleInput={handleInput}>.</Buttons>
          <Buttons handleInput={calculator}>=</Buttons>
        </div>
      </div>
      }       
    </div>   
  )
}

export default App

