import React from 'react';
import "./cars.css";
export const Cards = () => {
  return (
    <div className='cards'>
        <div className='cards__folded'>
            <div className='cards__input'> 
                <input type="checkbox" name="" id="" />
            </div>
            <div className='cards__text-content'>
                <h2 className='cards__title'>Titulo</h2>
                <h3 className='cards__date'>2023-05-06</h3>
            </div>
            <div className='card__delet'>
                X
            </div>
            <div className='card__icon-deploy'>V</div>
        </div>
        <div className='cards__deploy'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis unde esse adipisci! Esse ullam rerum odio aliquam dolorem, aliquid molestias perspiciatis, nobis obcaecati cupiditate repudiandae odit recusandae fugit vero nihil.
        </div>
    </div>
  )
}
