var a = math.random()
console.log(a)

function bananafxn(){
    return "banana"
}

var b = bananafxn()
console.log(a)

console.log(a.toUpperCase())
console.log(a.toLowerCase())

var c = 14.5

console.log(c.toFloor())
console.log(c.toceil())

console.log(Math.floor(c))
console.log(Math.ceil(c))

let i 
for (i = 0; i < 10; i++) {
    console.log("Banana")
} 

var d = [1, 4, 9, 16, 25, 36]

for(i = 0; i < d.length; i++) {
    console.log(d[i])
}

var day = 1

switch (day) {
    case 1:
        console.log("monday")
        break;

    case 2 :
        console.log("tuesday")
        break;

     case 3:
        console.log("wendnesday")
        break;
    default:
        console.log("oops, provide suitable day")
}
