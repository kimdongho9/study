//i = i+1 i++
//짝수

//구구단
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + '*' + j + '=' + i * j)
  }
}

let fruit = ["banana", "apple", "grappe", "mango"]

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i])
}




//문제 1.
//1부터 100까지의 합
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum += i
}
console.log(sum)

//문제 2.
//1부터 100까지 홀수만 출력
for (let i = 1; i <= 100; i += 2) {
  console.log(i)
}



//문제 3.
//1부터 50까지 369 숫자중 결과를 프린트 하자.
for (let i = 1; i <= 50; i++) {
  let stringValue = i.toString()
  let result = ""
  for (let j = 0; j < stringValue.length; j++) {
    if (stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9") {
      result = result + "짝"
    }
  }

  console.log(result.length > 0 ? result : i)
}



//문제 4.
//주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

let n = 9
let a = true

if (n === 1) {// 1은 소수가 아님 
  a = false
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      a = false
    }
  }
}

console.log(a)






