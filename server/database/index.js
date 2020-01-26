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
// Reference: https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
let getReviewsForProductId = (product_id, pageOptions, cb) => {
  console.log(`About to execute a query for productId: ${productId}, page: ${pageOptions.page}, limit: ${pageOptions.limit}`);
  Reviews
    .find({ product_id })
    .skip(pageOptions.page * pageOptions.limit)
    .sort({ date_created: -1 })
    .limit(pageOptions.limit)
    .exec((err, results) => {
      if (err) cb(err);
      cb(null, results);
    });
};

module.exports.getReviewsForProductId = getReviewsForProductId;
