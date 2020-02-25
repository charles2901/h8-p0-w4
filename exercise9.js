function checkAB(str) {
    for(i = 0; i < str.length; i++){
        if(str[i] == 'a'){
            for(j = i+1; j < str.length; j++){
                if(str[j] == 'b' && j - i == 4){
                    return true;
                }
            }
        }
        else if(str[i] == 'b'){
            for(j = i+1; j < str.length; j++){
                if(str[j] == 'a' && j - i == 4){
                    return true;
                }
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true 
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false