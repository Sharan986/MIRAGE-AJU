const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  medicine: String,
  dosage: String,
  frequency: String,
  duration: String,
  notes: String
});

const appointmentSchema = new mongoose.Schema({
  date: Date,
  reason: String,
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  }
});

const recordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  medicalHistory: {
    type: String,
    default: ''
  },
  prescriptions: [prescriptionSchema],
  reports: [String], // file paths for uploaded PDFs/images
  appointments: [appointmentSchema],
  consultationNotes: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Record', recordSchema);
