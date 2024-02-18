let names = ["Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein"]





names.forEach((item, index) => {
  console.log(item, index)
})




//map: 반환값을 배열에 담아 반환한다.
// 원하는 데이터를 가져오고 싶을 떄 많이 쓰임
let data = names.map((item)=>{
  return item.name
})

console.log(data)

//filter: 조건에 충족하는 아이템만 배열에 담아 반환한다.
//        조건으로 찾아냄
let data2 = names.filter((item)=>{
  return item.age==23
})

console.log(data2)

//some: 조건에 충족하는 아이템 하나라도 있으면 true,없으면 false

let data3 = names.some((item)=>{
  return item.startsWith("L")
})
console.log(data3)



//every: 모든 배열에 아이템이 조건을 충족하면 true,아니면 false
let data4 = names.every((item)=>{
  return item.startsWith("L")
})
console.log(data4)


//find: 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째 것만)

//findIndex: 조건에 충족하는 아이템의 인덱스값 반환
let data5 = names.find((item)=>{
  return item.startsWith("L")
})
console.log(data5)


//***Map 
//모든 이름을 대문자로 바꾸어서 출력하시오.
let study = names.map((item) =>{
  return item.toUpperCase()
})
console.log(study)

//성을 제외한 이름만 출력하시오
let study1 = names.map((item) =>{
  return item.split(' ')[0]
})
console.log(study1)
//이름의 이니셜만 출력하시오
let study2 = names.map((item) =>{
  let split = item.split(' ')
  let initial = "";
  split.forEach((nameitem)=> (initial += nameitem[0]));
  return initial
})
console.log(study2)


//***Filter
//이름에 a를 포함한 사람들을 출력하시오.
let study3 = names.filter((item) =>{
  return item.includes('a')
})
console.log(study3)

//이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.

let study4 = names.filter((item)=>{
  let split = item.split("")
  return split.some((letter,index)=>letter == split[index+1])
})
console.log(study4)



//***some 
//전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(names.some((item)=>item.length>=20))


//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let study5 = names.filter((item)=>{
  let split = item.split(' ')
  split.pop()
  return split.some((letter)=>letter.toLocaleLowerCase().includes("p"))
})
console.log(study5)


//***every
//모두의 전체 이름의 길이가 20자 이상인가?

console.log(names.every(item=>item.length>=20))

//모두의 이름에 a가 포함되어 잇는가?
console.log(names.every(item=>item.includes('a')))

//find 
//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
console.log(names.find(item=>item.length>=20))

//미들네임이 포함되어있는 사람을 찾으시오 
console.log(names.find(item=>item.split(' ').length>=3))

//findIndex 
//전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.length>=20))

//미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.

console.log(names.findIndex(item=>item.split(' ').length>=3))