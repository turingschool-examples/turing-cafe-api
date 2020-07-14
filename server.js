const express = require('express');
const cors = require('cors');
// const shortId = require('shortid');
const {reservations, menu} = require('./data');
const app = express();

app.use(express.json());
app.use(cors());


app.set('port', 3001);

app.locals.title = 'Turing Cafe API'
app.locals.reservations = reservations;

app.get('/api/v1/reservations', (request, response) => {
  return response.json(app.locals.reservations)
});

app.post('/api/v1/reservations', (request, response) => {
  const { name, date, time, number } = request.body;

  if (!name || !date || !time || !number ) {
    return response.status(422).json({
      error: 'Expected format { name: <String>, date: <String>, time: <String>, number: <Number> }. You are missing a required parameter.'
    })
  }

  const newReservation = {id: Date.now(), name, date, time, number};

  app.locals.reservations = [...app.locals.reservations, newReservation];

  return response.status(201).json(newReservation);
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
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}!`);
});

module.exports = app;
