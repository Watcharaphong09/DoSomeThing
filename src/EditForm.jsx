import React from 'react'

const EditForm = ({ 
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}) => {
    return (
        <div className='rounded-lg bg-slate-400 pr-[5px] pb-[7px]'>
          <form onSubmit={onEditFormSubmit} className='rounded-lg p-4 font-itim bg-slate-300'>
          <label htmlFor="editTodo">Edit todo: </label>
          <input 
            className='p-2 w-[20rem] rounded-lg'
            type="text" 
            name="editTodo"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={onEditInputChange}
          />

          <button type="submit" className='ml-3 bg-green-500 p-1 rounded-lg text-white'>Update</button>
          <button onClick={() => setIsEditing(false)} className='ml-3 bg-red-500 rounded-md text-white p-1'>Cancel</button>
        </form>
        </div>
    )
}

export default EditForm