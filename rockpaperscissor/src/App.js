import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import React from 'react'



//반드시 하나만 return됨.
const App = () => {
  return (
    <div>
      <div className='main'>
        <Box title='YOU' />
        <Box title='COM' />
      </div>

      <div className='main'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  )
}

export default App
