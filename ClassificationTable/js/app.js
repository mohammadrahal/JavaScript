const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const table = document.getElementById('table');
const numb = document.getElementById('evenNum');
const prime = document.getElementById('primeNum');

function even() {
    // const numb = document.getElementById('number');
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            numb.innerHTML = i + "is even";
            console.log(i)
        } else {
            numb.innerHTML = i + "is odd";
        }
    }
}


function isPrime(array){
    if(array<1){
        prime.innerHTML = array;
        return false
      
    }
    for (let i=2; i< array.length ; i++){
        if(array % i ===0){
            prime.innerHTML = array;
            return false 
        }
    }
    return true
}
// console.log(isPrime(6));

// even numbers call
even()