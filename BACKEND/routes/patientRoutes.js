const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const upload = require('../middleware/upload');
const patientController = require('../controllers/patientController');

const {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');

router.post('/', addPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

router.post('/upload-report/:patientId', upload.single('report'), async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });

    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    patient.reports.push(req.file.path);
    await patient.save();

    res.status(200).json({ message: 'Report uploaded successfully', file: req.file.path });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload report' });
  }
});

// Toggle emergency status
router.patch('/:id/emergency', patientController.toggleEmergencyStatus);

// Get all emergency cases
router.get('/emergencies', patientController.getEmergencyCases);


module.exports = router;
