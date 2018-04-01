import serverless from 'serverless-http'
import bodyParser from 'body-parser'
import express from 'express'
import { values } from 'lodash'
import sql from 'mssql'
import { serviceUnavailableResponse } from '../lib/utils'
import { dbConfig } from '../config/dbConfig'

const app = express()

app.use(bodyParser.json({ strict: false }))

app.get('/dashboards/:user', (req, res) => {
  // async function is defined here.  Needs to be named or webpack blows chunks
  async function asyncCall () {
    try {
      const result = { dashboards: [] }
      await sql.connect(dbConfig)
      const request = new sql.Request()
      request.input('user', sql.Char(20), req.params.user)

      const response = await request.execute('hive_sp_getDashboardsByUser')

      if (values(response.recordset[0])[0].length) {
        result.dashboards = JSON.parse(values(response.recordset[0])[0])
      }

      sql.close()
      return res.json(result)
    } catch (error) {
      serviceUnavailableResponse({ err: error, res: res, sql: sql })
    }
  }
  // call the function here
  asyncCall()
})

module.exports.handler = serverless(app)
