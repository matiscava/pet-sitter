import React from 'react'
import InputForm from '../atom/InputForm'
import SubmitBtn from '../atom/SubmitBtn'

const Form = ({title, inputs, handleSubmit,btnSubmit, rest}) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className="form-title">
          <p>{title}</p>
        </div>
        <div className='form-content'>
          {inputs.map( (input, index) => (
            <div key={index}> {input}</div>
          )
          )}
        </div>
        <SubmitBtn title={btnSubmit} />
        {rest}
    </form>
  )
}

export default Form