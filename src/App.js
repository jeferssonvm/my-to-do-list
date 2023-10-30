
import { useState } from 'react';
import './App.css';

import{ ContextTask } from './context/ContextTask' 
import { MainRouter } from './routers/MainRouter';

function App() {
  const listaDeTarea =[
    {
      id:1,
      title:'1 taks',
      description: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta aliquid voluptates non voluptatum dolore obcaecati ducimus ut eos alias inventore amet sunt sequi provident maiores perspiciatis numquam, quod voluptatibus!",
      descriptionActive:false,
      completed: false,
      dueDate: "2023-01-05"
    },
    {
      id:2,
      title:'2 taks',
      description: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta aliquid voluptates non voluptatum dolore obcaecati ducimus ut eos alias inventore amet sunt sequi provident maiores perspiciatis numquam, quod voluptatibus!",
      descriptionActive:false,
      completed: true,
      dueDate: "2023-05-05"
    },
    {
      id:3,
      title:'3 taks',
      description: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta aliquid voluptates non voluptatum dolore obcaecati ducimus ut eos alias inventore amet sunt sequi provident maiores perspiciatis numquam, quod voluptatibus!",
      descriptionActive:false,
      completed: false,
      dueDate: "2023-10-05"
    }
  ]
  const [listTask , setListTask] =useState(listaDeTarea)
  return (
   
      <div className="App">
          <ContextTask.Provider value ={{listTask, setListTask}}>
            <MainRouter></MainRouter>
          </ContextTask.Provider>        
      </div>
  );
}

export default App;
