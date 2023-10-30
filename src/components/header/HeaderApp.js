import React from 'react'
import "./HeaderApp.css"
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
    
 
  return (
    <div className='content-text'>
        <p className='content-text__date'>{currentDate()}</p>
        <h1 className='content-text__title'>Lista De Tarea</h1>
        <h3 className='content-text__subtitle'> 0 de 10 tareas completadas</h3>
    </div>
  )
}
