import React from 'react';
import FormularioGenerico from '../../components/FormularioGenerico'; // Importando o FormularioGenerico
import style from './Cadastro.module.scss';

function Cadastro() {
  const campos = [
    { label: 'Nome', tipo: 'text', nome: 'nome', valor: '', required: true },
    { label: 'Email', tipo: 'email', nome: 'email', valor: '', required: true },
    { label: 'Senha', tipo: 'password', nome: 'senha', valor: '', required: true },
  ];

  function handleSubmit(dados: { [key: string]: string }) {
    console.log(dados);  // Aqui você pode processar os dados do formulário
  }

  return (
    <div className={style.cadastro}>
      <h2>Cadastro de Usuário</h2>
      <FormularioGenerico campos={campos} onSubmit={handleSubmit} tipoFormulario="cadastro" />
    </div>
  );
}

export default Cadastro;
