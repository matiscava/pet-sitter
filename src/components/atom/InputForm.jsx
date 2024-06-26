import React from 'react'

const InputForm = ({handleChange,label, name,placeholder='', type}) => {
  return (
    <> 
      <div className='input-container'>
        {label ? <label htmlFor={`input-${name}`} >{label}:</label> : null }
        <input type={type} id={`input-${name}`} name={name} onChange={handleChange} placeholder={placeholder}/>
      </div>
    </>
  )
}

export default InputForm