import './App.css';
import Box from "./component/Box"
import React, { useState ,useEffect} from 'react'

function App() {
  let counter = 0;

  //UI에 보여줘야하는 값은 무조건 useState
  //비동기로 작동을 함.
  const [counter2, setCounter2] = useState(0); 
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value+2)
    //비동기라서 counter2가 그전의 값을 출력함.
    console.log(counter,counter2)

  }

//1. 유저가 버튼을 클릭한다.
//2. counter + 1해서 1이됨.
//3. setState함수 호출
//4. console.log실행됨.
//5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전의 값이 보인다.
//6. 함수 끝
//7. app다시 re render
//8. let counter = 0을 거치면서 counter 값은 0으로 초기화가 된다.
//9.  state값은 update가 되면서 다시 render를 한다

useEffect(() => {
  console.log("useEffect1 Fire!")
},[])

useEffect(() => {
  console.log("useEffect1 Fire!", counter2, value)
},[counter2,value]);

useEffect(()=>{
  console.log("다른내용 하고싶어요",value);
},[value])


  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!!</button>
    </div>
  );
}

export default App;


