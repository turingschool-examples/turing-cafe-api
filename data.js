const reservations = [
  {
    id: 1,
    name: 'Christie',
    date: '12/29',
    time: '7:00',
    number: 12,
  },
  {
    id: 2,
    name: 'Leta',
    date: '4/5',
    time: '7:00',
    number: 2,
  },
  {
    id: 3,
    name: 'Pam',
    date: '1/21',
    time: '6:00',
    number: 4,
  },
  {
    id: 4,
    name: 'Khalid',
    date: '5/9',
    time: '7:30',
    number: 7,
  },
  {
    id: 5,
    name: 'Will',
    date: '5/15',
    time: '6:30',
    number: 2,
  },
  {
    id: 6,
    name: 'Eric',
    date: '5/30',
    time: '6:00',
    number: 8,
  },
  {
    id: 7,
    name: 'Robbie',
    date: '6/5',
    time: '5:30',
    number: 2,
  },
  {
    id: 8,
    name: 'Travis',
    date: '6/8',
    time: '7:00',
    number: 12,
  },
  {
    id: 9,
    name: 'Brittany',
    date: '9/9',
    time: '7:30',
    number: 3,
  }
];

const menu = {
  drinks: [
    {id: 1, name: 'Coffee', price: '2.00'},
    {id: 2, name: 'Iced tea', price: '2.00'},
    {id: 3, name: 'Orange juice', price: '4.00'},
    {id: 4, name: 'Mimosa', price: '7.00'},
    {id: 5, name: 'Bloody Mary', price: '7.50'},
  ],
  food: [
    {id: 6, name: 'Build Your Own Omelette', price: '4.00+'},
    {id: 7, name: 'Pancakes & berries', price: '6.00'},
    {id: 8, name: 'Chicken & waffles', price: '9.00'},
    {id: 9, name: 'Spinach & goat cheese frittata', price: '7.00'},
    {id: 10, name: 'Turkey club sandwich', price: '7.50'},
    {id: 11, name: 'Build Your Own Burrito', price: '4.00+'},
    {id: 12, name: 'Reuben sandwich', price: '7.50'},
    {id: 13, name: 'Smashed chickpea wrap', price: '6.50'},
  ]
}

module.exports = {reservations, menu};
