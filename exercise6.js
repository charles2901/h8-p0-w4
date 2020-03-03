function digitPerkalianMinimum(angka) {
    var factor = [];
    var checkPrime = true;
    for(i = 2; i < angka; i++){
        if(angka % i == 0){
            factor.push(i);
            checkPrime = false;
        }
    }
    if(checkPrime){
        return angka.toString().length + 1;
    }

    var tempResult = [1 + '*' + angka];
    
    while(factor.length > 0){
        tempResult.push(factor.shift() + '*' + factor.pop())
    }
    
    var lenTempResult = [];
    for(i = 0; i < tempResult.length; i++){
        lenTempResult.push(tempResult[i].length - 1);
    }

    for(i = 0; i < lenTempResult.length; i++){
        for(j = 0; j < lenTempResult.length; j++){
            if(lenTempResult[j+1] < lenTempResult[j]){
                var temp = lenTempResult[j+1];
                lenTempResult[j+1] = lenTempResult[j];
                lenTempResult[j] = temp;
            }
        }
    }
    return lenTempResult[0]
    // return Math.min(...lenTempResult)
    
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2