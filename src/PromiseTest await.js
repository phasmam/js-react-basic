function shorterTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout");
      resolve("foo");
    }, 300);
  });
}

const enhanceMethod = async () => {
  console.log("enhanceMethod on start");
  const response = await shorterTimer();
  console.log("enhanceMethod " + response);
  return response;
};

const mainMethod = async () => {
  const result = await enhanceMethod();
  console.log("main method " + result);
};

mainMethod();
console.log('Po mainMethod');
