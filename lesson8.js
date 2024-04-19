helloOne()
function helloOne() {
    console.log("Hello")
}

let helloThree = () => {
    console.log("Hello three")
}
helloThree()

function printName (name, lastName) {
    console.log(name + ' ' + lastName)
}
printName ("Lana", 'Aguilaro')

function multiplyByTwo(number) {
    let result = number * 2
    return result
}
let myResult = multiplyByTwo(5)
console.log(myResult)