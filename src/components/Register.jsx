import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './elements/Form';
import InputForm from './atom/InputForm';

const Register = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate()

  const handleNameChange = (e) => setName(e.target.value);
  const handleMailChange = (e) => setMail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handeSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  }
  return (
    <>
      <Form 
        btnSubmit={'Confirmar'}
        title={'Registro'}
        handleSubmit={handeSubmit}
        key={'submit-form'}
        inputs={[
          <InputForm 
            handleChange={handleNameChange}
            label={'Nombre completo'}
            name={'name'}
            type={'text'} 
          />,
          <InputForm 
            handleChange={handleMailChange}
            label={'Mail'}
            name={'email'}
            type={'email'} 
          />,
          <InputForm 
            handleChange={handlePasswordChange}
            label={'Contraseña'}
            name={'password'}
            type={'password'} 
          />,
          <InputForm 
            handleChange={handlePhoneChange}
            label={'Teléfono'}
            name={'phone'}
            type={'text'} 
          />,
          <InputForm 
            handleChange={handleAddressChange}
            label={'Domicilio'}
            name={'address'}
            type={'text'} 
          />,
        ]}
      />
    </>
  )
}

export default Register