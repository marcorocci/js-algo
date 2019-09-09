var LinkedListNode = function(data){
    this.data = data;
    this.next = null;
}
const LinkedList = function(){
    this.head = null;
    this.add = (data)=>{
        let newLink = new LinkedListNode(data);
        if(this.head == null){
            this.head = newLink;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newLink;
    }
    this.find = (index)=>{
        if(index < 0){
            return;
        }
        let current = this.head;
        if(index==0){
            return current;
        }
        let i = 0;
        while(current.next !== null && index !== i){
            current = current.next;
            i++;
        }
        return current;
    }
    this.length = ()=>{
        let current = this.head;
        let i = 1;
        while(current.next !== null){
            current = current.next;
            i++;
        }
        return i;        
    }
    this.reverse = ()=>{
        let current = this.head;
        let prev = null;
        let next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}
exports.LinkedList = LinkedList;
