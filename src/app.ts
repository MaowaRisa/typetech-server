import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors({origin:['http://localhost:5173']}));

// application routes
// app.use('/api/', router);
const test = async (req: Request, res: Response) => {
  const a = 10;
  // Promise.reject();
  res.send(a);
};
app.get('/', test);
// // middleware for error handling
// app.use(globalErrorHandler);
// // Not found
// app.use(notFound);

export default app;
