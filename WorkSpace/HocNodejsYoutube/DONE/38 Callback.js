var firstFunction = function(){
    console.log("i am first");
}

var secondFunction = function(){
    setTimeout(firstFunction, 5000) // 5000 = 5 second
    console.log("i am second");
}

secondFunction()