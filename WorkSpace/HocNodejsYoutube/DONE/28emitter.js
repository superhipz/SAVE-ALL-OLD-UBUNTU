function Emitter () //function   
{
    this.events = {}      // thuộc tính events, kiểu object rỗng cho phép lưu trữ bất cứ sự kiên nào đó
}

Emitter.prototype.on = function (type, listener)
{
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener)
}

Emitter.prototype.emit = function (type)
{
    if (this.events[type]){ // nếu có sự kiện
        this.events[type].forEach(function(listener){ 
            listener() // duyệt mảng và gọi hàm
        })
    }
}

module.exports = Emitter