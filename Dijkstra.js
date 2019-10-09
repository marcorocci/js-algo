class Dijkstra{
    constructor(graph, src){
        //numero di righe
        this.row = graph.length;
        //numero di colonne
        this.col = graph[0].length;
        // parti da
        this.src = src;
        //il grafo a matrice
        this.graph = graph;
    }
    run(){
        //la somma delle distanze di ogni nodo partendo da SRC. Settato a infinity inizialmente
        let dist = [];
        //il nodo padre della dist[n](distanza dal nodo n) che termina sempre per SRC.  Settato a -1 inizialmente
        let parent = [];
        for(let i=0;i<this.row;i++){
            dist.push(Infinity);
            parent.push(-1);
        }
        //metto SRC a 0, nodo dove partire
        dist[this.src] = 0;

        //creo la lista di tutti i nodi
        let queue = [];
        for(let i=0;i<this.row;i++){
            queue.push(i);
        }

        while(queue.length>0){
            // console.log(dist);
            // console.log(parent);
            // console.log(queue);

            //la minima distanza
            let u = this.minDistance(dist, queue);
            console.log('u= '+u);
            queue.splice(queue.indexOf(u), 1);
            console.log(queue);

            // //per ogni adiacente,
            // for(let i=0; i<this.col;i++){
            //     //ogni adiacente se non è 0 e se è nella coda
            //     if(this.graph[u][i] && queue.includes(i)){
            //         //la distanza al nodo è minore di quella che già c'è?
            //         if( (dist[u] + this.graph[u][i]) < dist[i] ){
            //             dist[i] = dist[u] + this.graph[u][i];
            //             parent[i] = u;
            //         }
            //     }
            // }

            //Scorro i nodi che non ho visitato. Cerco gli adiacenti,
            // e sommo gli archi, se è minore del valore che già ho
            // mi salvo il nodo e la distanza
            queue.map( (i)=>{
                if(this.graph[u][i]){
                    if( (dist[u] + this.graph[u][i]) < dist[i] ){
                        dist[i] = dist[u] + this.graph[u][i];
                        parent[i] = u;
                    }
                }
            } );            
        }
        this.printSolution(dist,parent);
    }
    minDistance(dist, queue){
        let minimum = Infinity;
        let min_index = -1;

        //scorro tutte le distanze e prendo la distanza minima
        // for(let i=0;i<dist.length;i++){
        //     if(dist[i] < minimum && queue.includes(i)){
        //         minimum = dist[i];
        //         min_index = i;
        //     }
        // }

        //Scorro i nodi che non ho visitato. Prendo il nodo più vicino.
        queue.map( (i) => {
            if(dist[i] < minimum){
                minimum = dist[i];
                min_index = i;
            }
        } );
        return min_index;
    }
    printPath(parent,j,s){

        if(parent[j] === -1){
            s.push(j);
            return;
        }
        s.push(j)
        this.printPath(parent, parent[j],s);

    }
    printSolution(dist,parent){
        let src = 0;
        let s=[];

        for(let i=1;i<dist.length;i++){

            this.printPath(parent,i,s);

            console.log('\n'+src+' --> '+i+'\t\t'+dist[i]+'\t\t'+s.reverse());
            s=[];
        }
    }
}

graph = 
       [[0, 4,  0, 0,  0,  0,  0, 8,  0], 
        [4, 0,  8, 0,  0,  0,  0, 11, 0], 
        [0, 8,  0, 7,  0,  4,  0, 0,  2], 
        [0, 0,  7, 0,  9,  14, 0, 0,  0], 
        [0, 0,  0, 9,  0,  10, 0, 0,  0], 
        [0, 0,  4, 14, 10, 0,  2, 0,  0], 
        [0, 0,  0, 0,  0,  2,  0, 1,  6], 
        [8, 11, 0, 0,  0,  0,  1, 0,  7], 
        [0, 0,  2, 0,  0,  0,  6, 7,  0] 
        ] ;


// graph = 
//         [[0, 14,  0, 0,  0,  0,  0, 8,  0], 
//          [4, 0,  8, 0,  0,  0,  0, 11, 0], 
//          [0, 8,  0, 7,  0,  4,  0, 0,  2], 
//          [0, 0,  7, 0,  9,  14, 0, 0,  0], 
//          [0, 0,  0, 9,  0,  10, 0, 0,  0], 
//          [0, 0,  4, 14, 10, 0,  2, 0,  0], 
//          [0, 0,  0, 0,  0,  2,  0, 1,  6], 
//          [8, 11, 0, 0,  0,  0,  1, 0,  7], 
//          [0, 0,  2, 0,  0,  0,  6, 7,  0] 
//          ] ;

a = new Dijkstra(graph,0);

a.run();
