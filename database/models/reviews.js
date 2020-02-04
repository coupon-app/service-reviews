/* eslint-disable max-len */

// Example taken from:
// https://github.com/sharvit/mongoose-data-seed/blob/master/examples/md-seed-example/server/models/post.js

import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    review_id: { // Auto-incrementing integer (key) (REQUIRED)
      type: Number,
      index: true,
      required: 'Review id cannot be blank',
    },
    date_created: { // Date and time review was created (REQUIRED)
      type: Date,
      required: 'Date created cannot be blank',
    },
    product_id: { // Integer between 1 and 100 (initially) (REQUIRED)
      type: Number,
      required: 'Product id cannot be blank',
    },
    customer: { // Embedded object representing the details of the customer who made the review (REQUIRED)
      customer_id: { // String representing a unique customer ID (REQUIRED)
        type: String,
        trim: true,
        required: 'Customer id cannot be blank',
      },
      customer_name: { // Embedded object representing the customer's name (REQUIRED)
        first_name: { // String representing customer's first name (REQUIRED)
          type: String,
          required: 'Customer first name cannot be blank',
        },
        last_name: { // String representing customer's last name (REQUIRED)
          type: String,
          required: 'Customer last name cannot be blank',
        },
      },
      top_reviewer: { // Boolean representing whether the reviewer is a 'Top Reviewer' (NOT REQUIRED)
        type: Boolean,
      },
      helpful_reviewer: { // Boolean representing whether the reviewer is a 'Helpful Reviewer' (NOT REQUIRED)
        type: Boolean,
      },
      num_ratings: { // Integer (random) which exists 20% of the time between 1 and 51 (NOT REQUIRED)
        type: Number,
      },
      num_reviews: { // Integer (random) which exists 20% of the time between 1 and 21 (NOT REQUIRED)
        type: Number,
      },
    },
    star_rating: { // Integer between 1 and 5 representing the number of stars the customer awarded (REQUIRED)
      type: Number,
      required: 'Star rating cannot be blank',
    },
    review_text: { // String representing the customer's textual review (NOT REQUIRED)
      type: String,
      trim: true,
    },
    helpful_count: Number, // Integer of the number of times the 'Helpful' button was clicked by users (NOT REQUIRED)
    picture: { // Embedded object representing a customer's uploaded image (NOT REQUIRED)
      picture_url: String, // String representing the url of the customer-uploaded image (NOT REQUIRED)
      picture_upload_date: Date, // Date and time the image was uploaded (NOT REQUIRED)
    },
  },
);

/**
 * Methods
 */
/*
reviewSchema.methods = {
  addComment({ author: { _id: author }, body }) {
    this.comments.push({
      author,
      body,
    });

    return this.save();
  },
};
 */
/**
 * Statics
 */

/* reviewSchema.statics = {
  load(_id) {
    return this.findOne({ _id })
      .populate('author')
      .populate('comments.author')
      .exec();
  },

  list({ criteria = {}, page = 0, limit = 30 }) {
    return this.find(criteria)
      .populate('author')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec();
  },
}; */

export default mongoose.model('Reviews', reviewSchema);
