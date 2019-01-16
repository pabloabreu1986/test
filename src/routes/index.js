const express = require('express')
const app = express()
const {
  countBinInt
} = require('../shared/order');

const welcome = function (req, res, next) {
  res.send('Welcome to the Intelygenz talent test!')
}

const welcomeUser = function (req, res, next) {
  res.send(req.params)
}

/**
 * Order list endpoint imlementation
 */

const orderList = (req, res, next) => {
  const resp = countBinInt(req.query.list);
  res.send(`{${resp}}`)
}

app.get('/orderList', orderList)

/**
 * End of order list endpoint implementation
 */

app.get('/', welcome)
app.get('/welcome', welcome)
app.get('/welcome/:username', welcomeUser)

module.exports = app
