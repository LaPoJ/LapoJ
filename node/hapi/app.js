// 单点入口
const Hapi = require('hapi')
const server = new Hapi.Server()

const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
const routerOrders = require('./routes/orders')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const config = require('./config/index')

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    ...routesHelloHapi,
    ...routesShops,
    ...routerOrders
  ])

  await server.start()

  console.log(`server running at: ${ server.info.uri }`)
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init()