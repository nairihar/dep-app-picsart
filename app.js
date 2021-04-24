const express = require('express')
const app = express()
const port = process.env.PORT || 3000

console.log(port);

app.get('/', (req, res) => {
  res.send('Hello there!!!!!!!')
})

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})



