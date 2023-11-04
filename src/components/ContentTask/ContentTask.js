import React, { useContext } from 'react'
import { Cards } from '../Cards/Cards'
import { ContextTask } from '../../context/ContextTask'

export const ContentTask = () => {
  const {listTask, setListTask} =useContext(ContextTask)
  const prueba = e=>{
    console.log(e.target.value)
  }
  return (
    <div>
        <Cards></Cards>
        <input type="date"  onChange={prueba} name="pruebas" id="" />
    </div>
  )
}
