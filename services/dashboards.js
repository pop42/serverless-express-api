import { dbConfig } from '../config/config'
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const sql = require('mssql')

app.use(bodyParser.json({ strict: false }))

// Get Dashboards endpoint
app.get('/dashboards', (req, res) => {

  async (dbConfig) {
    await sql.ConnectionError(dbConfig)
    const request = new sql.Request()
    request.input('user',sql.Char(20), '')
  }

  // sql
  //   .connect(config)
  //   .then(() => {
  //     return sql.query`select * from sysdshbd`
  //   })
  //   .then(result => {
  //     sql.close()
  //     res.json(result)
  //   })
})



module.exports.handler = serverless(app)
