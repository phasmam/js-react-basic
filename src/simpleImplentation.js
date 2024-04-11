

const data = {data: {
    Location_All: {
    edges: [
        {
            node: {
                id: 1,
                devices: {
                }
            },
        }, {
            node: {
                id: 3,
                devices: {
                }
            }
        }
    ]
}}};

const addToViewStructure = {"locations":[{"id":"117736520","devices":["117750577","117750638","117750671"]},  {"id":"11","devices":["2","3","4"]}],"devices":[]}
const {locations} = addToViewStructure;

locations.forEach(locationAddToView => {
    const {id, devices} = locationAddToView;

})