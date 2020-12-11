function emitter ()
{
    this.events = {}
}

emitter.prototype.on = function (type, listener) // ktra co event hay khong
{
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

emitter.prototype.emit = function (type)
{
    if (this.events[type])
    {
        this.events[type].forEach(function(listener)
        {
            listener()
        })  
    }
}

module.exports = emitter