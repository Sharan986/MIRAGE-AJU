const express = require('express');
const router = express.Router();
const {
  createPrescription,
  getPrescriptionsByPatient,
  updatePrescription,
  deletePrescription
} = require('../controllers/prescriptionController');

const { exportPrescriptionAsPDF } = require('../controllers/prescriptionController');

router.post('/', createPrescription);
router.get('/:patientId', getPrescriptionsByPatient);
router.put('/:id', updatePrescription);
router.delete('/:id', deletePrescription);
router.get('/export/:id', exportPrescriptionAsPDF);

module.exports = router;
