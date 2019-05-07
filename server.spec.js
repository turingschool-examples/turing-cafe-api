const request = require('supertest');
require('@babel/polyfill');
const app = require('./server.js');

describe('API', () => {
  let reservations;

  beforeEach(() => {
    reservations = [
      { name: 'Leta', date: '5/9', time: '7:00', number: 6, id: 1 },
      { name: 'Christie', date: '5/7', time: '6:30', number: 3, id: 2 }
    ]

    app.locals.reservations = reservations;
  });

  describe('GET /api/v1/reservations', () => {
    it('should return a status of 200', async () => {
      const response = await request(app).get('/api/v1/reservations');

      expect(response.statusCode).toBe(200);
    });

    it('should respond with an array of reservations', async () => {
      const response = await request(app).get('/api/v1/reservations');


      expect(response.body).toEqual(reservations);
    });
  });

  describe('POST /api/v1/reservations', () => {
    it('should return a status of 201 and the updated reservations', async () => {
      const goodReservationBody = { name: 'Jeff', date: '5/6', time: '5:30', number: 5, id: 3 };
      const expected = [...app.locals.reservations, goodReservationBody]

      expect(app.locals.reservations.length).toBe(2);

      const response = await request(app).post('/api/v1/reservations').send(goodReservationBody);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expected);
      expect(app.locals.reservations.length).toBe(3);
    });

    it('should return an error', async () => {
      const badReservationBody = { name: 'Jeff', time: '5:30', number: 5, id: 3 };
      const expected = { error: 'Expected format { name: <String>, date: <String>, time: <String>, number: <Number> }. You are missing a required parameter of date.' };

      expect(app.locals.reservations.length).toBe(2);

      const response = await request(app).post('/api/v1/reservations').send(badReservationBody);

      expect(response.status).toBe(422);
      expect(response.body).toEqual(expected);
      expect(app.locals.reservations.length).toBe(2);
    });
  });

  describe('DELETE /api/v1/reservations', () => {
    it('should return a status of 202 and the updated reservations', async () => {
      const expected = [{ name: 'Leta', date: '5/9', time: '7:00', number: 6, id: 1 }];

      expect(app.locals.reservations.length).toBe(2);

      const response = await request(app).delete('/api/v1/reservations/2');

      expect(response.status).toBe(202);
      expect(response.body).toEqual(expected);
      expect(app.locals.reservations.length).toBe(1);
    });

    it('should return an error', async () => {
      const expected = { error: 'No reservation found with an id of 10.' };

      expect(app.locals.reservations.length).toBe(2);

      const response = await request(app).delete('/api/v1/reservations/10');

      expect(response.status).toBe(404);
      expect(response.body).toEqual(expected);
      expect(app.locals.reservations.length).toBe(2);
    });
  });
})
