import { dbConfig } from './dbConfig'
import sql from 'mssql'

export const pool = new sql.ConnectionPool(dbConfig)
export default pool
