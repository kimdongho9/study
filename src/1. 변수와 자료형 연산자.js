password = "pink"
password = "black"

console.log(password)


let number = "123" + 1//""는 문자 취급


let number1 = 1

number1 + 1 //이거는 그냥 소멸 된다. 
number1 =  number1 + 1 //이렇게 항상 "=" 을 해줘야 값으로 불러올수 있다!


console.log(number)
console.log(number1)

 
 //###문제 1번.

let a = 30;
let b = 50;
console.log(a,b);
//이걸 a=50 b=30으로 나오게 (변수 temp를 이용해서)

let temp = a
a = b
b = temp

console.log(a,b)


//####문제 2번 .
//값 예상해보기!
javascript=
console.log(20+30)        //50
console.log("20+30")          //2030
console.log("Hello"+""+2021) //Hello2011
console.log(1+2*3)        //7
console.log((1+3)**2)     //16
console.log(1/0)          //infinity
console.log(6%2)          //0
console.log(7.5%2)        //1.5
console.log(5==5)         //true
console.log(5===5)        //true
console.log(5=="5")       //true    
console.log(5!=5.0)       //false
console.log(5!==5.0)      //false
console.log("true"===true)//false
console.log(5<=5.0)     //true 
console.log(5>=5)       //true
console.log(true||true) //true
console.log(true||false)//true
console.log(true&&true) //true
console.log(true&&false)//false
console.log(!true)//false
console.log(!false)//true




