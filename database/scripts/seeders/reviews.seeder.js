import { Seeder } from 'mongoose-data-seed';
import Reviews from '../../models/reviews';
import * as sampleData from '../data/sample_data.json';

const { data } = sampleData;

class ReviewsSeeder extends Seeder {
  async shouldRun() {
    return Reviews.countDocuments().exec().then((count) => count === 0);
  }
  
  async run() {
    return Reviews.create(data);
  }
}

export default ReviewsSeeder;
