import mongoose from 'mongoose';

async function connectDB() {
  try {
    const mongoURI: string =
      'mongodb+srv://zensurance:4bUa6EAH4OQ2MMUh@cluster0.vwmxzsu.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
