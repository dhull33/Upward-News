const express = require('express')
const router = express.Router()
const db = require('../dataBase')

router.get('/', db.getNyseTicker)

module.exports = router;