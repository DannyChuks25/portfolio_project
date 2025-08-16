import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Todo = () => {
  const todos = []
    const [newTodo, setNewTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleSubmitBtn = () => {
      if(newTodo.trim() !== ""){
        setTodoList([...todoList, newTodo])
        setNewTodo("")
        console.log(todoList)
      }
    }
    const handleDelete = (del) => {
      const updatedList = todoList.filter((updated, index) => index !== del)
      setTodoList(updatedList)
      alert(`Do you want to delete item ${del}`)
    }

  return (
    <div className='todo-body'>
      <div
        id="todo"
        className="text-white mt-6 full mx-auto p-5 shadow-purple-300 h-[400px] max-w-[400px]
        bg-[linear-gradient(240deg,hsl(283,95%,26%),hsl(283,81%,29%),hsl(283,68%,32%),hsl(283,35%,40%),hsl(283,89%,74%),hsl(283,91%,86%),hsl(282,63%,97%))]"
      >
        <h1 className="text-center text-xl pb-4 font-bold">TODO LIST</h1>
        <div className="text-white flex items-center justify-between border-0 bg-[#75428a] rounded-tr-xl rounded-br-xl">
          <input
            className="text-lg md:text-xl w-full px-3 outline-0"
            type="text"
            value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Create Todo..."
          />
          <button className="border-2 border-purple-500 cursor-pointer w-40 px-3 py-2 rounded-xl bg-[#5e0381] hover:bg-purple-700 hover:text-purple-200" onClick={handleSubmitBtn}> 
            Create Todo
          </button>
        </div>

        <div className="h-[240px] border-0 mt-3 overflow-y-auto">
          <ul>
            {
              todoList.map((item, num) => (
                 <li key={num} className="border-2 border-purple-500  cursor-pointer px-2 py-2 bg-[#75428a] mb-3 hover:bg-purple-700 flex justify-between items-center">
                  <span>{item}</span>
                  <FaTrash className='delIcon' onClick={() => handleDelete(num)} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
