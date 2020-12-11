var Emitter = require ('./test1')
var emitter = new Emitter()
emitter.on('bad', function()
{
    console.log("Phat hien diem kem");
})

emitter.on('bad', function()
{
    console.log('Diem thap qua, bao phu huynh ngay');
})

var scores=[4,10]
for (var s of scores){
    if(s<5){
        console.log('Diem ' + s + ' thap qua');
        emitter.emit('bad');
    }
}

