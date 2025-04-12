import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/prescriptions';

const PrescriptionManager = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [formData, setFormData] = useState({
    patient: '',
    doctor: '',
    diagnosis: '',
    medicines: [],
    notes: '',
  });
  const [medicine, setMedicine] = useState({ name: '', dosage: '', frequency: '' });

  const fetchPrescriptions = async () => {
    if (!patientId) return;
    const res = await axios.get(`${API_BASE}/${patientId}`);
    setPrescriptions(res.data);
  };

  useEffect(() => {
    if (patientId) fetchPrescriptions();
  }, [patientId]);

  const handleAddMedicine = () => {
    setFormData(prev => ({
      ...prev,
      medicines: [...prev.medicines, medicine],
    }));
    setMedicine({ name: '', dosage: '', frequency: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_BASE, formData);
    alert('Prescription Created');
    setFormData({ patient: '', doctor: '', diagnosis: '', medicines: [], notes: '' });
    fetchPrescriptions();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    alert('Deleted');
    fetchPrescriptions();
  };

  const downloadPDF = (id) => {
    window.open(`${API_BASE}/export/${id}`, '_blank');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="bg-white shadow p-4 rounded-xl space-y-4">
        <h2 className="text-2xl font-bold">📝 Create Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Patient ID" value={formData.patient} onChange={(e) => setFormData({ ...formData, patient: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="text" placeholder="Doctor ID" value={formData.doctor} onChange={(e) => setFormData({ ...formData, doctor: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="text" placeholder="Diagnosis" value={formData.diagnosis} onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })} className="w-full border px-3 py-2 rounded" />

          <div className="flex space-x-2">
            <input type="text" placeholder="Medicine Name" value={medicine.name} onChange={(e) => setMedicine({ ...medicine, name: e.target.value })} className="flex-1 border px-3 py-2 rounded" />
            <input type="text" placeholder="Dosage" value={medicine.dosage} onChange={(e) => setMedicine({ ...medicine, dosage: e.target.value })} className="w-24 border px-2 py-2 rounded" />
            <input type="text" placeholder="Frequency" value={medicine.frequency} onChange={(e) => setMedicine({ ...medicine, frequency: e.target.value })} className="w-24 border px-2 py-2 rounded" />
            <button type="button" onClick={handleAddMedicine} className="bg-blue-500 text-white px-3 py-2 rounded">Add</button>
          </div>

          <textarea placeholder="Notes" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full border px-3 py-2 rounded" />

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Save Prescription</button>
        </form>
      </div>

      <div className="bg-white shadow p-4 rounded-xl space-y-4">
        <h2 className="text-2xl font-bold">📋 View Prescriptions</h2>
        <input type="text" placeholder="Search by Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="w-full border px-3 py-2 rounded" />

        {prescriptions.length > 0 ? (
          prescriptions.map((pres) => (
            <div key={pres._id} className="border p-3 rounded flex justify-between items-center bg-gray-50">
              <div>
                <p className="font-semibold">Diagnosis: {pres.diagnosis}</p>
                <p className="text-sm text-gray-500">Doctor: {pres.doctor?.name || pres.doctor}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => downloadPDF(pres._id)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Download PDF</button>
                <button onClick={() => handleDelete(pres._id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No prescriptions found.</p>
        )}
      </div>
    </div>
  );
};

export default PrescriptionManager;
