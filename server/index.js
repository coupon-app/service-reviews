// ///////////////////////////////////////////////////////////////////////////////////////
// IMPORTS ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const morgan = require('morgan');

const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// ///////////////////////////////////////////////////////////////////////////////////////
// MIDDLEWARE ////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// ///////////////////////////////////////////////////////////////////////////////////////
// ROUTES ////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// Route to handle get requests for a specific productId endpoint.
// Route also extracts page options sent as queries in the URL (if any) and passes to
// database query function.

app.get('/api/reviews/:productId', (req, res) => {
  const { productId } = req.params; // Create variable to store productId from req.params
  const pageOptions = { // Create variable to store pagination options from req.query
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 15,
  };

  db.getReviewsForProductId(productId, pageOptions, (err, queryResults) => {
    if (err) console.log('Error occured in database query: getReviewsForProductId.\n', err);
    console.log(`Retrieved ${queryResults.length} customer reviews from database and sending back to client.`);
    res.status(200).json(queryResults);
  });
});


// ///////////////////////////////////////////////////////////////////////////////////////
// EXPRESS ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
