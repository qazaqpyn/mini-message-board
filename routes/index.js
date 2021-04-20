var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Sanzhik",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Abu",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

router.get('/new', function(req,res,next){
  res.render('form', {title: 'Mini Messageboard'});
});

router.post('/new', function(req,res,next){
  messages.push({text: req.body.usertext, user: req.body.username, added: new Date()});
  res.redirect('/');
})

module.exports = router;
