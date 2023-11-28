import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom';
import { NavList } from '../components/NavList/NavList';
import { HeaderApp } from '../components/header/HeaderApp';
import { ContentTask } from '../components/ContentTask/ContentTask';
import { SearchToDo } from '../components/SearchToDo/SearchToDo';
// import { Cards } from './components/Cards/Cards';
// import { ContentTask } from './components/ContentTask/ContentTask';
// import { SearchToDo } from './components/SearchToDo/SearchToDo';

  
export const MainRouter = () => {
  return (
    <BrowserRouter>
      <HeaderApp></HeaderApp>
      <SearchToDo></SearchToDo>
      <NavList></NavList>
      <Routes>
        <Route path="/" element={<ContentTask></ContentTask>}/>
        <Route path="/projects/ListaDeTareas/" element={<ContentTask></ContentTask>}/>
        <Route path="/Lista-de-tareas" element={<ContentTask></ContentTask>}/>
        <Route path="/Tareas-para-hoy" element={<ContentTask></ContentTask>}/>
        <Route path="/Tareas-del-mes" element={<ContentTask></ContentTask>}/>
        <Route path='*' element={(
            <h1>Error Esta pagina no Existe</h1>
          )}/>
      </Routes>
    </BrowserRouter>
  )
}
