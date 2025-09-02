
let str1 = " gfuh ieiuei ";
let first5 = str1.trim().slice(0, 5);
console.log(" First five letters:", first5); 

let str2 = "hduej dij";
console.log(" Length:", str2.length);             
console.log(" Uppercase:", str2.toUpperCase());    

let str3 = " biji jdo ";
let result3 = str3.toLowerCase().trim();
console.log(" Lowercase & Trimmed:", result3);

let sentence = "I like apples";
let replaced = sentence.replace("apples", "mangoes");
console.log(" Replaced:", replaced);              

console.log(" Coercion Examples:");
console.log(89 + "hello" + 90 / 9);   
console.log("5" - 2);                 
console.log("10" * "2");              
console.log(true + 5);              
console.log(false + "yes");     
console.log(null + 7);                
console.log(undefined + 3);          

