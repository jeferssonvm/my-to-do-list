
import { useEffect, useState } from 'react';
import './App.css';

import{ ContextTask } from './context/ContextTask' 
import { MainRouter } from './routers/MainRouter';
import { Form } from './components/Form/Form';
import { BtnNewTask } from './components/BtnNewTask/BtnNewTask';

function App() {
  
  // localStorage.removeItem('counter')
  //   localStorage.removeItem('task_v1')

  const  localStorageTask = localStorage.getItem('task_v1');
  const localStorageCounter = localStorage.getItem('counter'); //con el fin de determinar cuantas tareas se an creado
  let counter;
  let getTask;
  // Observamos si hay algun dato guardado en la memoria para traerlo en el caso que no se crea un array basio
  if(!localStorageTask){
    localStorage.setItem('task_v1',JSON.stringify([]))
    getTask=[];
  }else{
    getTask = JSON.parse(localStorageTask)
  }
  // control de cuantas tareas se an creado
  if(!localStorageCounter){
    localStorage.setItem('counter',0)
    counter=0;
  }else{
    counter = parseInt(localStorageCounter)
  }

  const [tasksCreateCounter, setTasksCreateCounter] =useState(counter);
  const [listTask , setListTask] =useState(getTask);
  const [tasksOnScreen, setTasksOnScreen] =useState();
  const [optionsList, setOptionsList] = useState(
    {
      generalTasks: null,
      tasksToday:null,
      tasksOfMonth:null
    }
  )
  const [openForm, setOpenForm] = useState(false);
  const [optionsListFiltered, setOptionsListFiltered] = useState(listTask);
  
  useEffect(()=>{
    localStorage.setItem('task_v1',JSON.stringify(listTask));
  },[listTask]);
  useEffect(()=>{
    localStorage.setItem('counter',tasksCreateCounter);
  },[listTask]);

  return (
      <div className="App">
          <ContextTask.Provider value ={{listTask, setListTask,optionsList,setOptionsList,optionsListFiltered, setOptionsListFiltered,setOpenForm,openForm, setOpenForm,tasksCreateCounter, setTasksCreateCounter}}>
            <MainRouter></MainRouter>
            <BtnNewTask></BtnNewTask>
          </ContextTask.Provider> 
      </div>

  );
}

export default App;
