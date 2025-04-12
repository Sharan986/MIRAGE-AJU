const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  reports: [{ type: String }],
  emergencyContact: {
    name: String,
    phone: String,
    relation: String
  },
  isEmergency: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('Patient', patientSchema);
