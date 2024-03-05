import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import React, { useState } from 'react'


const choice = {
  rock:{
    name:"Rock",
    img:"https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper:{
    name:"paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
    
  }
}
//반드시 하나만 return됨.
const App = () => {
  const [userSelect,setUserSelect] = useState(null)
  const [comSelect,setComSelect] = useState(null)

  const play=(userChoice)=>{

    // userSelect = choice[userChoice]요렇게는 안된다.

    setUserSelect(choice[userChoice])
    let comChoice = randomChoice()
    setComSelect(comChoice)
    
  };

  const randomChoice = () => {

    // 객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
    let itemArray = Object.keys(choice);
    console.log("item array",itemArray)

    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random value",randomItem)
    
    let final = itemArray[randomItem];
    console.log("final",final)

    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title='YOU' item={userSelect}/>
        <Box title='COM' item={comSelect}/>
      </div>
        

      
      <div className='main'>
         {/* 함수를 콜백형태로 전달해주는 것이 중요! */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
  )
}

export default App
