import React from 'react'
import '../styles/clear.css'
const BtnClear = ({children, resetInput}) => {
  return (
    <div className='bnt-clear'
        onClick={resetInput}>
        {children}
    </div>
  )
}

export default BtnClear