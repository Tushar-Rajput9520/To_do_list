import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AppName from './components/AppName';


import Addtodo from './components/Addtodo';
import Todoitem1  from './components/Todoitem1';
import Todoitem2 from './components/Todoitem2';


function App() {
  const [count, setCount] = useState(0)

  return <center className="todo-container"> <AppName /> 
  <Addtodo />
  <div className="items-container">
  <Todoitem1 /> 
  <Todoitem2 />
  </div>
  </center>


}
export default App
