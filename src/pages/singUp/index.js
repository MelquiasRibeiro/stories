import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatŕio'),
  password: Yup.string()
    .required('A senha é obrigatoria')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default function Register() {
  function hanndleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={hanndleSubmit}>
        <img src={logo} alt="logo" />
        <Input name="name" type="text" placeholder="seu nome" />
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />
        <button type="submit">CADASTRAR</button>
        <Link to="/">Já tem cadastro?</Link>
      </Form>
    </>
  );
}
