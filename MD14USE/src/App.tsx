import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Task1 } from './components/tasks/Task1'
import { Task2 } from './components/tasks/task2'



function App() {
  return (
    <div className="App">
      <Task1 />
      <Task2 />      
    </div>
  )
}

export default App
