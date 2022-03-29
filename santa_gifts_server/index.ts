import * as express from 'express';
import * as cors from 'cors';
import 'express-async-errors';
import { handleError } from './utils/error';
import { homeRouter } from './routers/home';
import { childRouter } from './routers/child';
import { giftRouter } from './routers/gift';
import './utils/db';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.static('public'));
app.use(express.json()); //Content-type: application/json
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, 'localhost', () => {
  console.log('Server is listening on http://localhost:3001');
});
