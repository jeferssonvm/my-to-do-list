import React, { useContext, useState, useEffect } from 'react'
import "./NavList.css"
import { NavLink } from 'react-router-dom'
import { ContextTask } from '../../context/ContextTask';
export const NavList = () => {
  useEffect(()=>{
    setOptionsList ({...optionsList,generalTasks:true,tasksToday:false,tasksOfMonth:false})

  },[]);
  const {optionsList, setOptionsList} =useContext(ContextTask);
  
  const listChange =(date) =>{
    if (date ==="general"){
      setOptionsList ({...optionsList,generalTasks:true,tasksToday:false,tasksOfMonth:false})
    }
    if (date ==="today"){
      setOptionsList ({...optionsList,generalTasks:false,tasksToday:true,tasksOfMonth:false})
    }
    if (date ==="month"){
      setOptionsList ({...optionsList,generalTasks:false,tasksToday:false,tasksOfMonth:true})
    }
  }
  
  return (
    <div className='content-nav'>
        <ul className='options-list'>
            <li onClick={() => listChange("general")} className={`options-list__element ${(optionsList.generalTasks)&&('actives')}`}>
              <NavLink to={"/projects/Lista-de-tareas"}>Lista de tareas</NavLink></li>
              {/* servidor local */}
              {/* <NavLink to={"/Lista-de-tareas"}>Lista de tareas</NavLink></li> */} 
            <li  onClick={() => listChange("today")} className={`options-list__element ${(optionsList.tasksToday)&&('actives')}`}>
              <NavLink to={"/projects/Tareas-para-hoy"}>Tareas para hoy</NavLink></li>
              {/* servidor local */}
              {/* <NavLink to={"/Tareas-para-hoy"}>Tareas para hoy</NavLink></li> */}
            <li  onClick={() => listChange("month")} className={`options-list__element ${(optionsList.tasksOfMonth)&&('actives')}`}>
              <NavLink to={"/projects/Tareas-del-mes"}>Tareas del Mes</NavLink></li>
              {/* servidor local */}
              {/* <NavLink to={"/Tareas-del-mes"}>Tareas del Mes</NavLink></li> */}
        </ul>
    </div>
  )
}
