import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./elements/Form";
import InputForm from "./atom/InputForm";

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.setItem('token', mail);
    navigate('/');
  }

  const handleChangeMail = (e) => {
    setMail(e.target.value)
  };
  const handleChangePassword = (e) => setPassword(e.target.value);

  const rest = (
    <div>
      <Link to='/forget-password'>Recuperar Contraseña</Link> 
      <Link to='/register'>Registrarse</Link> 
    </div>
  )

  return (
    <>
      <Form 
        title={'Iniciar sesión'} 
        inputs={[
          <InputForm 
            name={'mail'} 
            placeholder="Usuario"
            handleChange={handleChangeMail}
            type={'text'}
          />,
          <InputForm 
            name={'password'}
            placeholder="Contraseña"
            handleChange={handleChangePassword}
            type={'password'}
          />
        ]}
        handleSubmit={handleSubmit}
        btnSubmit={'Iniciar sesión'}
        rest={rest}
      />

    </>
  )
}

export default Login