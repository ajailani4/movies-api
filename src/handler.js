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
const getSingleMovie = async (request, h) => {
  const { id } = request.params;
  const { ObjectID } = request.mongo;

  const movie = await request.mongo.db.collection('movies')
    .findOne(
      {
        _id: ObjectID(id),
      },
    );

  if (movie != null) {
    return {
      status: 'success',
      data: {
        movie,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Note is not found',
  });
  response.code(404);

  return response;
};

// Add a new movie
const addMovie = async (request, h) => {
  const { payload } = request;

  const result = await request.mongo.db.collection('movies')
    .insertOne(payload);

  if (result.insertedCount === 1) {
    const movie = result.ops[0];

    const response = h.response({
      status: 'success',
      data: {
        movie,
      },
    });
    response.code(201);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'New moview cannot be added',
  });
  response.code(500);

  return response;
};

// Update the details of a movie
const updateMovie = async (request) => {
  const { id } = request.params;
  const { ObjectID } = request.mongo;

  const { payload } = request;

  const result = await request.mongo.db.collection('movies')
    .updateOne(
      {
        _id: ObjectID(id),
      },
      {
        $set: payload,
      },
    );

  let resMessage = '';
  if (result.modifiedCount === 1) {
    resMessage = 'Movie has been updated';
  }

  return {
    status: 'success',
    message: resMessage,
  };
};

// Delete a movie
const deleteMovie = async (request) => {
  const { id } = request.params;
  const { ObjectID } = request.mongo;

  const result = await request.mongo.db.collection('movies')
    .deleteOne(
      {
        _id: ObjectID(id),
      },
    );

  let resMessage = '';
  if (result.deletedCount === 1) {
    resMessage = 'Movie has been deleted';
  }

  return {
    status: 'success',
    message: resMessage,
  };
};

// Search for a movie
const searhMovie = (request, h) => 'Return search results for the specified term';

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  searhMovie,
};
