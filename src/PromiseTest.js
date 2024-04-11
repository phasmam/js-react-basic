function shorterTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout");
      resolve("foo");
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
  const response = shorterTimer();
  response.then((value) => {
    console.log("enhanceMethod " + value);
    return Promise.resolve("To sie nie liczy" + value);
  });
  console.log("enhanceMethod przed returnem");
 return response;
//  return Promise.resolve("blablabla");
// return getObjectsLonger();
}

enhanceMethod().then((value) => {
    console.log("main method " + value);
})

// console.log('enhanceMethod() ' + enhanceMethod());
//enhanceMethod();

console.log('Po enhanceMethod');