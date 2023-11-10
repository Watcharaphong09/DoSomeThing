import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {

    return (
        <div className='flex flex-col font-itim drop-shadow-lg'>
            <li key={todo.id} className='flex lg:w-[30rem] max-w-[20rem] bg-slate-900 my-2 p-2 justify-between text-center rounded-md'>
                    <input type="checkbox" id="checkbox1" className='peer checked:bg-blue-500 mr-3 w-5' />
                    <label className='text-white text-2xl peer-checked:text-gray-400 peer-checked:line-through select-none max-w-[10rem] sm:max-w-[20rem] break-all'>{todo.text}</label>
                <div className='flex right-0 place-self-center'>
                    <button onClick={() => onEditClick(todo)} className='ml-3 bg-slate-500 rounded-md text-white w-8 h-8'><FaEdit className='mx-auto'/></button>
                    <button onClick={() => onDeleteClick(todo.id)} className='ml-3 bg-red-500 rounded-md text-white w-8 h-8'><FaTrash className='mx-auto'/></button>
                </div>
            </li>
        </div>
    )
}

export default TodoItem