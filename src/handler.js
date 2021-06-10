// Get all movies
const getAllMovies = async (request) => {
  const offset = Number(request.query.offset) || 0;

  const movies = await request.mongo.db.collection('movies')
    .find({})
    .sort({ metacritic: -1 })
    .skip(offset)
    .limit(20)
    .toArray();

  return {
    status: 'success',
    data: {
      movies,
    },
  };
};

// Get a movie
const getSingleMovie = async (request) => {
  const { id } = request.params;
  const { ObjectID } = request.mongo;

  const movie = await request.mongo.db.collection('movies')
    .findOne(
      {
        _id: new ObjectID(id),
      },
    );

  return {
    status: 'success',
    data: {
      movie,
    },
  };
};

// Add a new movie
const addMovie = async (request) => {
  const { payload } = request;

  const result = await request.mongo.db.collection('movies')
    .insertOne(payload);

  const movie = result.ops[0];

  return {
    status: 'success',
    data: {
      movie,
    },
  };
};

// Update the details of a movie
const updateMovie = (request, h) => 'Update a single movie';

// Delete a movie
const deleteMovie = (request, h) => 'Delete a single movie';

// Search for a movie
const searhMovie = (reques, h) => 'Return search results for the specified term';

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  searhMovie,
};
