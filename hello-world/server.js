'use strict'

const fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  logger: true,
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  }
})

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.listen({ host: '0.0.0.0', port: 3030 })
