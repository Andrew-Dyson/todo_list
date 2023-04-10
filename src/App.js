import React, {useState} from 'react';
import './App.css';

function App() {
  const [todoitems, setTodoItems] = useState([
    { name : "Buy Shopping", id:1},
    { name : "Clean Bathroom", id:2},
    { name : "Car's MOT", id:3},
  ]);
 
  const [newToDoItem, setNewToDo] = useState("");

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const copyToDos = [...todoitems]
    copyToDos.push({
      name : newToDoItem,
      id: Date.now()
    })
    setTodoItems(copyToDos)
    setNewToDo("")
  }


return(
<>
<h1> To Do List </h1>
<ul>
{todoitems.map(todoitem => {
  return(
  <li key = {todoitem.id}><span>{todoitem.name}</span></li>
  )
})}
</ul>
<form onSubmit = {handleToDoSubmit}>        
        <label htmlFor="new-todo"> Add a new task: </label>   
        <input type="text" id="new-todo" onChange = {handleToDoInput} value = {newToDoItem}/>    
        <button> Save To Do </button>             
            
</form>
</>
)
};

export default App;