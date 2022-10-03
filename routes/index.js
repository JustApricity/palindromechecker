var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  } );
});

/* POST the form data */
router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText),
    message2: reversePhrase(req.body.userText)
  })
})

function checkPalinindrome(phrase){
  phrase = phrase.replace(/ |\?|\.|;|!|'|"|,|:/gi, "")
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace(" ", "") === temp.toLowerCase().replace(" ", "") ){
    return true
  }
  else {
    return false
  }
}

function reversePhrase(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  return temp
}

function getResultDescription (phrase){
  if (checkPalinindrome(phrase)) {
    return `${phrase} is a Palinindrome.`
  }
  return `${phrase} is not a Palinindrome.`
}
module.exports = router;