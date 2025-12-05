const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  order: { type: String, required: true },
  amountPaid: { type: Number, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;


/*
{
  "name": "Alice",
  "date": "2025-11-27",
  "time": "09:30",
  "order": "Cappuccino",
  "amountPaid": 4.50
}
{
  "name": "Bob",
  "date": "2025-11-27",
  "time": "10:15",
  "order": "Latte",
  "amountPaid": 5.00
}
{
  "name": "Charlie",
  "date": "2025-11-27",
  "time": "10:45",
  "order": "Espresso",
  "amountPaid": 3.00
}
{
  "name": "Diana",
  "date": "2025-11-27",
  "time": "11:20",
  "order": "Mocha",
  "amountPaid": 5.50
}
{
  "name": "Ethan",
  "date": "2025-11-27",
  "time": "11:50",
  "order": "Americano",
  "amountPaid": 3.50
}


In Postman:

POST → Add customer (/api/customers)

GET → Get all customers (/api/customers)

GET → Get single customer (/api/customers/:id)

PUT → Update (/api/customers/:id)

DELETE → Delete (/api/customers/:id)
*/
