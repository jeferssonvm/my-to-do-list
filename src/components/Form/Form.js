import React, { useContext} from 'react'
import { createPortal } from 'react-dom';
import "./Form.css"
import { ContextTask } from '../../context/ContextTask';
import { useId } from 'react';


function Form() {
  const {openForm , setOpenForm} = useContext(ContextTask)
  const {listTask, setListTask} = useContext(ContextTask);
  const {optionsList, setOptionsList} = useContext(ContextTask)
  const {tasksCreateCounter, setTasksCreateCounter} = useContext(ContextTask)
  
  const closeForm = (e) =>{
    e.preventDefault();
    setOpenForm(!openForm);
  }
  const getForm = (e) =>{
    e.preventDefault();
    setTasksCreateCounter(tasksCreateCounter+1);
    console.log(tasksCreateCounter)

    const newForm  = {
      id:tasksCreateCounter,
      title: e.target.title.value,
      description: e.target.description.value,
      descriptionActive:false,
      completed: false,
      dueDate:  e.target.date.value
    }
    setListTask([...listTask, newForm]);
    setOptionsList ({...optionsList,generalTasks:true,tasksToday:false,tasksOfMonth:false})
    setOpenForm(!openForm);
  }

  return createPortal(
    <div className="content-portal" >
      <div className='content-form'>
            <h2 className='subtitle'>Agregar tarea</h2>
            <form onSubmit={getForm} className='form' action="">
                <input className='form__input' placeholder='Titulo' name='title' type="text" required/>
                <p>Vencieminto de tarea</p>
                <input className='form__date' type="date" name="date" id=""/>
                <textarea  className='form__textarea' placeholder='Información de la tarea ' name="description" id="" cols="30" rows="10"></textarea>
                <div className='form__input'>
                    <button type='' onClick={closeForm}> Cancelar</button>
                    <input type="submit" value="enviar" name='Guardar' />
                </div>
            </form> 
          </div>
    </div>,document.getElementById("form__portal")
    
  );
}

export{Form}



// export const Form = () => {
//   return ReactDOM.createPortal(
//     <div className='content-form'>

//     </div>,document.getElementById("form__portal")
//   )
// }

{/* <h2 className='subtitle'>Agregar tarea</h2>
<form className='form' action="">
    <input className='form__input' type="text" required/>
    <input className='form__date' type="date" name="" id="" />
    <textarea  className='form__textarea' name="" id="" cols="30" rows="10"></textarea>
    <div className='form__input'>
        <input type="submit" value="cancelar" />
        <input type="submit" value="guardar" />
    </div>
</form> */}