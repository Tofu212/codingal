var a = {

name: "Aaryavrat",

age: 46,

country: "Singapore",

phone: '+65-8724923'

}

var b = JSON.stringify(a)

console.log(b)

var c = JSON.parse(b)

console.log(c)

function showMessage() {

console.log("Welcome everybody: Aaryavrat and Safwana")

}

function greetUser(cb) {

console.log("starting to greetuser function")

cb()

}

greetUser(showMessage)

console.log("hi")

console.log("hello")

console.log("yoyo")

console.log("123")

setTimeout(() => console.log("i am printing after sometime"), 9000)

console.log("456")

var fetchData = () => {

return new Promise((resolve, reject)=>{

setTimeout(()=>{

resolve(24)

}, 5000)

})

}

fetchData().then((data)=>{

console.log(data+1)

})

var getUserData = async ()=>{

console.log("fetching user data started")

const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

const data = await response.json()

console.log("user name: ", data)


}

getUserData()


