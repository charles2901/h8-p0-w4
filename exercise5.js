function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';

    for(i = 0; i < kata.length;i ++){
        var huruf = kata[i];
        for(j = 0; j < kamus.length; j++){
            if(kamus[j] == huruf){
                if(j ==  25){
                    result += kamus[0];
                }
                else{
                    result += kamus[j+1];     
                }
            }
        }
    }
    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu