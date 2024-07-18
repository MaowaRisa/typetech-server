import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// Parsers
// app.use(cors());
app.use(cors());
app.use(express.json());
// app.use(cors({ origin: ['https://typetech-client.vercel.app/'] }));
// app.use((req, res, next) => {
//   res.on('finish', () => {
//     console.log(res.getHeaders());
//   });
//   next();
// });
// application routes
app.use('/api/', router);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: `Welcome to typeTech server.`,
  });
});
// // middleware for error handling
app.use(globalErrorHandler);
// Not found route
app.use(notFound);

export default app;
