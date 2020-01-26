// ///////////////////////////////////////////////////////////////////////////////////////
// DATABASE CONNECTION & METHODS /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose');
const Reviews = require('../database/models/reviews');

mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('Successfully connected to MongoDB!'));


// Function that retrieves 25 reviews from the database given a productId parameter
// and pagination information
let getReviewsForProductId = (productId, pageOptions, cb) => {
  console.log(`About to execute a query for productId: ${productId}, page: ${pageOptions.page}, limit: ${pageOptions.limit}`);

  cb(null, 'Success');
};

module.exports.getReviewsForProductId = getReviewsForProductId;