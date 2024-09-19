import React, { useState } from 'react'

const UseMemo = () => {
const [todo,setTodo]= useState(['New Todo'])
const [count, setCount]= useState(1);
  return (
    <div>
        <h1>My todos</h1>
       {todo.map((t)=><p key={t}>{t} <br/></p>) }
        <button onClick={()=>{
            setTodo((prev)=>[...prev,"New Todo"]);
           setCount((c)=>c+1)
        }}>Add Todo</button>
        <p>count:{count}</p>
    </div>
  )
}

export default UseMemo