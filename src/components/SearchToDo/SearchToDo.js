import React, { useContext, useEffect, useState } from 'react'
import "./SearchToDo.css"
import { ContextTask } from '../../context/ContextTask'
export const SearchToDo = () => {
  // const [search, setSearch] = useState("");
  const {listTask, setListTask} = useContext(ContextTask);
  const {optionsListFiltered, setOptionsListFiltered} = useContext(ContextTask);
  const {optionsList, setOptionsList} =useContext(ContextTask);
  const [notTaskFound, setNotTaskFound] = useState();
  const [changeList, setChangeList] = useState();
  useEffect(()=>{
    setNotTaskFound(listTask)
  },[]);

  // usamos este usefect para comprobar que se realizo un cambio en la filtros si es el caso se cambia informa para guardar el nuevo array con los filtros
useEffect(()=>{
  setChangeList(true);
},[optionsList])
  const searchWord = e => {
    const keywords = e.target.value;
    let taskFound;
    if(changeList){
      setChangeList(false)
      setNotTaskFound(optionsListFiltered)
    }
    if (keywords.length > 0){
       taskFound  = optionsListFiltered.filter(task =>{
        return  task.title.toLowerCase().includes(keywords.toLocaleLowerCase())
      })
      setOptionsListFiltered(taskFound)
      console.log(notTaskFound,"dentro de la busquda")
      console.log("dentro de la busquda")
    }else{
      setOptionsListFiltered(notTaskFound)
    }

  }
  return (
    <div className='content-input'>
      <div className='input'>
          <input className='input__text' placeholder='Buscar tarea' type="text"  onChange={searchWord}/>
          <svg className='input__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </div>
    </div>
    
  )
}
