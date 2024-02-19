const express = require('express')
const app = express();
const https = require('https')
app.get('/', (req, res, next) => {console.log("Getting home"); next()})
app.get('/', app.use(express.static('./dist')))
app.listen(8080, (ev) => {
  console.log("Listening!")
})
let server = https.createServer({key: '/etc/nginx/private', cert: '/etc/nginx/origin'},app)

server.listen(8080)