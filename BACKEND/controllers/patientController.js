const Patient = require('../models/Patient');

// Mark/Unmark a patient as emergency
exports.toggleEmergencyStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    patient.isEmergency = !patient.isEmergency; // Toggle the status
    await patient.save();

    res.status(200).json({
      message: `Patient marked as ${patient.isEmergency ? 'Emergency' : 'Non-Emergency'}`,
      patient,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update emergency status' });
  }
};

// Fetch all emergency cases
exports.getEmergencyCases = async (req, res) => {
  try {
    const emergencies = await Patient.find({ isEmergency: true });
    res.status(200).json(emergencies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch emergency cases' });
  }
};
exports.addPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
