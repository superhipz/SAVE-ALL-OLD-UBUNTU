var _ = require('lodash')
var array = [1]
var other = _.concat(array,2, [3], [[4]])
console.log(other);

var users = 
[
    {"user" : "Hoa", "age":36, "active": true},
    {"user" : "Mai", "age":40, "active": true},
    {"user" : "Lan", "age":20, "active": true}
]

var user = _.find(users,function (user)
{
    return user.age <40
})

var user2 = _.filter(users, function (user)
{
    return user.age < 40
})

console.log("find:", user);
console.log("filter:", user2);