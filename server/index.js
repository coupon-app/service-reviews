// ///////////////////////////////////////////////////////////////////////////////////////
// IMPORTS ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const db = require('../database');

const app = express();
const PORT = process.env.PORT || 8080;
const DIR_PUBLIC = process.env.DIR_PUBLIC || 'public';

// ///////////////////////////////////////////////////////////////////////////////////////
// MIDDLEWARE ////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(DIR_PUBLIC));

// ///////////////////////////////////////////////////////////////////////////////////////
// ROUTES ////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// Route to handle get requests for a specific productId endpoint.
// Route also extracts page options sent as queries in the URL (if any) and passes to
// database query function.

app.get('/api/reviews/:productId', (req, res) => {
  const { productId } = req.params; // Create variable to store productId req.params
  const { page, limit } = req.query; // Create variable to store page/limit from req.query
  console.log(`Querying the database with productId: ${productId}, page: ${page}, limit: ${limit}`);
  const pageOptions = { // Create variable to store pagination options from req.query
    page: parseInt(page, 10) || 0,
    limit: parseInt(limit, 10) || 15,
  };

  db.getReviewsForProductId(parseInt(productId, 10), pageOptions, (err, queryResults) => {
    if (err) console.log('Error occured in database query: getReviewsForProductId.\n', err);
    console.log(`Found ${queryResults.count} customer ratings with an average of ${queryResults.average} and retrieved ${queryResults.resultsSubset.length} from the database to send back to client.`);
    res.status(200).json(queryResults);
  });
});

app.get('/:productId', (req, res) => {
  console.log('Hit /:productId end point');
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});


// ///////////////////////////////////////////////////////////////////////////////////////
// EXPRESS ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
