var BubbleSort = function(toSort){
    let swaped = false;
    var startDate = new Date();
    while(true){
        if(toSort.length<2){
            return toSort;
        }
        for(let i = 1; i<toSort.length;i++){
            let startVal = toSort[i-1];
            let currVal = toSort[i];
            if(startVal > currVal){
                swaped = true;
                toSort[i] = startVal;
                toSort[i-1] = currVal;
            }
        }
        if(!swaped){           
            return toSort;
        }
        swaped = false;
    }
}