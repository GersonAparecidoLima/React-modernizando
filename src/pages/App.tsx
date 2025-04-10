import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro'; // Corrigido para importar o Cadastro.tsx corretamente
import Tarefa from '../pages/Tarefa/Tarefa';
import style from './App.module.scss'; // Importando o estilo do App

function App() {
  return (
    <Router>
      <div className={style.AppContainer}> {/* Adicionando uma classe de contêiner global */}
        <nav className={style.Navbar}>
          <ul>
            <li>
              <Link to="/tarefa" className={style.NavLink}>Tarefa</Link>
            </li>
            <li>
              <Link to="/cadastro" className={style.NavLink}>Cadastro</Link> {/* Link para Cadastro */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tarefa" element={<Tarefa />} />
          <Route path="/cadastro" element={<Cadastro />} /> {/* Nova rota para Cadastro */}
          <Route path="/" element={<h1>Bem-vindo ao Meu Aplicativo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;