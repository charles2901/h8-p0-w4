function urutkanAbjad(str){
    var arr = [];
    for(i = 0; i < str.length; i++){
        arr.push(str[i])
    }
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var result = '';
    for(i = 0; i < arr.length; i++){
        result += arr[i]
    }
    return result;
}
// function urutkanAbjad(str){
//     var result = '';
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
//     for(i = 0; i < alphabet.length; i++){
//         for(j = 0; j < str.length; j++){
//             if(alphabet[i] == str[j]){
//                 result += alphabet[i]
//             }
//         }
//     }
//     return result;
// }

// with built in

// function urutkanAbjad(str) {
//     return str.split('').sort().join('');
// }

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'