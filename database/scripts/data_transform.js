/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable max-len */

const faker = require('faker'); // https://github.com/marak/Faker.js/
const fs = require('fs');
const path = require('path');
const { data } = require('../sampledata/raw_sample_data');

const numMaxProductIds = 100; // product IDs should range between 1 and 100.
const numMaxReviews = 60; // maximum number of reviews per product id
let reviewIdLastImageFound = 0; // variable used to track which object is being checked for image data
let reviewIdCount = 0; // variable used to reference the raw data object's array

const getNextImage = () => {
  if (Math.random() < 0.02) {
    reviewIdLastImageFound += 1;

    while (!data[reviewIdLastImageFound].image) {
      if (reviewIdLastImageFound < data.length - 1) reviewIdLastImageFound += 1;
      else reviewIdLastImageFound = 0;
    }
    return data[reviewIdLastImageFound].image[0];
  }
  return undefined;
};

// generate a json object containing review data for loading into Customer Review Component database
// Resource used: http://zetcode.com/javascript/fakerjs/
const generateReviews = () => {
  const reviews = [];

  for (let productId = 1; productId <= numMaxProductIds; productId += 1) {
    const productIdReviewNumber = Math.ceil(Math.random() * numMaxReviews);

    for (let i = 0; i < productIdReviewNumber; i += 1, reviewIdCount += 1) {
      reviewIdCount = reviewIdCount >= data.length ? 0 : reviewIdCount;
      let review_id = reviewIdCount; // Auto-incrementing integer (key) (REQUIRED)
      let date_created = data[reviewIdCount].unixReviewTime * 1000; // Epoch time (or perhaps in some other ISO string format) (REQUIRED)
      let product_id = productId; // Integer between 1 and 100 (initially) (REQUIRED)
      let customer = { // Embedded object representing the details of the customer who made the review (REQUIRED)
        customer_id: data[reviewIdCount].reviewerID, // String representing a unique customer ID (REQUIRED)
        customer_name: { // Embedded object representing the customer's name (REQUIRED)
          first_name: faker.name.firstName(), // String representing customer's first name (REQUIRED)
          last_name: faker.name.lastName(), // String representing customer's last name (REQUIRED)
        },
        top_reviewer: Math.random() > 0.8, // Boolean representing whether the reviewer is a 'Top Reviewer'
        helpful_reviewer: Math.random() > 0.8, // Boolean representing whether the reviewer is a 'Helpful Reviewer'
      };
      let star_rating = data[reviewIdCount].overall; // Integer between 1 and 5 representing the number of stars the customer awarded (REQUIRED)
      let review_text = Math.random() < 0.5 ? data[reviewIdCount].reviewText : undefined; // String representing the customers textual review (NOT REQUIRED)
      let helpful_count = review_text ? faker.random.number(10) : undefined; // Integer of the number of times the 'Helpful' button was clicked by users (NOT REQUIRED)

      let picture = { // Embedded object representing a customer's uploaded image (NOT REQUIRED)
        picture_url: getNextImage(), // Array representing the urls of the customer-uploaded images (NOT REQUIRED)
        picture_upload_date: data[reviewIdCount].unixReviewTime, // Epoch time (or perhaps in some other ISO string format) (NOT REQUIRED)
      };

      // push constructed review object to reviews array
      reviews.push({
        review_id,
        date_created,
        product_id,
        customer,
        star_rating,
        review_text, // not every review will have an associated review text property
        helpful_count, // not every review will have an associated helpful count
        picture: picture.picture_url ? picture : undefined, // not every review will have an associated picture property
      });
    }
  }
  return reviews;
};

// Generate reviews
const dataObj = generateReviews();

console.log(`Completed generating ${reviewIdCount} reviews!`);

// Write the object to a new .json file
fs.writeFileSync(path.join(__dirname, '..', 'sampledata', 'sample_data.json'), JSON.stringify(dataObj, null, '\t'));
