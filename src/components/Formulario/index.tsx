import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/tarefa';

class Formulario extends React.Component<{   
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>  
}>  {

  state = {
    tarefa: "",
    tempo: "00:00"
  }

/*

adicionarTarefas(React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {... this.state }
}

*/


  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault();
      this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {... this.state }])
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>       
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}

                 //React.ChangeEvent<HTMLInputElement>, o TypeScript sabe que o evento vem de um campo input, 
              // permitindo que você acesse a propriedade evento.target.value
              
              onChange={(evento: React.ChangeEvent<HTMLInputElement>) => 
                this.setState({ ...this.state, tarefa: evento.target.value })
              }

            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
              type="time"
              step="1"
              name="tempo"
              value={this.state.tempo}
              
              //React.ChangeEvent<HTMLInputElement>, o TypeScript sabe que o evento vem de um campo input, 
              // permitindo que você acesse a propriedade evento.target.value
              
              onChange={(evento: React.ChangeEvent<HTMLInputElement>) => 
                this.setState({ ...this.state, tempo: evento.target.value })
              }
              

              id="tempo"
              min="00:00:00"
              max="02:30:00"
              required
          />
        </div>
        // Aqui você precisa passar a prop `texto`
        <Botao type="submit">
          Adicionar
        </Botao>

      </form>
    )
  }
}

export default Formulario;