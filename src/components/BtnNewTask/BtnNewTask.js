import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import PortalReactDOM from 'react-dom'
import {createPortal} from 'react-dom';
    import { Form } from '../Form/Form';
import { ContextTask } from '../../context/ContextTask';
import "./BtnNewTask.css"
export const BtnNewTask = () => {
const {openForm , setOpenForm} = useContext(ContextTask)
  return (
    <div className='content-button'>
        
        {
            openForm && <Form setOpenForm></Form>
        }
        <button className='button-task' onClick={()=> setOpenForm(!openForm)}>+</button>
    </div>
  )
}
