function readDatabase(callback){
    var user ={
        name: "Mai Hoa"
    }
callback(user)}

readDatabase(function (data){
    console.log("Read done callback 1")
    console.log("data", data);
})
 
readDatabase(function(data)
{
    console.log("Read done callback 2");
    console.log("user name", data.name);
})