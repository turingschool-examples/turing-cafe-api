# Turing Cafe API

This app is the back-end server for the Mod 3 FE mid-mod. It is tested with jest and supertest.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone https://github.com/turingschool-examples/turing-cafe-api.git`
2. Change into the new directory.
    - `cd turing-cafe-api`
3. Install the dependencies.
    - `npm install`

### Usage

1. To fire up the server, run `npm start`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/reservations` | GET | not needed | Array of all existing reservations: `[{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]` |
| `http://localhost:3001/api/v1/reservations` | POST | Newly created reservation: `{name: <String>, date: <String>, time: <String>, number: <Number>}` | `{ id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }` |
| `http://localhost:3001/api/v1/reservations/:id` | DELETE | not needed | Array of all remaining reservations: `[{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]` |

Note: All of these endpoints will return semantic errors if something is wrong with the request.
