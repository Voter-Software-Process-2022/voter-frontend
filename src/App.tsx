import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import SignUp from './pages/SignUp'
import Router from './router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
