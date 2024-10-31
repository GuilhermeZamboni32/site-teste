import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './TelaInicial.css';
import logo from './Logo.png'; 

function TelaInicial() {
  const navigate = useNavigate(); 

  return (
    <div className='Body'>
      <header className='Topo'>
        <div className='Topo-esquerda'>
          <img src={logo} alt='Logo do SUS' className='logo' />
        </div>
        <div className='Topo-meio'>
          <h1>Agendamento de Consultas </h1>
        </div>
        <div className='Topo-direita'>
          <button className='botao' onClick={() => navigate('/cadastro')}>Cadastrar</button>
          <button className='botao' onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>

      <main className='Meio'>
        <h2>Bem-vindo ao Portal de Agendamento </h2>
        <p>Facilitamos o acesso à saúde. Agende suas consultas rapidamente.</p>
        <button className='botaoPrincipal' onClick={() => navigate('/login')}>Agendar Consulta</button>
      </main>
      <footer className='Baixo'>
        <div className='Baixo-item'>
          <h3>Consultas Agendadas</h3>
          <p>Visualize seus agendamentos e acompanhe suas consultas.</p>
        </div>
        <div className='Baixo-item'>
          <h3>Suporte ao Usuário</h3>
          <p>Estamos aqui para ajudar. Entre em contato se precisar.</p>
        </div>
        <div className='Baixo-item'>
          <h3>Informações de Saúde</h3>
          <p>Conselhos e informações para manter uma vida saudável.</p>
        </div>
      </footer>
    </div>
  );
}

export default TelaInicial;
