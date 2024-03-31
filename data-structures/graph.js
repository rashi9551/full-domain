class graph{
    constructor()
    {
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex])
        {
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2)
    {
        if(!this.adjecencyList[vertex1])
        {
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2])
        {
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex)
    {
        if(!this.adjecencyList[vertex])
        {
            return
        }
        for(let adjecentVertex of this.adjecencyList[vertex])
        {
            this.removeEdge(adjecentVertex,vertex)
        }
        delete this.adjecencyList[vertex]
    }

    hasEdge(vertex1,vertex2)
    {
        return this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1)
    }
    display()
    {
        for(let vertex in this.adjecencyList)
        {
            console.log(vertex +"- >"+ [...this.adjecencyList[vertex]]);
        }
    }
    bfs(startVertex)
    {
        let visited=new Set()
        let queue=[startVertex]
        while(queue.length>0)
        {
            let currentWord=queue.shift()
            if(!visited.has(currentWord))
            {
                console.log(currentWord);
                visited.add(currentWord)
                for(const neighbour of this.adjecencyList[currentWord]){
                    if(!visited.has(neighbour))
                    {
                        queue.push(neighbour)
                    }
                }
            }
        }
    }
    dfs(startVertex){
        let visited=new Set()
        
        const dfsHelper=(vertex)=>{
            console.log(vertex);
            visited.add(vertex)
            for(const neighbour of this.adjecencyList[vertex])
            {
                if(!visited.has(neighbour))
                {
                    dfsHelper(neighbour)
                }
            }
        }
        dfsHelper(startVertex)
    }
}
const g=new graph()
g.addEdge("A","B")
g.addEdge("C","B")
// g.removeEdge("C","B")
// g.removeVertex("B")
console.log(g.hasEdge("A","B"));
g.display()
g.dfs("A")
g.bfs("A")