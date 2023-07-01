import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import Todo from './Todo'

const style = {
  bg: ` h-screen w-screen p-4 bg-gradient-to-r from-[#ffff] to-[#1cb5e0]`,
  container: `bg-white max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: ` text-2xl font-semibold text-center text-gray-900 p-2`,
  form: ` flex justify-between`,
  input: ` border p-2 w-full text-xl `,
  button: ` border p-3 ml-2 bg-indigo-300 text-black`,
  count: ` text-center p-2`
}

const App = () => {
  const [todos, setTodos] = useState (['Learn React', "Grind Leetcode"])



  //create todo
  //read to todo


  //update todo
  //delete todo

  return (
    <div className={style.bg}>
      
      <div className={style.container}>

        <h3 className={style.heading}>Todo App</h3>

        <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add Todo'/>
          <button className={style.button}><AiOutlinePlus size={25} /></button>
        </form>
      
        <ul>
          {todos.map ((todo, index)=>(
            <Todo key={index} todo={todo}/>
          ))}
        </ul>

        <p className={style.count}>You have 2 todos</p>
        
      </div>

    </div>
  
  )
}
export default App

