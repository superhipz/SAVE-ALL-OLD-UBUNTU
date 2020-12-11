var obj = {
    name: "Mai Hoa",
    sayHello: function (param1, param2){
        console.log(`Hello ${this.name}`);
        console.log("Params: ", param1, param2);
    }
}

obj.sayHello("XIn chao","2016")
obj.sayHello.call({name: "Yen Phuong"}, "Xin chao", "2020")  //call va apply cho phep thay doi tu khoa THIS
obj.sayHello.apply({name: "Yen Phuong"}, ["Xin chao", "2020"])