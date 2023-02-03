import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Task1 } from './components/tasks/Task1'
import { Task2 } from './components/tasks/Task2'
import { Task3 } from './components/tasks/Task3'
import { Task4 } from './components/tasks/Task4'
import { Task5 } from './components/tasks/Task5'




function App() {

  return (
    <div className="App">
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
    </div>
  )
}

export default App
