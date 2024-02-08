let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
//## 1. 어레이에 마지막 아이템 “Zebra” 제거하기

//pop(): 맨 마지막에 있는거 뺌
animals.pop()
console.log(animals)




//## 2. 주어진 어레이에 “Dog” 추가하기

//push(): 맨 뒤에 아이템 추가
animals.push("Dog")
console.log(animals)



//## 3. 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기

animals.push("Mosquito","Mouse","Mule")
console.log(animals)



//4. 해당 어레이에는 "Human"이 있는가?

console.log(animals.includes("Human"))


//5. 해당 어레이에는 “Cat” 이 있는가?

//대소문자 구분함.
console.log(animals.includes("Cat"))


//6. "Red deer"을 "Deer"로 바꾸시오

//대소문자 구분함.
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)


//7. "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오

//slice : 배열 아이템을 삭제 (시작점,끝점 끝점 미포함)
//        기존의 배열을 건드리지 않는다.(새 배열이 생김)
//        잘린값을 빼서 새로운 배열을 만들 때
//splice: 배열 아이템을 삭제(시작점,개수 )
//        기존의 배열을 건드린다.
//        기존의 배열을 바꿀 때
animals.splice(animals.indexOf("Spider"),3)
console.log(animals)


//8. "Tiger"이후의 값을 제거하시오

animals.splice(animals.indexOf("Tiger"))
console.log(animals)

//### 9. "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오

let animals2 = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1);

console.log(animals2)


//#### concat() : 두 개 이상의 배열을 연결하여 새로운 배열을 반환
//※ 중복 제거 x

let contryArr = ["korea", "japan", "america"]
let colorArr = ["red", "black"]

let newArr = contryArr.concat(colorArr)

console.log(newArr)
// ["korea", "japan", "america", "red", "black"]

//#### Set() : 중복되지 않은 요소만 저장


let arr1 = [10,30,50]
let arr2 = [50,70,90]

let conArr = arr1.concat(arr)
let newArr2 = [...new Set(conArr)]

console.log = (newArr2)
// [10,30,50,70,90]


