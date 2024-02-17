//***객체 초기화
let name = "제라드"
let age = 20
let cute = true

let person = {name, age, cute}
//let person = {name:name, age:age, cute:cute}와 같다




//***Destructuring
let Liverpool = {
  name1:"jota",
  num1:20,
  cute1:true
}

let {name1,num1,cute1} = Liverpool

// let name1 = Liverpool.name 
// let age1 = Liverpool.age 
// let cute1 = Liverpool.cute

 console.log(Liverpool)

 let name2 = "누나"
 let age2 = 18

 // ***Template Literal
 // console.log("제 이름은 "+name2+"입니다 제 나이는"+age2+"입니다")
 console.log(`제이름은 ${name2}입니다 제 나이는 ${age2}입니다`)


 let array = [1,2,3]
 let [a,b,c] = array
//  let a = array[0] 
//  let b = array[1] 
//  let c = array[2] 


//***Rest destructuring
let Liverpool2 = {
  name3 : "살라",
  age: 10,
  cute:true
}

let {name3,...rest2} = Liverpool2
console.log(rest2) //{age:17, cute: true}

let array1 = [1,2,3]
let [a1,...rest3] = array
console.log(rest3)//[2,3]

//spread

let a2 = [1,2]
let b2 = [3,4]
let c2 = [5,6]

// let result = a.concat[b,c]
let result = [...a2,...b2,...c2] 
console.log(result) // [1,2,3,4,5,6]





//***화살표 함수 
// function foo () {
//   console.log(hello)
// }

let foo = () =>{
  console.log("hello")
  return "haha"
}

console.log(foo())


//화살표 함수를 쓰면 안되는 경우 (this를 못씀)
// * object안에 함수 정의시

const Liverpool3 = {
points: 23,
score: function (){
  this.points++; // 여기에선 화살표함수 쓰면 point가 증가 안함
  
}
}

let age4 = 20
var obj = {
  age:12,
  foo: function(){
    console.log(this.age)
  }
}
obj.foo()


