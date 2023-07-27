const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const table = document.getElementById('table');
const numb = document.getElementById('evenNum');
const prime = document.getElementById('primeNum');

function even() {
    // const numb = document.getElementById('number');
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            numb.textContent = array[i] + "is even";
            console.log(array[i] + "is even")
        } else {
            numb.textContent = array[i]+ "is odd";
            console.log(array[i] + "is odd" )
        }
    }
}


function isPrime(number){
    if(number<1){
        prime.innerHTML = number;
        return false
      
    }
    for (let i=2; i< number ; i++){
        if(number % i ===0){
            prime.innerHTML = number;
            return false 
        }
    }
    return true
}
// console.log(isPrime(6));

// even numbers call
even()

// prime
isPrime()