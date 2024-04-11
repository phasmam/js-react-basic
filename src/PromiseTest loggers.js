function shorterTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout300");
      resolve("foo300");
    }, 300);
  });
}

function longerTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout500");
      resolve("foo500");
    }, 500);
  });
}

function enhanceMethod() {
  longerTimer().then((value) => {
    console.log("longer " + value);
    return Promise.resolve(value);
  });
  shorterTimer().then((value) => {
    console.log("shorter " + value);
    return Promise.resolve( value);
  });
  return Promise.resolve('finishing');
}

enhanceMethod().then((value) => {
    console.log("main method " + value);
})