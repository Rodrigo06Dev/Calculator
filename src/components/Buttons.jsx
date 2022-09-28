import React from 'react'
import '../styles/button.css'

const Buttons = ({children, handleInput}) => {

    const isOperator = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

  return (
    <div
        className={`button__container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => handleInput(children)}>
        {children}
    </div>
  )
}

export default Buttons