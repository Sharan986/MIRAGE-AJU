const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');


const {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorController');

router.post('/', createDoctor);
router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

// Get patients assigned to a doctor
router.get('/:id/patients', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('patients');
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    res.status(200).json(doctor.patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch assigned patients' });
  }
});


module.exports = router;
