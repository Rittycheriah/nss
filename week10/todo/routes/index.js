var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index',

  {
    title : 'Express Todo Example',
    header: 'Hello',
    body_text: 'the jungle'
  }


  );
});

module.exports = router;
