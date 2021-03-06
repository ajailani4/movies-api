const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  searchMovie,
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
    options: {
      validate: {
        params: Joi.object({
          id: Joi.objectId(),
        }),
      },
    },
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
  {
    method: 'DELETE',
    path: '/movies/{id}',
    options: {
      validate: {
        params: Joi.object({
          id: Joi.objectId(),
        }),
      },
    },
    handler: deleteMovie,
  },

  // Search for a movie
  {
    method: 'GET',
    path: '/search',
    handler: searchMovie,
  },
];

module.exports = routes;
