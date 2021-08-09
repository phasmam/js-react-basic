const object1 = {
    a: 'something',
    b: 42
  };
  
  //iterate
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  //iterate 2 (not working)
  Object.entries(object1).map((entry) => {
    console.log(entry + ': ' + entry.value);
  })

  //keys
  console.log('Keys: ' + Object.keys(object1));

  //values
  console.log('Values: ' + Object.values(object1));