const express = require('express');
const cors = require('cors');
const reservations = require('./reservationsData');

const app = express();

app.locals.title = 'Turing Cafe API'
app.locals.reservations = reservations;

app.use(cors());
app.use(express.json());

app.set('port', 3001);

app.get('/api/v1/reservations', (request, response) => {
  return response.status(200).json(app.locals.reservations)
});

app.post('/api/v1/reservations', (request, response) => {
  const newReservation = {...request.body, id: Date.now()};

  for (let requiredParameter of ['name', 'date', 'time', 'number']) {
    if (!newReservation[requiredParameter]) {
      return response.status(422).json({
        error: `Expected format { name: <String>, date: <String>, time: <String>, number: <Number> }. You are missing a required parameter of ${requiredParameter}.`
      })
    }

    app.locals.reservations = [...app.locals.reservations, newReservation];

    return response.status(201).json(app.locals.reservations);
  }
});

app.delete('/api/v1/reservations/:id', (request, response) => {
  const { id } = request.params;
  const parsedId = parseInt(id);
  const match = app.locals.reservations.find(reservation => parseInt(reservation.id) === parsedId);

  if (!match) {
    return response.status(404).json({ error: `No reservation found with an id of ${id}.` })
  }

  const updatedReservations = app.locals.reservations.filter(reservation => parseInt(reservation.id) !== parsedId);

  app.locals.reservations = updatedReservations;

  return response.status(202).json(app.locals.reservations)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}!`);
})
