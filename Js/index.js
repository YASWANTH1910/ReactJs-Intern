
console.log("this is external js")

// function study() {
//     console.log("hi yash")
// }
// study()

let str = "ycumdjds cqd"
console.log(str.toUpperCase())
console.log(str.length)
console.log(str.charAt(2))
console.log(str.slice(0,6))
console.log(str.includes("ycum"))
var str1=  '   dyji ii   '
console.log(str1.trim())
// indexof will give first match
console.log(str.indexOf('m'))
// lastindexof gives last match
console.log(str.lastIndexOf('d'))
console.log(str + str1)
// string literals
console.log(`${str} ${str1}`)

 var num = 33.554
console.log(num.toFixed(2))
console.log(Math.round(num))

// push -- is to add elements in the end of array
// unshift -- to add in the front
//pop -- to delete in the end
//shift -- to delete in the first

// substring can`t slice from end
console.log(str.substring(1,5))
// slice can cut from end, negative index also
console.log(str.slice(-6)) 
console.log(str.substring(-2))

let array = ['yash','dev','abhi','bharath','adnan']
// deleting at particular position. array splice (start index, how many elements to delete, add elements(opt))
array.splice(2,1)
console.log(array)

// adding at particular position. array splice (start index, how many elements to delete, add elements(opt))
array.splice(4,0,'abhi')
console.log(array)

array.splice(2,1,'ybvdfb')
console.log(array)

let x;

x = Math.floor(Math.random() * 200 + 1);
console.log(x)

let d = Date.now();
d = Math.floor(Date.now()/1000);

console.log(d)

let d1 = Date(1755593727);
console.log(d1)









