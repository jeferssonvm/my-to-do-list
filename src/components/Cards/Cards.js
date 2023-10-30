import React, { useContext } from 'react';
import "./cars.css";
import { ContextTask } from '../../context/ContextTask';
export const Cards = () => {
    const {listTask, setListTask} =useContext(ContextTask);
    const deploy = (id) =>{
        const result = listTask.map((task) => {
            if(task.id == id){
                if (!task.descriptionActive){
                    task.descriptionActive = true;
                }else{
                    task.descriptionActive = false;
                }
            }
            return task
        })
        setListTask(result)
    };

    const deletTask =(id) =>{
        const result = listTask.filter((task) => task.id != id )
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

  return (
    <>
        {
            listTask.map((task) =>{
                return(
                    <div key={task.id} className='cards'>
                        <div className='cards__folded'>
                            <input className='cards__input' type="checkbox" name="controlled" onChange={()=>completeTask(task.id)} id="" defaultChecked={task.completed}/>
                            <div className='cards__text-content'>
                                <h2 className='cards__title'>{task.title}</h2>
                                <h3 className='cards__date'>{task.dueDate}</h3>
                            </div>
                            <div className='card__delet' onClick={() => deletTask(task.id)}>
                                X
                            </div>
                            <div className='card__icon-deploy ' onClick={()=>deploy(task.id)}>
                                <div>. . .</div>
                            </div>
                        </div>
                        <div className={ `cards__deploy ${task.descriptionActive? "active": ""}` }>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis unde esse adipisci! Esse ullam rerum odio aliquam dolorem, aliquid molestias perspiciatis, nobis obcaecati cupiditate repudiandae odit recusandae fugit vero nihil.
                        </div>
                    </div>
                )
            })
        }
    </>
    
  )
}
