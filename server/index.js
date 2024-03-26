const express = require('express')
const app = express();
const https = require('https')
const fs = require("fs");
app.get('/', (req, res, next) => {console.log("Getting home"); next()})
app.get('/', app.use(express.static('./dist')))
app.listen(8080, (ev) => {
  console.log("Listening!")
})
/*
let server = https.createServer({key: fs.readFileSync('/etc/nginx/private'), cert: fs.readFileSync('/etc/nginx/origin')},app)

server.listen(8080, (e) => {
  console.log("Listening!")
})*/
