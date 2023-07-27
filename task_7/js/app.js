let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// method 1
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
        console.log("number " + numbers[i] + " is divisible by 3");
    } else {
        console.log(numbers[i] + " not")
    }
}

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 5 == 0) {
        console.log("number " + numbers[i] + " is divisible by 5");
    } else {
        console.log(numbers[i] + " not")
    }
}

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 5 == 0 && numbers[i] % 3 == 0) {
        console.log("number " + numbers[i] + " is divisible by 5 and 3");
    } else {
        console.log(numbers[i] + " not");
    }
}

// or method 2

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
      console.log("number " + numbers[i] + " is divisible by 3 and 5");
    } else if (numbers[i] % 3 == 0) {
      console.log("number " + numbers[i] + " is divisible by 3");
    } else if (numbers[i] % 5 == 0) {
      console.log("number " + numbers[i] + " is divisible by 5");
    } else {
      console.log(numbers[i] + " not divisible by 3 or 5");
    }
  }