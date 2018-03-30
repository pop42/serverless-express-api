'use strict'
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const sql = require('mssql')
app.use(bodyParser.json({ strict: false }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const config = {
  user: 'SA',
  password: 'RTAFl33tR0x!',
  server: 'localhost',
  database: 'RTAStable_72'
}

// Get Dashboards endpoint
app.get('/dashboards', function (req, res) {
  sql
    .connect(config)
    .then(function () {
      return sql.query`select * from sysdshbd`
    })
    .then(function (result) {
      sql.close()
      res.json(result)
    })
})

module.exports.handler = serverless(app)
