const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  searhMovie,
} = require('./handler');

const routes = [
  // Get all movies
  {
    method: 'GET',
    path: '/movies',
    handler: getAllMovies,
  },

  // Get a single movie
  {
    method: 'GET',
    path: '/movies/{id}',
    handler: getSingleMovie,
  },

  // Add a new movie
  {
    method: 'POST',
    path: '/movies',
    handler: addMovie,
  },

  // Update the details of a movie
  {
    method: 'PUT',
    path: '/movies/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.objectId(),
        }),
      },
    },
    handler: updateMovie,
  },

  // Delete a movie
  /* method: 'DELETE',
    path: 'movies/{id}',
    handler: deleteMovie,
  },

  // Search for a movie
  {
    method: 'GET',
    path: '/search',
    handler: searhMovie,
  }, */
];

module.exports = routes;
