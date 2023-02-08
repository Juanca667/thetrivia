import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data) => {
    setUser(data.username);
    history.push('/game');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input type="text" name="username" ref={register} />
      <button type="submit" className="button">Iniciar sesión</button>
    </form>
  );
};

export default Login;





