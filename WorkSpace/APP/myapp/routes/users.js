var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*http:ocalhost:3000/users/find/hoa */
router.get('/find/:name', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
