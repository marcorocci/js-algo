var HeapSort = function(arr){
    this.Arr = arr;
    this.sorted = [];
    
    this.order = ()=>{
        while(this.Arr.length > 1){
            this.MaxHeap(this.Arr.length-1);
            this.firstNodeToLast();
        }

        this.sorted.push(this.Arr[0]);
        
        let reversed = [];
        for(let i = this.sorted.length-1; i>=0; i--){
            reversed.push( this.sorted[i] )
        }
        this.sorted = reversed;
        return this.sorted;
    }
    this.MaxHeap = (len) => {
        for(let i = len;i>=0;i--){
            let parentIndex = Math.floor((i-1)/2);
            let parentNode = this.Arr[ parentIndex ]
            let currentNode = this.Arr[i];
            if(currentNode > parentNode){
                let prev = parentNode;
                this.Arr[ parentIndex ] = currentNode;
                this.Arr[i] = prev;
            }
        }
    }
    this.firstNodeToLast = () => {
        let tmp = this.Arr[0];
        this.Arr[0] = this.Arr[ this.Arr.length-1 ];
        this.Arr[ this.Arr.length-1 ] = tmp;
        this.sorted.push(tmp);
        this.Arr.pop();
    }
}
var a = new HeapSort([0,1,2,100,6,9,5,10,99,200,0,1,2,3]);