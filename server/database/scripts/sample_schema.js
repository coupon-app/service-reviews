/* eslint-disable */

const collection = {
  review_id: 1, // Auto-incrementing integer (key) (REQUIRED)
  date_created: 1252800000, // Epoch time (or perhaps in some other ISO string format) (REQUIRED)
  product_id: 100, // Integer between 1 and 100 (initially) (REQUIRED)
  customer: { // Embedded object representing the details of the customer who made the review (REQUIRED)
    customer_id: 'A2SUAM1J3GNN3B', // String representing a unique customer ID (REQUIRED)
    customer_name: { // Embedded object representing the customer's name (REQUIRED)
      first_name: 'Mary', // String representing customer's first name (REQUIRED)
      last_name: 'Smith', // String representing customer's last name (REQUIRED)
    },
  },
  star_rating: 4, // Integer between 1 and 5 representing the number of stars the customer awarded (REQUIRED)
  review_text: 'I bought this for my husband who plays the piano.  He is having a wonderful time playing these old hymns.  The music  is at times hard to read because we think the book was published for singing from more than playing from. Great purchase though!', // String representing the customer's textual review (NOT REQUIRED)
  helpful_count: 0, // Integer of the number of times the 'Helpful' button was clicked by users (NOT REQUIRED)
  picture: { // Embedded object representing a customer's uploaded image (NOT REQUIRED)
    picture_url: 'https://img.grouponcdn.com/deal/MwDPwYJoFr2veBSja21jf2J7vBJ/Mw-2048x1229/v1/c700x420.jpg', // String representing the url of the customer-uploaded image (NOT REQUIRED)
    picture_upload_date: 1252800000, // Epoch time (or perhaps in some other ISO string format) (NOT REQUIRED)
  },
};
