import React from 'react'
import imgLoading from '../assets/loading.gif'
import '../styles/loading.css'

const Loading = () => {
  return (    
    <div className="container__loading">
      <img src={imgLoading} alt="loading"/> 
    </div>  
  )
}

export default Loading