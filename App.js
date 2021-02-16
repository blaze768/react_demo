import React, { useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App(){

  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  function addItem(e){
    console.log("Add Clicked")
    const trimmedText = e.trim()
    if(trimmedText.length > 0){
      setList([...list, trimmedText])
    }
  }

  function handleChange(e){
    setItem(e.currentTarget.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    addItem(item)
    setItem("")
  }

  const removeItem = index =>{
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  function getDate(){
    var tempDate = new Date()
    var date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear()
    var currentDate = "Added: " + date.toString()
    return currentDate
  }
  
  return (
    <div className="App">
      <h1>Todo List </h1>
      <input 
        value={item}
        type='text' 
        onChange={handleChange}
        placeholder='enter a todo item...'>
      </input>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {list.map(items => 
          {return <li>
          {items}
          <button onClick={removeItem}>Remove</button>
          {getDate()}
          </li>})}
      </ul>
    </div>
  );
}

export default App;
