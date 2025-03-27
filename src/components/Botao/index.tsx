import React, { ReactNode } from 'react';
import style from './Botao.module.scss';


interface BotaoProps {
  texto: string;
  children?: ReactNode; // Defina children aqui
}

class Botao extends React.Component<BotaoProps> {
  render() {
    return (
        <button className={style.botao}>
        
        {this.props.children} {/* Agora 'children' está definido corretamente */}
      </button>
    );
  }
}

export default Botao;



