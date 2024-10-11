// app/models/Customer.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other fields as necessary
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;