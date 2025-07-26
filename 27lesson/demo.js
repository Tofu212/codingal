var arr = [3, 32, 99, 11, 4, 7, 16, 24, 56, 42, 1]

arr.sort((a,b)=>a-b)
console.log(arr)

arr.sort((a,b)=>b - a)
arr.sort(function(a,b){return a-b})

console.log(arr)

var b = arr.map(e1=>el * 2)
console.log(b)