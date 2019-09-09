class QuickSort {
    constructor(arr = []){
        this.Arr = arr;
    }
    swap(i,j){
        let tmp = this.Arr[j];
        this.Arr[j] = this.Arr[i];
        this.Arr[i] = tmp;
    }
    partition(low, high) {
        let i = low-1;
        let pivot = this.Arr[high];
        for(let j = low; j<=high-1;j++){
            if(this.Arr[j] < pivot){
                i = i+1;
                this.swap(i,j);
            }
        }
        this.swap(i+1,high);
        return (i+1);
    }
    sort(low = 0, high = this.Arr.length-1){
        if(low < high){
            let p = this.partition(low,high);
            this.sort(low, p -1);
            this.sort(p +1, high);
        }
    }
}

var a = new QuickSort([0,1,50,3,2,66,5]);
a.sort();
console.log(a.Arr);