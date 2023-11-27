import React, { useContext, useEffect, useState } from 'react';
import "./cards.css";
import { ContextTask } from '../../context/ContextTask';
export const Cards = () => {
    const date = new Date();
    const {listTask, setListTask} = useContext(ContextTask);
    const {optionsList, setOptionsList} = useContext(ContextTask);
    const {optionsListFiltered, setOptionsListFiltered} = useContext(ContextTask);
    const [currentDate, setCurrentDate] = useState(date);
    // const [notTaskFound, setNotTaskFound] = useState();

    // devolver las listas con los filtros de tareas para hoy y tareas del mes 
    useEffect(()=>{
        // Sen enviá una nueva lista con los filtros deseados
        if(optionsList.generalTasks){
            setOptionsListFiltered(listTask)
        }
        if(optionsList.tasksToday){
            // Se transforma una fecha en un string y se compara con el valor de la lista NOTA :se suma un 1 porque los mese van de 0 a 11
            setOptionsListFiltered(listTask.filter((task)=>{
                if(task.dueDate ==`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`){
                    return task
                }
            } ))
        }
        if(optionsList.tasksOfMonth){
            // Se tranforma en datos tipo fecha luego se adquiere los meses y años para comparar
            setOptionsListFiltered(listTask.filter((task)=>{
                const dateTask = new Date (task.dueDate.replaceAll("-","/"))
                if ( dateTask.getFullYear() === currentDate.getFullYear()){
                    if(dateTask.getMonth()+1 === currentDate.getMonth()+1 ){
                        return task;
                    }
                }
            } ))
        }
    },[optionsList],[])

// desplegar acordeon de informacion 
    const deploy = (id) =>{
        const result = listTask.map((task) => {
            if(task.id == id){
                task.descriptionActive = !task.descriptionActive;
            }
            return task
        })
        setListTask(result)
    };

    const deletTask =(id) =>{
        // se elimina la tarea de la lista princiapl
        const result = listTask.filter((task) => task.id != id )
        // se elimina de la lista filtrad debido a que esta es la que se esta constantemente mostrando en pantalla
        setOptionsListFiltered(optionsListFiltered.filter((task) => task.id != id ))
        setListTask(result)
        

    };

   const completeTask =(id) =>{
        const stateComplete = listTask.map((task) => {
            if(task.id === id){
                task.completed? task.completed = false:
                    task.completed = true
            }
            return task
        })
        setListTask(stateComplete)
   };
   
   const semaphore = (date) =>{
        // obtenemos la fehc en formato 2023-09-01 se convierte a 2023/09/01 para evitar errores ala hora de convertila en una variable tipo fecha
        const dateTask = new Date (date.replaceAll("-","/"))
        
        // creamos las variables del semaforo se envia valor por valor para evitar guardarla como referencia
        let nextToWin =new Date (dateTask.getFullYear(), dateTask.getMonth(), dateTask.getDate())
        let inOrder =new Date (dateTask.getFullYear(), dateTask.getMonth(), dateTask.getDate())

        // restamos dias con el fin de determinar la fecha para que falten 3 o 8 dias para venser la tarea
        nextToWin = new Date (nextToWin.setDate(nextToWin.getDate() - 3));
        inOrder = new Date (inOrder.setDate(inOrder.getDate() - 8));
      
        if(currentDate < inOrder){
            return "green"
        } 
        if ((currentDate > inOrder) && (currentDate < nextToWin)){
            return "yellow"
        }
        if ((currentDate > nextToWin) && (currentDate <= dateTask)){
            return "red"
        }
   }

   
  return (
    <>
        {
            optionsListFiltered.map((task) =>{
                return(
                    <div key={task.id} className='cards'>
                        <div className='cards__folded'>
                            <input className='cards__input' type="checkbox" name="controlled" onChange={()=>completeTask(task.id)} id="" defaultChecked={task.completed}/>
                            <div className='cards__text-content'>
                                <h2 className='cards__title'>{task.title}</h2>
                                <h3 className={`cards__date ${semaphore(task.dueDate)} `}>{task.dueDate}</h3>
                            </div>
                            <div className='card__delet' onClick={() => deletTask(task.id)}>
                                X
                            </div>
                            <div className='card__icon-deploy ' onClick={()=>deploy(task.id)}>
                                <div>. . .</div>
                            </div>
                        </div>
                        {task.description && <div className={ `cards__deploy ${task.descriptionActive? "active": ""}` }>
                            {task.description}
                        </div>}
                    </div>
                )
            })
        }
        {
                        

        }
    </>
    
  )
}
