function student(name, lophoc )
{
    this.name= name
    this.lophoc= lophoc
}

student.prototype.getName = function()   // mở rộng phương thức của object 'student'
{
    return this.name
}

student.prototype.getlophoc = function () //nt
{
    return this.lophoc
}

student.prototype.getAge = function () 
{
    return this.age
}

student.prototype.age = '18'    // mở rộng thuộc tính cho lớp object 'student'

function user(name,lophoc)
{
    this.name=name
    this.lophoc = lophoc
}

user.prototype = new student()   // để user kế thừa toàn bộ phương thức của student

var person = new student ('Ti','12A3')
var user1 = new user ('Teo','11B5')

console.log(user1.getlophoc());
console.log(person.getAge());


/*
function Animal(_age){
    this.age = _age;
 }
  
 //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
 Animal.prototype.showAge = function(){
    console.log( this.age );
 };
  
 //Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa hàm cơ sở)
 function Dog(_color){
    this.color = _color;
 }
 //Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Dog
 Dog.prototype = new Animal();
 Dog.prototype.showColor = function(){
    console.log( this.color );
 };
  
 //Kiểm tra sự kế thừa
 var chophuquoc = new Dog('yellow');
 chophuquoc.age = 3;
 chophuquoc.showAge();       //3
 chophuquoc.showColor();     //yellow */

 Date.prototype.vnFormat = function ()
 {
    var yyyy = this.getFullYear()
    var mm = this.getMonth() + 1
    var dd = this.getDate()
    return dd + '/' + mm + '/' + yyyy
 }

var now = new Date
var xms = new Date(2016,11,20)
console.log(now.vnFormat());
console.log(xms.vnFormat());
 