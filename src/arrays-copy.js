const connections = [{
    name: 'a1',
    title: 'g1'
},
{
    name: 'a2',
    title: 'g2'
},
{
    name: 'a3',
    title: 'g3'
}
]

// copy and add - first approach
connections2 = [
    ...connections,
    {
        name: 'a4',
        title: 'g4'
    }
]
console.log('connections2 ' + JSON.stringify(connections2));

badConnections = [
    connections,
    {
        name: 'a4',
        title: 'g4'
    }
]

console.log(JSON.stringify(badConnections));