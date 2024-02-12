let patient = {
  name :"jimin",
  age : 17,
  disease : "cold"
}

console.log(patient)
//둘다 사용 가능
console.log(patient.age)
console.log(patient["age"])

//바꾸는 것도 가능
patient.name = "jk"
patient["age"] = 25
console.log(patient)

let patientList = [{name: "jimin",age : 13},{name:"jk",age:25},{name:"jhope",age:40}]

console.log(patientList)
console.log("첫번째 환자는:", patientList[0])
console.log("첫번째 환자의 나이는?",patientList[0]["age"])