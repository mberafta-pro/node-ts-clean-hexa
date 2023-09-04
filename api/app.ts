import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import { configureEnvironment } from './configuration/environment';
import apiRouter from './configuration/routes';

configureEnvironment();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
