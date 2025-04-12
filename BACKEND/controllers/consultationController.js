const mongoose = require('mongoose');
const Consultation = require('../models/Consultation');

exports.createConsultation = async (req, res) => {
  try {
    const { type, patient, doctor, date, time, notes, status } = req.body;

    const newConsultation = new Consultation({
      patient,
      doctor,
      type,
      date,
      time,
      notes,
      status
    });

    await newConsultation.save();

    // Attach Jitsi video link if it's an online consultation
    if (type === 'online') {
      newConsultation.videoLink = `https://meet.jit.si/swasthyasetu-${newConsultation._id}`;
      await newConsultation.save();
    }

    res.status(201).json(newConsultation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create consultation' });
  }
};

exports.getConsultations = async (req, res) => {
  try {
    const filters = req.query;
    const consultations = await Consultation.find(filters).populate('patient doctor');
    res.status(200).json(consultations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch consultations' });
  }
};

exports.getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id).populate('patient doctor');
    if (!consultation) return res.status(404).json({ error: 'Consultation not found' });
    res.status(200).json(consultation);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching consultation' });
  }
};

exports.updateConsultation = async (req, res) => {
  try {
    const updated = await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Consultation not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update consultation' });
  }
};

exports.deleteConsultation = async (req, res) => {
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Consultation not found' });
    res.status(200).json({ message: 'Consultation deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete consultation' });
  }
};