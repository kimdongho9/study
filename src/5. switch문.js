let menu = 1;

if (menu == 1) {
  console.log("물건 사기")
} else if (menu == 2) {
  console.log("잔고확인")
} else if (menu == 3) {
  console.log("히스토리확인")
} else {
  console.log("홈으로 가기")
}


switch (menu) {
  case 1:
    console.log("물건 사기")
    break;
  case 2:
    console.log("잔고확인")
    break;
  case 3:
    console.log("히스토리확인")
    break;
  default:
    console.log("홈으로 가기")
}



//삼항 연산식 조건 ? true : false
let answer = menu <=3? "범위 안 숫자" : "범위 밖의 숫자"

console.log(answer)



