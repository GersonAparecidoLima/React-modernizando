import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Cadastro from '../pages/Cadastro/Cadastro'; // Corrigi o caminho para as páginas
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
          </ul>
        </nav>

        <Routes>
          
          <Route path="/tarefa" element={<Tarefa />} />
          <Route path="/" element={<h1>Bem-vindo ao Meu Aplicativo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
