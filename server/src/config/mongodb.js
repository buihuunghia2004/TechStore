import mongoose from 'mongoose'
import { env } from './environment';

export const connectdb = async () => {
  await mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err);
    });
}