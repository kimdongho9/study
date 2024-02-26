import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import React from 'react'

//1. 박스 2개( 타이틀,사진,결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에따라 테두리 색이 바뀐다 
//   (승리 - 파랑, 패배-빨강  비기면- 검정색)



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
