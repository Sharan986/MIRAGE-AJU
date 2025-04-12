const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Record = require('../models/Record');

const {
  addRecord,
  getRecordsByPatient,
  getRecordById
} = require('../controllers/recordController');

router.post('/', addRecord);
router.get('/:patientId', getRecordsByPatient);
router.get('/single/:recordId', getRecordById);

// Upload lab report and attach to an existing record
router.post('/upload-to-record/:recordId', upload.single('report'), async (req, res) => {
    try {
      const { recordId } = req.params;
      const filePath = req.file?.path;
  
      if (!filePath) return res.status(400).json({ error: 'No file uploaded' });
  
      const record = await Record.findById(recordId);
      if (!record) return res.status(404).json({ error: 'Record not found' });
    
      console.log("File:", req.file);


      record.reports.push(filePath);
      await record.save();
  
      res.status(200).json({ message: 'Report added', record });
    } catch (err) {
      console.error("Upload error:", err);  // ADD THIS LINE
      res.status(500).json({ error: 'Failed to attach report' });
    }
  });
  
  
module.exports = router;
