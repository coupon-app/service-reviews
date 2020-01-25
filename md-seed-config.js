import mongoose from 'mongoose';
import ReviewsSeeder from './server/database/scripts/seeders/reviews.seeder';

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/reviews';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  ReviewsSeeder,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () => mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
