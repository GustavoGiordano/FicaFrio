import React, { useState } from 'react';
import AgendaService from '../../Services/APIS/AgendaService';
import './Tarefas.css'
import TaskCard from '../TaskCard/TaskCard';

const AgendaComponent = () => {

  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState('');


  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const reorganizeTasks = async () => {
    try {
      const newTasks = await AgendaService.reorgarnizeTasks(userInput);
      setTasks(newTasks);
    } catch (error) {
      console.error('Erro ao reorganizar tarefas:', error);
    }
  };

  return (
    <>
      <p>angkljnakjgn
      </p>
      {/** INput para receber as informações da agenda */}
      <input 
        className='input' 
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder='Insira a sua agenda agora!'
      />
      <button onClick={reorganizeTasks}> Reoganize suas tarefas</button>


      {tasks.length > 0 && < TaskCard tasks={tasks}/>}
    </>
  )
}

export default AgendaComponent;