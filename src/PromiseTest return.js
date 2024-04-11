
const promiseGemerator = () => {
  return [Promise.resolve('1'), Promise.resolve('2')];
}

const asyncPromiseGemerator = async () => {
  return [Promise.resolve('async1'), Promise.resolve('async2')];
}


console.log("promiseGemerator " + promiseGemerator().length);
console.log("asyncPromiseGemerator " + asyncPromiseGemerator().length);
