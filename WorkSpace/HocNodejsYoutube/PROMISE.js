/*var kieblogPromise =  new Promise(function(resolve, reject) {
    setTimeout(resolve, 10000)
  }).then(function() {
    console.log('KieBlog!')
  })

  console.log(kieblogPromise); */
console.log("================================================================");
  var kieblogPromise =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 10000)})

// Cứ .then tiếp tục nếu có nhiều, dễ nhìn dễ hiểu
kieblogPromise()
  .then(function() {
    console.log('Kieblog 1!')
    return wait1000()
  })
  .then(function() {
    console.log('Kieblog 2!')
  })


  /* THAY CHO 
  // Có chừng 3,4 cái xử lý phức tạp lồng nhau thôi là toang
setTimeout(function(){
  console.log('Kieblog 1!')
  setTimeout(function(){
    console.log('Kieblog 2!')
  }, 1000)
}, 1000) */