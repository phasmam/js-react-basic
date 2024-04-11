function scriptFunctionFrom(alphaNumber) {
    if (isNaN(alphaNumber)) {
        if (alphaNumber === '') {
            return (1).toFixed(0);
        }
        var code = alphaNumber.charCodeAt(0);
        //A-P
        if (code > 64 && code < 81) {
            return (code - 64).toFixed(0);
        }
        //R-Z
        if (code > 81 && code < 91) {
            return (code - 65).toFixed(0);
        }
        //Ĺ
        if (code === 321) {
            return (1000025).toFixed(0);
        }
        return (1).toFixed(0);
    }
    var number = parseInt(alphaNumber);
    if (number < 1 || number > 999999) {
        return (1).toFixed(0);
    }
    //1-999999
    return (number + 25).toFixed(0);
}

function scriptFunctionTo(number) {
    if (isNaN(number)) {
        return '';
    }
    var code = parseInt(number);
    //A-P
    if (code < 17) {
        return String.fromCharCode(code + 64);
    }
    //R-Z
    if (code < 26) {
        return String.fromCharCode(code + 65);
    }
    //1-999999
    if (code <= 1000024) {
        return (code - 25).toString();
    }
    //Ĺ
    if (code === 1000025) {
        return String.fromCharCode(321);
    }
    return '';
}

function testFunction(value) {
    var from = scriptFunctionFrom(value);
    var to = scriptFunctionTo(from);
    console.log(value + ' ' + to + ' ');
}

testFunction("A");
testFunction("Z");
testFunction("5");
testFunction("-1");
testFunction("-45");