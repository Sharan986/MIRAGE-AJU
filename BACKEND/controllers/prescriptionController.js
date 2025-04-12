const Prescription = require('../models/Prescription');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');


async function createPrescription(req, res) {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json(prescription);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create prescription', details: err });
  }
};

async function getPrescriptionsByPatient(req, res) {
  try {
    const prescriptions = await Prescription.find({ patient: req.params.patientId }).populate('doctor');
    res.status(200).json(prescriptions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get prescriptions' });
  }
};

async function updatePrescription(req, res) {
  try {
    const updated = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Prescription not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update prescription' });
  }
};

async function deletePrescription(req, res) {
  try {
    const deleted = await Prescription.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Prescription not found' });
    res.status(200).json({ message: 'Prescription deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete prescription' });
  }
};

async function exportPrescriptionAsPDF(req, res) {
    try {
      const prescription = await Prescription.findById(req.params.id)
        .populate('patient')
        .populate('doctor');
  
      if (!prescription) {
        return res.status(404).json({ error: 'Prescription not found' });
      }
  
      const doc = new PDFDocument();
      const fileName = `prescription-${prescription._id}.pdf`;
      const filePath = path.join(__dirname, `../uploads/${fileName}`);
  
      // Pipe PDF to filesystem
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);
  
      // PDF content
      doc.fontSize(20).text('Prescription', { align: 'center' });
      doc.moveDown();
  
      doc.fontSize(14).text(`Date: ${new Date(prescription.date).toLocaleDateString()}`);
      doc.text(`Doctor: ${prescription.doctor.name}`);
      doc.text(`Patient: ${prescription.patient.name}`);
      doc.text(`Diagnosis: ${prescription.diagnosis}`);
      doc.moveDown();
  
      doc.text('Medicines:', { underline: true });
      prescription.medicines.forEach((med, i) => {
        doc.text(`${i + 1}. ${med.name} - ${med.dosage} - ${med.frequency}`);
      });
  
      if (prescription.notes) {
        doc.moveDown();
        doc.text(`Notes: ${prescription.notes}`);
      }
  
      doc.end();
  
      stream.on('finish', () => {
        res.download(filePath, fileName);
      });
  
    } catch (err) {
      console.error('PDF Export Error:', err);
      res.status(500).json({ error: 'Failed to export prescription as PDF' });
    }
  };
  

  module.exports = {
    createPrescription,
    getPrescriptionsByPatient,
    updatePrescription,
    deletePrescription,
    exportPrescriptionAsPDF, 
  };
  