const Hapi = require('@hapi/hapi');
const mongoDb = require('hapi-mongodb');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: mongoDb,
    options: {
      url: 'mongodb://zayvich:zayvich123454321@cluster0-shard-00-00.srqlm.mongodb.net:27017,cluster0-shard-00-01.srqlm.mongodb.net:27017,cluster0-shard-00-02.srqlm.mongodb.net:27017/sample_mflix?ssl=true&replicaSet=atlas-zuhjfr-shard-0&authSource=admin&retryWrites=true&w=majority',
      settings: {
        useUnifiedTopology: true,
      },
      decorate: true,
    },
  });

  // Setup routes
  server.route(routes);

  // Start server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
