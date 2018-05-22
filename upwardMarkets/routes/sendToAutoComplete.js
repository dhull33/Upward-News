const express = require('express')
const router = express.Router()
const db = require('../dataBase')

router.get('/', (res, req) =>{
  res.send(db.getNasdaqTicker)
})

//});



module.exports = router;
