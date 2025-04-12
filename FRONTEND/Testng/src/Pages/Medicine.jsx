import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/prescriptions';

const PrescriptionManager = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      _id: '1',
      diagnosis: 'Flu',
      doctor: { name: 'Dr. Smith' },
      createdAt: new Date().toISOString(),
      durationInDays: 7,
    },
    {
      _id: '2',
      diagnosis: 'Cold',
      doctor: { name: 'Dr. Watson' },
      createdAt: new Date().toISOString(),
      durationInDays: 5,
    },
    {
      _id: '3',
      diagnosis: 'Diabetes',
      doctor: { name: 'Dr. Jones' },
      createdAt: new Date().toISOString(),
      durationInDays: 14,
    },
    {
      _id: '4',
      diagnosis: 'Hypertension',
      doctor: { name: 'Dr. House' },
      createdAt: new Date().toISOString(),
      durationInDays: 10,
    },
    {
      _id: '5',
      diagnosis: 'Asthma',
      doctor: { name: 'Dr. Brown' },
      createdAt: new Date().toISOString(),
      durationInDays: 6,
    },
  ]);

  const [patientId, setPatientId] = useState('');
  const [formData, setFormData] = useState({
    patient: '',
    doctor: '',
    diagnosis: '',
    medicines: [],
    notes: '',
  });
  const [medicine, setMedicine] = useState({ name: '', dosage: '', frequency: '' });
  const [progress, setProgress] = useState(0);

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
    updateProgress();
  };

  const updateProgress = () => {
    let percent = 0;
    if (formData.patient) percent += 20;
    if (formData.doctor) percent += 20;
    if (formData.diagnosis) percent += 20;
    if (formData.medicines.length > 0) percent += 20;
    if (formData.notes) percent += 20;
    setProgress(percent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_BASE, formData);
    alert('Prescription Created');
    setFormData({ patient: '', doctor: '', diagnosis: '', medicines: [], notes: '' });
    fetchPrescriptions();
    setProgress(0);
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
    <div className="p-8 max-w-5xl mx-auto space-y-10">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">📝 Create Prescription</h2>

        <div className="w-full h-3 bg-gray-200 rounded-xl overflow-hidden mb-4">
          <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Patient ID" value={formData.patient} onChange={(e) => { setFormData({ ...formData, patient: e.target.value }); updateProgress(); }} className="w-full border px-4 py-2 rounded-xl shadow-sm" />
          <input type="text" placeholder="Doctor ID" value={formData.doctor} onChange={(e) => { setFormData({ ...formData, doctor: e.target.value }); updateProgress(); }} className="w-full border px-4 py-2 rounded-xl shadow-sm" />
          <input type="text" placeholder="Diagnosis" value={formData.diagnosis} onChange={(e) => { setFormData({ ...formData, diagnosis: e.target.value }); updateProgress(); }} className="w-full border px-4 py-2 rounded-xl shadow-sm" />

          <div className="grid grid-cols-3 gap-3">
            <input type="text" placeholder="Medicine Name" value={medicine.name} onChange={(e) => setMedicine({ ...medicine, name: e.target.value })} className="border px-3 py-2 rounded-xl" />
            <input type="text" placeholder="Dosage" value={medicine.dosage} onChange={(e) => setMedicine({ ...medicine, dosage: e.target.value })} className="border px-3 py-2 rounded-xl" />
            <input type="text" placeholder="Frequency" value={medicine.frequency} onChange={(e) => setMedicine({ ...medicine, frequency: e.target.value })} className="border px-3 py-2 rounded-xl" />
          </div>
          <button type="button" onClick={handleAddMedicine} className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">Add Medicine</button>

          <textarea placeholder="Notes" value={formData.notes} onChange={(e) => { setFormData({ ...formData, notes: e.target.value }); updateProgress(); }} className="w-full border px-4 py-2 rounded-xl shadow-sm" />

          <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Save Prescription</button>
        </form>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">📋 Prescriptions</h2>
        <input type="text" placeholder="Enter Patient ID" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="w-full border px-4 py-2 rounded-xl shadow-sm mb-4" />

        <div className="space-y-4">
          {prescriptions.length > 0 ? (
            prescriptions.map((pres) => {
              const daysPassed = Math.floor((Date.now() - new Date(pres.createdAt)) / (1000 * 60 * 60 * 24));
              const daysLeft = Math.max(pres.durationInDays - daysPassed, 0);
              const dayProgress = ((pres.durationInDays - daysLeft) / pres.durationInDays) * 100;

              return (
                <div key={pres._id} className="bg-gray-50 border p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">Diagnosis: {pres.diagnosis}</p>
                      <p className="text-sm text-gray-500">Doctor: {pres.doctor?.name || pres.doctor}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => downloadPDF(pres._id)} className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600">Download PDF</button>
                      <button onClick={() => handleDelete(pres._id)} className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600">Delete</button>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${dayProgress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-500">{daysLeft} day(s) left</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No prescriptions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionManager;
