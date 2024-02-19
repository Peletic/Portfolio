const express = require('express')
const app = express();
app.get('/', (req, res, next) => {console.log("Getting home"); next()})
app.get('/', app.use(express.static('./dist')))
app.listen(443, (ev) => {
  console.log("Listening!")
})