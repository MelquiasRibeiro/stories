import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatŕio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

export default function Login() {
  function hanndleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={hanndleSubmit}>
        <img src={logo} alt="logo" />
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />
        <button type="submit">ENTRAR</button>
        <Link to="/register">Cadastrar</Link>
      </Form>
    </>
  );
}
