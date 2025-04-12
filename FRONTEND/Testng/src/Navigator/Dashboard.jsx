import React, { useState, useEffect } from 'react';

// Mock static patient data
const staticPatients = [
  {
    _id: '1',
    name: 'John Doe',
    age: 34,
    gender: 'Male',
    disease: 'Diabetes',
    doctor: 'Dr. Strange',
    report: null,
  },
  {
    _id: '2',
    name: 'Alice Smith',
    age: 28,
    gender: 'Female',
    disease: 'Asthma',
    doctor: 'Dr. House',
    report: null,
  },
  {
    _id: '3',
    name: 'Robert Johnson',
    age: 45,
    gender: 'Male',
    disease: 'Hypertension',
    doctor: 'Dr. Adams',
    report: null,
  },
  {
    _id: '4',
    name: 'Emily Brown',
    age: 31,
    gender: 'Female',
    disease: 'Arthritis',
    doctor: 'Dr. Bailey',
    report: null,
  },
  {
    _id: '5',
    name: 'Michael White',
    age: 52,
    gender: 'Other',
    disease: 'Heart Disease',
    doctor: 'Dr. Grey',
    report: null,
  },
];

const PatientManager = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    disease: '',
    doctor: '',
    report: null,
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setPatients(staticPatients);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'report') {
      setFormData((prev) => ({ ...prev, report: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.disease || !formData.doctor) return;

    const patientData = {
      ...formData,
      age: Number(formData.age),
      _id: editId || Date.now().toString(),
    };

    if (editId) {
      setPatients((prev) =>
        prev.map((p) => (p._id === editId ? patientData : p))
      );
      setEditId(null);
    } else {
      setPatients((prev) => [...prev, patientData]);
    }

    // Reset form
    setFormData({
      name: '',
      age: '',
      gender: 'Male',
      disease: '',
      doctor: '',
      report: null,
    });
  };

  const handleEdit = (patient) => {
    setFormData({
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      disease: patient.disease,
      doctor: patient.doctor,
      report: patient.report,
    });
    setEditId(patient._id);
  };

  const handleDelete = (id) => {
    setPatients((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Patient Manager</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Patient name"
          value={formData.name}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={formData.disease}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="doctor"
          placeholder="Consulted With (Doctor)"
          value={formData.doctor}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="file"
          name="report"
          accept=".pdf"
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Update Patient' : 'Add Patient'}
        </button>
      </form>

      <ul className="space-y-4">
        {patients.map((patient) => (
          <li
            key={patient._id}
            className="bg-gray-100 p-4 rounded shadow-sm flex flex-col gap-1"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-lg">{patient.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(patient)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(patient._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Age: {patient.age} | Gender: {patient.gender} | Disease: {patient.disease}
            </p>
            <p className="text-sm text-gray-700">Doctor: {patient.doctor}</p>
            {patient.report && (
              <p className="text-sm text-green-700 font-medium">
                📄 Report uploaded: {patient.report.name || 'PDF'}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManager;
