import React, { useContext } from 'react'
import { Cards } from '../Cards/Cards'
import { ContextTask } from '../../context/ContextTask'

export const ContentTask = () => {
  const {listTask, setListTask} =useContext(ContextTask)
  console.log(listTask)
  return (
    <div>
        <Cards></Cards>
    </div>
  )
}
