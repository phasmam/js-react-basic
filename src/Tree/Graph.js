// class Graph {
//     constructor() {
//         this.vertices = [];
//         this.adjacent = {};
//         this.edges = 0;
//     }

//     addVertex(v) {
//         this.vertices.push(v);
//         this.adjacent[v] = [];
//     }

//     addEdge(v, w) {
//         this.adjacent[v].push(w);
//         this.adjacent[w].push(v);
//         this.edges++;
//     }


//     bfs(goal, root = this.vertices[0]) {
//         let adj = this.adjacent;

//         const queue = [];
//         queue.push(root);

//         const discovered = [];
//         discovered[root] = true;

//         const edges = [];
//         edges[root] = 0;

//         const predecessors = [];
//         predecessors[root] = null;

//         const buildPath = (goal, root, predecessors) => {
//             const stack = [];
//             stack.push(goal);

//             let u = predecessors[goal];

//             while(u != root) {
//                 stack.push(u);
//                 u = predecessors[u];
//             }

//             stack.push(root);

//             let path = stack.reverse().join('-');

//             return path;
//         }
    

//         while(queue.length) {
//             let v = queue.shift();

//             if (v === goal) {
//                 return { 
//                     distance: edges[goal],
//                     path: buildPath(goal, root, predecessors)
//                 };
//             }

//             for (let i = 0; i < adj[v].length; i++) {
//                 if (!discovered[adj[v][i]]) {
//                     discovered[adj[v][i]] = true;
//                     queue.push(adj[v][i]);
//                     edges[adj[v][i]] = edges[v] + 1;
//                     predecessors[adj[v][i]] = v;
//                 }
//             }
//         }

//         return false;
//     }

//     dfs(goal, v = this.vertices[0], discovered = []) {
//         let adj = this.adjacent;

//         discovered[v] = true;

//         for (let i = 0; i < adj[v].length; i++){
//             let w = adj[v][i];

//             if (!discovered[w]) {
//                 this.dfs(goal, w, discovered);
//             }
//         }

//         return discovered[goal] || false;
//     }
// }


class Graph {
    constructor() {
        this.nodes = [];
        this.adjacent = {};
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(node1, node2) {
    if (!this.edges[node1]) {
    this.edges[node1] = [];
           }
        this.edges[node1].push(node2);
    }
}

function dsf(graph, node) {
    // Create a Stack and add our initial node in it
    let s = [];
    let explored = new Set();
    s.push(node);
 
    // Mark the first node as explored
    explored.add(node);
 
    // We'll continue till our Stack gets empty
    while (s.length > 0) {
       let t = s.pop();
 
    // Log every element that comes out of the Stack
       console.log(t);
 
    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and push it to the Stack.
    (graph.edges[t] || []).reverse()
    .filter(n => !explored.has(n))
    .forEach(n => {
       explored.add(n);
       s.push(n);
       });
    }
 }

function testGraph() {


    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F");
    g.addNode("G");
    
    g.addEdge("A", "C");
    g.addEdge("A", "B");
    g.addEdge("A", "D");
    g.addEdge("C", "H");
    g.addEdge("D", "E");
    g.addEdge("E", "F");
    g.addEdge("B", "G");
    
    dsf(g, "A");

}


testGraph();