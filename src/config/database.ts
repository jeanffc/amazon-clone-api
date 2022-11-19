import mongoose from 'mongoose';

export async function connectDB() {
  try {
    // TODO: enable dotenv
    const mongoURI: string =
      'mongodb+srv://amazon-admin:X4WdMdZiBdQjoiIr@cluster0.vwmxzsu.mongodb.net/?retryWrites=true&w=majority';
    // 'mongodb+srv://zensurance:4bUa6EAH4OQ2MMUh@cluster0.vwmxzsu.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
}

export async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
}
