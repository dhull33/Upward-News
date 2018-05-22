const express = require('express')
const router = express.Router()
const db = require('../dataBase')

//router.get('/all', db.getAllTickers//
function getNasdaqTicker() {
  db.many('SELECT symbol FROM nasdaq')
    .then(data => {
      data.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved NASDAQ ticker symbols'
        })
    })
    .catch(error => {
      return error
    })
}

console.log(getNasdaqTicker())
//module.exports = router;