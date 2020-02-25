function changeMe(arr) {
    if(arr.length == 0){
        console.log("");
    }
    else{
        var result = {
            'firstName': undefined,
            'lastName': undefined,
            'gender': undefined,
            'age': undefined,
        };
        for(i = 0; i < arr.length; i++){
            result['firstName'] = arr[i][0];
            result['lastName'] = arr[i][1];
            result['gender'] = arr[i][2];
            if(arr[i].length == 4){
                result['age'] = arr[i][3];
            }
            else{
                result['age'] = 'Invalid Birth Year'
            }
            
            var jsonObj = JSON.stringify(result);
            console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}: ${jsonObj}`)
        }
    }
    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""