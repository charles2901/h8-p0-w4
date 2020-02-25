function cariMedian(arr) {
    var len = arr.length;
    if(len % 2 == 1){
        var midValue = (len-1)/2;
        return arr[midValue];
    }
    else if(len % 2 == 0){
        var firstValue = len / 2 - 1;
        var secondValue = len / 2;
        return (arr[firstValue] + arr[secondValue])/2;
    }
}
  
  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5