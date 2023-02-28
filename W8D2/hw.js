function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}
//mysteryScoping1()


function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

//mysteryScoping2()



// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';  
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping3()

// //mysteryScoping3()

// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';  
//     console.log(x);
//   }
//   console.log(x);
// }

// //mysteryScoping4()

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';  
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
// //mysteryScoping5()

function madLib(verb, adjective, noun) {
  //var = 
  const sentence = 'We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}';
  return sentence;
}

console.log(madLib('make', 'best', 'guac'))


function isSubstring(sentence, word) {
  const words = sentence.split(" ");
  return words.includes(word);
}


function fizzBuzz(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3 === 0 || array[i] % 5 === 0) && !(array[i] % 3 === 0 && array[i] % 5 === 0)) {
      result.push(array[i]);
    }
  }
  return result;
}


function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }

  return sum;
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



