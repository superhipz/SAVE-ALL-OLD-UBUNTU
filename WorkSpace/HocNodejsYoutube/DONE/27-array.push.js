var obj= {
    sayHello: "Hello"
}
//push có tác dụng thêm phần tử mới vào cuối mảng
console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop1 = "sayHello"
console.log(obj[prop1]);

var arr=[]
arr.push(function(){
    console.log("Hello Nodejs 1");
})


arr.push(function(){
    console.log("Hello Nodejs 2");
})


arr.push(function(){
    console.log("Hello Nodejs 3");
})
arr[0]()
arr[1]()
arr[2]()

console.log('=======');

arr.forEach(function (item)
{
    item()
})
