let customer = {
    firstName: 'John',
    lastName:'Smith',
    fruits: ["Apple", "Banana", "Orange"]
}
customer.firstName = "Lana",
customer["lastName"] = "Agularo"
console.log(`${customer.firstName} ${customer.lastName}`)

let fruits = ["Apple", "Banana", "Orange"]
fruits[1] = "Kiwi"
console.log(fruits[1])
console.log(customer.fruits[0])