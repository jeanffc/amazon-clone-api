import express, { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routesV1 from './routes/v1';

const app: Express = express();

// enable log
app.use(morgan('tiny'));

// enable helmet
app.use(helmet());

// enable cors
app.use(cors());

// parse requests with json
app.use(express.json());

// parse requests with urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/health', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Hi!' });
});

// routes for /v1 path
app.use('/v1', routesV1);

export { app };
