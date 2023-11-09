import React from 'react'

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
    return (
        <div className='rounded-lg bg-slate-400 pr-[5px] pb-[7px]'>
          <form onSubmit={onAddFormSubmit} className='rounded-lg p-4 font-itim bg-slate-300'>
          <input 
            className='p-2 w-[20rem] rounded-lg'
            type="text" 
            name="todo" 
            placeholder="Create a new todo"
            value={todo} 
            onChange={onAddInputChange}
          />
          <button type="submit" className='ml-3 bg-green-500 p-2 rounded-lg text-white'>Add</button>
        </form>
        </div>
    )
}

export default AddTodoForm