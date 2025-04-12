const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const patientController = require('../controllers/patientController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protect routes
router.get('/emergencies', verifyToken, requireRole('doctor'), patientController.getEmergencyCases);
router.patch('/:id/emergency', verifyToken, requireRole('doctor'), patientController.toggleEmergencyStatus);

module.exports = router;