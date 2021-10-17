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



console.log("brak obrócenia " + connections.length); // 3
console.log("pojedyncze obrocenie " + !connections.length); //false
console.log("podwojne obrocenie" + !!connections.length); //true (connections.length > 0)




console.log(!true); // false
console.log(!false); // true
console.log(!null); // true
console.log(!'test'); // false

console.log(!!null); // false
console.log(!!0); // false
console.log(!!'test'); // true
