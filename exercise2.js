// dengan algoritma euclid
function fpb(angka1,angka2) {
  while(angka2 % angka1 !== 0){
    var temp = angka1;
    angka1 = angka2  % angka1;
    angka2 = temp;
  }
  return angka1;
}


// dengan algoritma pemfaktoran

// function fpb(angka1, angka2){
//   var factorialNum1 = factorialNum(angka1);
//   var factorialNum2 = factorialNum(angka2);
//   var gcd = 1;
//   for(i = 0; i < factorialNum1.length; i++){
//       for(j = 0; j < factorialNum2.length; j++){
//           if(factorialNum1[i] == factorialNum2[j]){
//               gcd *= factorialNum1[i];
//               factorialNum2[j] = null;
//               break;
//           }
//       }
//   }
//   return gcd;
// }

// function factorialNum(num){
//   var result = [];
//   var checkPrimeNum = checkPrime(num);
//   var counter = 2;
  
//   while(checkPrimeNum == false){
//       while(num % counter == 0){
//           result.push(counter);
//           num /= counter;
//       }
//       checkPrimeNum = checkPrime(num);
//       counter++;
//   }
//   if(num != 1){
//       result.push(num);
//   }
//   return result;
// }

// function checkPrime(num){
//   var primeNum = true;
//   for(i = 2; i < num; i++){
//       if(num % i == 0){
//           primeNum = false;
//       }
//   }
//   return primeNum
// }

  
  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1




