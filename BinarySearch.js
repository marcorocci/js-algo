
function BinarySearch(sortedArray,value){
    if(sortedArray.length<1){
        return;
    }
    let prevEnd = 0;
    let end = sortedArray.length-1; 
    if(value > sortedArray[end] || value < sortedArray[prevEnd]){
        return 'Valore non compreso';
    }
    while (true){
        if(sortedArray[end] === value){
            return true;
        }
        if(sortedArray[end] > value){
            prevEnd = end;
            end = Math.floor(end/2);
        }else{
            end = (Math.floor((prevEnd - end) / 2) + end);
        }
    }
}
console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],0) );

console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],-0) );

console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],+0) );

console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],60) );

console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],-9) );

console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],9) );
