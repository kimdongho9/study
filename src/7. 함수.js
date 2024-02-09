//함수는 어떤 일의 단위다. 또한 자주쓰는 내용들을 묶어서 함수로 만들어 두면 필요할때 언제든 불러다 쓸 수 있다.



console.log("빵두기")
console.log("상추두기")
console.log("고기패티두기")
console.log("뚜껑덮기")

console.log("감튀박스선택")
console.log("감튀 담기")


//함수이름 (매개 변수) 
function makeBurger(type, size, num) {
  console.log("빵두기")
  console.log("상추두기")


  // return 만나면 그 함수는 바로 종료!!
  // 아래 if는 생략 된다!
  if (num < 1) {
    return "버거 개수가 0개입니다."
  }



  if (type == "불고기") {
    console.log("고기패티두기")
  } else if (type == "새우") {
    console.log("새우패티두기")
  }

  console.log("뚜껑덮기")
  console.log(type, "버거", size, "사이즈", num, "개 준비완료")
  return "완료되었습니다."
}

function serveCoke() {
  console.log("콜라통 선택")
  console.log("얼음 담기")
  console.log("콜라 담기")
}

function servefrenchFries() {
  console.log("감튀박스선택")
  console.log("감튀 담기")
}


//함수 부르지 않는 실수 은근 많음!
//매개변수가 순차대로 들어간대로 출력 된다!
// let result = makeBurger("불고기","L",0)
// // serveCoke()
// // servefrenchFries()

// console.log(result)

function makeSet() {
  makeBurger("불고기", "L", 0)
  serveCoke()
  servefrenchFries()
}

makeSet()



//### 문제 1.
//#### 안녕 내이름은 제시카야 라는 문장을 프린트하는 함수 'greet'를 만드시오

function greet() {
  console.log("안녕 내 이름은 제시카야")
}

greet()

//### 문제 2.
//#### 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예)"안녕 내이름은 에밀리야",안녕 내이름은 할리야


function greet1(name) {
  console.log("안녕 내 이름은 " + name + "야")
}
greet1("할리")

//### 문제 3.
//#### 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오


function greet(name) {
  console.log("안녕 내 이름은", name, "야")
  return name
}
// 결과 확인 법 
let name = greet("지우")
console.log("안녕 내 이름은", name, "이야")

//### 문제 4.
//#### meetAt 함수를 만들어주세요.
//인자를 세개 받습니다.
//첫번째 인자는 년도에 해당하는 숫자입니다.
//두번째 인자는 월에 해당하는 숫자입니다.
//세번째 인자는 일에 해당하는 숫자입니다.
//년도 인자만 받았을 경우 -> "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//년도 월 인자를 받았을 경우 -> 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴해주세요.
//년도 월 일 인자를 전부 받았을 경우 -> 년도 월 일을 조합해서 "1234/5/6"과 같은 형식의 문자열을 리턴해주세요.


function meetAt(yy, mm, dd){
  if (dd) {
    return `${yy}/${mm}/${dd}`;
  }
  if (mm) {
    return `${yy}년 ${mm}월`;
  }
  if (yy) {
    return `${yy}년`;
  }
}
console.log(meetAt(1))


//### 문제 5.
//findSmallestElement 함수를 구현해 주세요
//findSmallestElement 의 arr인자는 숫자 값으로만 이루어진 배열입니다.
//arr의 값들 중 가장 작은 값을 리턴 해주세요.
//만일 arr가 비어있으면 0을 리턴 해 주세요.
//예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
//이용되는 배열
//[100,200,3,0,2,1]

function findSmallestElement (arr) {
  let result = arr[0];
  if (arr.length === 0){
    return 0
  }
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
    return result
}
let Small = findSmallestElement([100,200,3,0,2,1])

console.log(Small);

//### 문제 6.
//돈을 매개변수로 받으면 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.

let coin = [50000,10000,5000,1000,500,100]

function Calculate(money) {
  for(let i=0;i<coin.length;i++){
    
      let num = Math.floor(money / coin[i])
      console.log(coin[i]+"X"+num)
      money = money - (coin[i]*num)
    
  }
}

Calculate(12300)
