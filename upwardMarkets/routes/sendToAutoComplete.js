const express = require('express')
const router = express.Router()
const db = require('./dataBase')

  const nasdaqTickerSymbol = db.any('SELECT symbol FROM nasdaq')
    .then(data => data.json())
    .catch(error => console.log(error))



router.get('/auto', function(req, res, next) {
  //res.send( nasdaqTickerSymbol() )
  res.json(nasdaqTickerSymbol)
});



module.exports = router;
