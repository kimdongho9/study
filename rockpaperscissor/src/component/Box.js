import React from 'react';


const Box = (props) => {
  let result; // 결과를 담을 변수 선언

  // 만약 props.title이 "COM"이고, 결과가 비긴 것이 아니며, props.result에 값이 있는 경우
  if (
    props.title === "COM" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 만약 결과가 "win"이면 "lose"로, 그렇지 않으면 "win"으로 설정
    result = props.result === "win" ? "lose" : "win";
  } else { // 위의 경우가 아니라면 props로 전달된 결과를 그대로 사용
    result = props.result;
  }

  
  if (props.title === "COM") {
    console.log("com", result); 
  }

  console.log("props", props); 


  // Box 컴포넌트의 렌더링
  return (
    <div className={`box ${result}`}> 
      <h1>{props.title}</h1> 
      <img className="item-img" src={props.item && props.item.img} /> 
      <h2>{props.result}</h2> 
    </div>
  );
};

export default Box; 