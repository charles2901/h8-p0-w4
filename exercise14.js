function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];

    if(arrPenumpang.length == 0){
        return [];
    }

    for(i = 0; i < arrPenumpang.length; i++){
        var tempObj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0,
        }
        for(j = 0; j < rute.length; j++){
            if(rute[j] == arrPenumpang[i][1]){
                var start = j;
            }
            else if(rute[j] == arrPenumpang[i][2]){
                var end = j;
            }
        }
        // var start = rute.indexOf(tempObj.naikDari);
        // var end = rute.indexOf(tempObj.tujuan);
        tempObj.bayar = Math.abs((end - start)) * 2000;

        result.push(tempObj)    
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]