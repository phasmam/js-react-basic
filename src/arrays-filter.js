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

const filtered = connections.filter( (con) => {
    return con.name.includes('2');
})

console.log (filtered);