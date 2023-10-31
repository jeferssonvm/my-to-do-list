import React, { useContext } from 'react'
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

  // console.log(listTask.length )
    
  // console.log(listTask.filter((task)=>task.completed).length)
 
  return (
    <div className='content-text'>
        <p className='content-text__date'>{currentDate()}</p>
        <h1 className='content-text__title'>Lista De Tarea</h1>
        <h3 className='content-text__subtitle'> {listTask.filter((task)=>task.completed).length} de {listTask.length} tareas completadas</h3>
    </div>
  )
}
