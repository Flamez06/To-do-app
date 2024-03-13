import { useState } from "react"
import "./App.css"

function App() {
  const [item,setItem] = useState('')
  const [todos,setToDos]= useState([])

  function HandleSubmit(e){
    e.preventDefault()
    setToDos([...todos,{title:item,completed:false}])
    setItem('')
  }

  function DeleteItem(item){
    setToDos(todos.filter((citem) =>{
      return citem!==item
    }))
  }

  function ToggleTodo(id,completed){
    let temp=todos
    for(let i=0;i<temp.length;i++){
      if (temp[i].title==id){
        temp[i].completed=completed
      }
    }
    setToDos(temp)
  }
  
  return (
    <>
      <div className="main-container">
        <div className="f-container">
          <form onSubmit={HandleSubmit}>
            <label htmlFor="txti">
              <h1 className="htext">Enter new item</h1>
            </label>
            <input id="txti" value={item} onChange={(e)=>setItem(e.target.value)} type="text" autoComplete="off" /><br/>
            <button id="ab">Add</button>
          </form >
          <h1 className="htext">Todo List</h1>
          {todos.map((item) => {
            return (
              <ul key={item.title}>
                <input id="cb" type="checkbox" onChange={(e)=>ToggleTodo(item.title,e.target.checked)} />
                {item.title}
                <button id="delb" onClick={() => DeleteItem(item)}>Delete</button>
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
