// set pg-promise to use bluebird as its promise library
const Promise = require('bluebird')

const initOptions = {
  promiseLib: Promise
}
const pgp = require('pg-promise')(initOptions)

const config = {
  host: 'localhost',
  port: 5432,
  database: 'upwardmarkets',
  user: 'davidhull'
}

const db = pgp(config)

function getNasdaqTicker(req, res, next){
  db.many('SELECT symbol FROM nasdaq')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved NASDAQ ticker symbols'
        })
    })
    .catch(error => {
      return next(error)
    })
}

function getNyseTicker(req, res, next){
  db.many('SELECT symbol FROM nyse')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved NYSE ticker symbols'
        })
    })
    .catch(error => {
      return next(error)
    })
}

function getAmexTicker(req, res, next){
  db.many('SELECT symbol FROM amex')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved Amex symbols'
        })
    })
    .catch(error => {
      return next(error)
    })
}

function getAllTickers(req, res, next){
  db.many('SELECT symbol FROM all_tickers')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Data'
        })
    })
    .catch(error => {
      return next(error)
    })
}


 module.exports = {
   getNasdaqTicker: getNasdaqTicker,
   getNyseTicker: getNyseTicker,
   getAmexTicker: getAmexTicker,
   getAllTickers: getAllTickers

  }

