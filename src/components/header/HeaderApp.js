import React, { useContext, useEffect, useState } from 'react'
import "./HeaderApp.css"
import { ContextTask } from '../../context/ContextTask';

function currentDate (){
    const today = new Date();
    const day = today.getDate();
    const month = (today.getMonth()+1) < 10 ? "0"+today.getMonth()+1:today.getMonth()+1;
    const year =today.getFullYear();
    const listDay = ["Domingo","Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado"];
    const dayText = listDay[today.getDay()];
    const dateOrdered = `${dayText} ${day}-${month}-${year} `
    
    return dateOrdered
}

export const HeaderApp = () => {
  const {listTask, setListTask} = useContext(ContextTask);
  const [completedTasks, setCompletedTasks] = useState();

  useEffect(() =>{
    //actualizador de tareas completadas
    setCompletedTasks(listTask.filter((task)=>task.completed).length)

  },[listTask])

 
  return (
    <div className='content-text'>
        <p className='content-text__date'>{currentDate()}</p>
        <h1 className='content-text__title'>Lista De Tarea</h1>
        <h3 className='content-text__subtitle'>{
        ((completedTasks === listTask.length)&&(<p className='content-text__subtitle--completion'>felicidades gran trabajo</p>)
        )||(`${completedTasks} de ${listTask.length} tareas completadas`)} </h3>
    </div>
  )
}
// {completedTasks} de {listTask.length} tareas completadas