function scriptFunction(value){if(value==null) {value = 0;} return Math.round(value * 100) / 100;}

console.log("wynik " + scriptFunction(0.9990000000001665));