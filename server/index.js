const express = require('express')
const app = express();
app.get('/', app.use(express.static('./dist')))
app.listen(80, (ev) => {
  console.log("Listening!")
})