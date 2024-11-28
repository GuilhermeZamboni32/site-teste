import React from 'react';
import './TelaLogin.css';

function TelaLogin() {
  const handleCadastroRedirect = () => {
    window.location.href = '/cadastro'; 
  };

  return (
    <div className="TelaLogin">
      <div className="LoginContainer">
        <h2>Login de Usuário</h2>
        <form>
          <input type="text" placeholder="Nome Completo" required />
          <input type="text" placeholder="CPF" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="botaoLogin">Entrar</button>
        </form>
        <button className="botaoVoltar">Voltar</button>
        
        {/* Pergunta clicável */}
        <div className="linkCadastroContainer">
          <p className="linkCadastro" onClick={handleCadastroRedirect}>Não tem conta ainda? Cadastre-se</p>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
