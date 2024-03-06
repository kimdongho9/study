import './App.css';
import Box from "./component/Box"
import React, { useState } from 'react'


const choice = {
  rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"

  }
}
//반드시 하나만 return됨.
const App = () => {
  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {

    // userSelect = choice[userChoice]요렇게는 안된다.

    setUserSelect(choice[userChoice]);

    //com의 가위바위보를 랜덤으로 나오게 함.
    let comChoice = randomChoice();
    setComSelect(comChoice);

    //win인지 lose인지 나타냄.
    setResult(judgement(choice[userChoice], comChoice));

  };

  //유저가 이겼을 때 경우의 수들
  const judgement = (user, com) => {
    console.log("user", user, "computer", com)


    if (user.name == com.name) {
      return "tie"
    } else if (user.name == "Rock")
      return com.name == "Scissors" ? "win" : "lose"
      else if (user.name == "Scissors")
      return com.name == "Paper" ? "win" : "lose"
      else if (user.name == "Paper")
      return com.name == "Rock" ? "win" : "lose"
  }


    //랜덤으로 번호 나오게 하기(com)
  const randomChoice = () => {

    // 객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray)

    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem)

    let final = itemArray[randomItem];
    console.log("final", final)

    return choice[final]
  }




  return (
    <div>
      <div className='main'>
        <Box title='YOU' item={userSelect} result={result} />
        <Box title='COM' item={comSelect} result={result} />
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
