let age = 21
let licence = true

if (age > 20) {
  console.log("운전 가능합니다")
} else if (age >= 18) {
  console.log("오토바이 운전이 가능")
} else {
  console.log("운전 불가능합니다")
}


//처음에 참이 나오면 그냥 종료됨.
if (age >= 18) {
  console.log("오토바이 가능합니다")
} else if (age >= 20) {
  console.log("운전 가능합니다")
} else {
  console.log("운전 불가능합니다")
}


if (age > 20) {
  if (licence == true)
    console.log("운전 가능합니다")
  else {
    console.log("면허를 따세요")
  }
} else {
  console.log("운전 불가능합니다")
}


//### 문제1.
//#### 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오.

let number = "1"
if (number > 0) {
  console.log("양수입니다")
} else if (number = 0) {
  console.log("0입니다")
} else {
  console.log("음수입니다.")
}


//삼항 연산자로~


console.log(number < 0 ? "음수입니다" : (number > 0 ? "양수입니다" : "0입니다"));


//### 문제2.
//#### 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.

let score = "79"

if (90 <= score && score <= 100) {
  console.log("A")
} else if (score >= 80 && score <= 89) {
  console.log("B")
} else if (score >= 70 && score <= 79) {
  console.log("C")
}
else if (score >= 60 && score <= 69) {
  console.log("D")
} else if (0 <= score && score <= 59) {
  gconsole.log("잘못된 점수입니다.")
} else {
  console.log("잘못된 범위의 점수입니다")
}



console.log(score >= 90 ? "A 등급" : score >= 80 ? "B 등급" : score >= 70 ? "C 등급" : score >= 60 ? "D 등급" : "F 등급");


//### 문제3.
//#### 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다.
//let skills = ["html","CSS","Javascript","React"]두 스킬이 없다면 "탈락"을 보여주는 프로그램을 짜시오.

let skills = ["html", "CSS", "React"]

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}



let hasJavascript = skills.includes("Javascript");
let hasReact = skills.includes("React");

let result = hasJavascript && hasReact ? "합격" : (hasJavascript || hasReact ? "예비" : "탈락");

console.log(result)
