const connections = [{"name":"a1","title":"g1"},{"name":"a2","title":"g2"},{"name":"a3","title":"g3"},{"name":"a4","title":"g4"}
]

const connectionsCopy = [...connections];

// rozdziela tablice na dwie 
const connections2 = connections.splice(1);

console.log('connections ' + JSON.stringify(connections));
console.log('connections2 ' + JSON.stringify(connections2));


const connectionsCopy2 = connectionsCopy.splice(1,2);

console.log('connectionsCopy ' + JSON.stringify(connectionsCopy));
console.log('connectionsCopy2 ' + JSON.stringify(connectionsCopy2));