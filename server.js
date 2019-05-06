import express from 'express';
import cors from 'cors';
import { reservations } from './reservationsData'

const app = express();

app.locals.title = 'Turing Cafe API'

app.use(cors());
app.use(express.json());

app.set('port', 3001);



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}!`);
})
