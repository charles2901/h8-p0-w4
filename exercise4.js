function cariModus(arr){
    var uniform = true;
    for(i = 1; i < arr.length; i++){
        if(arr[i] != arr[0]){
            uniform = false;
            break;
        }
    }
    if(uniform == true){
        return -1
    }

    var temp = [];
    for(i = 0; i < arr.length; i++){
        var modusCandidate = false;
        for(j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                modusCandidate = true;
                break;
            }
        }
        for(k = 0; k < temp.length; k++){
            if(arr[i] == temp[k]){
                modusCandidate = false;
            }
        }

        if(modusCandidate == true){
            temp.push(arr[i])
        }
    }
    

    if(temp.length == 1){
        return temp[0]
    }
    else if(temp.length == 0){
        return -1
    }
    else{
        var modus = undefined;
        var countModus = 0;
        for(i = 0; i < temp.length; i++){
            var countTemp = 0;
            for(j = 0; j < arr.length; j++){
                if(temp[i] == arr[j]){
                    countTemp++;
                }
            }
            if(countTemp > countModus){
                countModus = countTemp;
                modus = temp[i];
            }
        }
        return modus;
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1