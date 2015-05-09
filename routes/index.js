var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
       res.render('index', {
	   user: 'Gina'
       });
});

/* GET recording page */
router.get('/record', function(req, res) {
    res.render('record', {gina: 'gina'});
});

module.exports = router;
