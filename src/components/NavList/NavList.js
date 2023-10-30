import React from 'react'
import "./NavList.css"
import { NavLink } from 'react-router-dom'
export const NavList = () => {
  return (
    <div>
        <ul className='options-list'>
            <li className='options-list__element'><NavLink to={"/Lista-de-tareas"}>Lista de tareas</NavLink></li>
            <li className='options-list__element'><NavLink to={"/Tareas-para-hoy"}>Tareas para hoy</NavLink></li>
            <li className='options-list__element'><NavLink to={"/Tareas-del-mes"}>Tareas para del Mes</NavLink></li>
        </ul>
    </div>
  )
}
