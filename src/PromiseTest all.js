function shorterTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("timeout300");
      resolve("foo300");
    }, 300);
  });
}

function longerTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("timeout500");
      resolve("foo500");
    }, 500);
  });
}

async function takeAllData() {
  const allResults = [];
  const longerPromise = longerTimer();
  longerPromise.then(resp => {
    allResults.push(resp);
  });

  console.log('Do other stuff');
  
  const shorterPromise = shorterTimer();
  shorterPromise.then(resp => allResults.push(resp));
  
  console.log('Do other stuff 2');
  
  const a = await Promise.all([longerPromise, shorterPromise]);
  console.log(allResults);
}

const mainMethod = async () => {
  await takeAllData();
};

mainMethod();
