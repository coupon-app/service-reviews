// ///////////////////////////////////////////////////////////////////////////////////////
// DATABASE CONNECTION & METHODS /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose');
const { Reviews } = require('./models/reviews');

mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Failed to connect to MongoDB:'));
db.on('open', () => console.log('Successfully connected to MongoDB!'));


// Function that retrieves 25 reviews from the database given a productId parameter
// and pagination information
// Reference: https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js
const getReviewsForProductId = (product_id, pageOptions, cb) => {
  console.log(`About to execute a query for productId: ${product_id}, page: ${pageOptions.page}, limit: ${pageOptions.limit}`);
  Promise.all([
    Reviews.aggregate()
      .match({ product_id })
      .group({ _id: null, average: { $avg: '$star_rating' }, count: { $sum: 1 } }),
    Reviews
      .find({ product_id, review_text: { $exists: true } })
      .skip(pageOptions.page * pageOptions.limit)
      .sort({ date_created: -1 })
      .limit(pageOptions.limit),
  ])
    .then(([aggregate, resultsSubset]) => {
      cb(null, {
        count: aggregate[0].count || 0,
        average: aggregate[0].average || 0,
        resultsSubset,
      });
    })
    .catch((err) => cb(err));
};

module.exports.getReviewsForProductId = getReviewsForProductId;
