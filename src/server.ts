import { app } from './app';
import { connectDB } from './config/database';

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

connectDB();
