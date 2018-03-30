import { dbConfig } from '../config/dbConfig'
import serverless from 'serverless-http'
import bodyParser from 'body-parser'
import express from 'express'
import { values } from 'lodash'

const app = express()
const sql = require('mssql')

app.use(bodyParser.json({ strict: false }))

// Get Dashboards endpoint
app.get('/dashboards/:user', (req, res) => {
  async function woot (dbConfig) {
    await sql.connect(dbConfig)
    const request = new sql.Request()
    request.input('user', sql.Char(20), req.params.user)
    const response = await request.execute('hive_sp_getDashboardsByUser')
    const result = JSON.parse(values(response.recordset[0])[0])
    sql.close()
    return res.json(result)
  }
  woot(dbConfig)
})

module.exports.handler = serverless(app)
