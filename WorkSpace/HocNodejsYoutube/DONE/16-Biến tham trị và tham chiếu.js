function changebyvalue(b)
{
    b=2
}
var a=1 
changebyvalue(a)
console.log(a);

/* function changebyref(obj)
{
    obj.pro1=function()
    {
        //do nothing
    }
}

var c= {}
c.pro1={}
changebyref(c) */
/*
function callByValue(varOne, varTwo) { 
    console.log("Inside Call by Value Method"); 
    varOne = 100; 
    varTwo = 200; 
    console.log("varOne =" + varOne +"varTwo =" +varTwo); 
  } 
  let varOne = 10; 
  let varTwo = 20; 
  console.log("Before Call by Value Method"); 
  console.log("varOne =" + varOne +"varTwo =" +varTwo); // giá trị trong hàm không bị thay đổi 
  callByValue(varOne, varTwo) 
  console.log("After Call by Value Method"); 
  console.log("varOne =" + varOne +"varTwo =" +varTwo);  */

  function callByReference(varObj) { 
    console.log("Inside Call by Reference Method"); 
    varObj.a = 100; 
    console.log(varObj); 
  } 
  
  let varObj = {a:1};
console.log("Before Call by Reference Method"); 
console.log(varObj);
callByReference(varObj) 
console.log("After Call by Reference Method"); 
console.log(varObj);
