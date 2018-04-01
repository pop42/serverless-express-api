// for server-based errors (not the client's fault)
// order of params is not important, but params must be an object
export const serviceUnavailableResponse = ({ err, res, sql }) => {
  if (sql) {
    sql.close()
  }
  if (err) {
    console.error(err)
  }
  if (res) {
    res.status(503)
    return res.send('Service Unavailable')
  }
}
