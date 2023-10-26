'use strict'

const fs = require('fs')
const path = require('path')
const { S3, ListBucketsCommand } = require("@aws-sdk/client-s3");
const fastify = require('fastify')({
  logger: true,
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  }
})

const s3Client = new S3({
  endpoint: "http://127.0.0.1:4566",
  forcePathStyle: true
});

fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.get('/buckets', async function (request, reply) {
  const command = new ListBucketsCommand({});
  const response = await s3Client.send(command);
  const buckets = response.Buckets.map(bucket => bucket.Name);
  reply.code(200).send({ buckets })
})

fastify.listen({ host: '0.0.0.0', port: 3030 })
