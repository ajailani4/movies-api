const Hapi = require('@hapi/hapi');
const mongoDb = require('hapi-mongodb');
const dotenv = require('dotenv');
const routes = require('./routes');

const init = async () => {
  dotenv.config();

  const server = Hapi.server({
    port: process.env.PORT || 5000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Configure MongoDb
  await server.register({
    plugin: mongoDb,
    options: {
      url: process.env.MONGODB_URL,
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
