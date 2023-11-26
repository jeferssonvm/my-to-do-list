import React, { useContext } from 'react'
import { Cards } from '../Cards/Cards'
import { ContextTask } from '../../context/ContextTask'
import "./ContentTask.css"

export const ContentTask = () => {

  return (
    <div className='content-task'>
        <Cards></Cards>
    </div>
  )
}
