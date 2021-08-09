
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

const getKey = (connection) => {
    return 'key: ' + connection.name;
};

console.log(connections);

const reduced = connections.reduce((acc, curr) => {
        const key = getKey(curr);
        console.log('reducing ' + JSON.stringify(curr));
        return {
            ...acc,
            [key]: curr
        };
    }, {});

console.log(reduced);

//entries
console.log(JSON.stringify(Object.entries(reduced)));
//entities
console.log(JSON.stringify(Object.values(reduced)));


// const flattenConnections = connections.reduce((acc, curr) => [...acc, ...curr], []);

// console.log(flattenConnections);

