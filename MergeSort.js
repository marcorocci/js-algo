
class MergeSort{

    constructor(arr=[]){
        this.Arr = arr;
    }

    merge(low,media,high){
        if(low==high){
            return;
        }
        let left = this.Arr.slice(low,media+1);
        let right = this.Arr.slice(media+1, high+1); 
        let max = (left.length + right.length)-1;
        let leftIndex = 0;
        let rightIndex = 0;
        let pointer = 0;
        for(let i = 0; i<=max;i++){

            if(leftIndex > left.length-1){
                this.Arr[low+pointer] = right[rightIndex];
                rightIndex++;
                pointer++;
            }
            else if(rightIndex > right.length-1){
                this.Arr[low+pointer] = left[leftIndex];
                leftIndex++;
                pointer++;
            }
            else{
                if(left[leftIndex] < right[rightIndex]){
                    this.Arr[low+pointer] = left[leftIndex];
                    leftIndex++;
                    pointer++;
                }else{
                    this.Arr[low+pointer] = right[rightIndex];
                    rightIndex++;
                    pointer++;
                }
            }
        }

    }
    sort(low, high){
        if(high>low){

            let media = Math.floor((high+low)/2);

            this.sort(low,media);
            this.sort(media+1,high);
            this.merge(low,media,high);
        }
    }
}