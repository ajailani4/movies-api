// Get all movies
const getAllMovies = async (request, h) => {
  return 'Return all movies';
};

// Get a movie
const getSingleMovie = (request, h) => {
  return 'Return a single movie';
};

// Add a new movie
const addMovie = (request, h) => {
  return 'Add new movie';
};

// Update the details of a movie
const updateMovie = (request, h) => {
  return 'Update a single movie';
};

// Delete a movie
const deleteMovie = (request, h) => {
  return 'Delete a single movie';
};

// Search for a movie
const searhMovie = (reques, h) => {
  return 'Return search results for the specified term';
};

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  searhMovie,
};
