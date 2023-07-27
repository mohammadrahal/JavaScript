// add
function add(num1, num2){
  let sum =  num1+ num2;
  console.log(sum);
   return sum;
}

// sub
function sub(num1,num2){
let sum =  num1 - num2;
console.log(sum);
 return sum;
}
// mul
function mult(num1, num2){
let sum =  num1 * num2;
console.log(sum + " mult");
 return sum;
}
// div
function div(num1,num2){
let sum =  (num1 / num2);
console.log(sum + " div");
 return sum;
}

// module
function mode(num1, num2){
let sum =  (num1 % num2);
console.log(sum + " module");
 return sum;
}


add(30,15);
sub(4,5);
div(8,10);
mode(1,6);
mult(12,88);

function myCalculator(type,num1,num2){
  if(type==="add"){
    let sum= num1 + num2
    console.log(sum)
  }else if(type==="sub"){
  let sum= num1 - num2
  console.log(sum)
}else if(type==="mult"){
let sum= num1 * num2
console.log(sum)
}else if(type==="mult"){
  let sum= num1 / num2
  console.log(sum)}
}
  


