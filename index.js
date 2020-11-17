const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    'name': 'Fabio',
    'age': 30,
    'job': 'developer'
  })
})

app.listen(3000, () => {
  console.log('Server up!')
})
