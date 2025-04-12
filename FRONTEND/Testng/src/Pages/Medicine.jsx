import { useState } from 'react';

function MedicineTracker() {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Amoxicillin",
      prescribedBy: "Dr. Sarah Johnson",
      nextRefillDays: 7,
      pillsLeft: 23,
      totalPills: 90,
      refillPercentage: 25
    },
    {
      id: 2,
      name: "Lisinopril",
      prescribedBy: "Dr. Michael Chen",
      nextRefillDays: 15,
      pillsLeft: 45,
      totalPills: 100,
      refillPercentage: 45
    },
    {
      id: 3,
      name: "Metformin",
      prescribedBy: "Dr. Emily Wilson",
      nextRefillDays: 2,
      pillsLeft: 8,
      totalPills: 60,
      refillPercentage: 13
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    prescribedBy: "",
    nextRefillDays: 0,
    pillsLeft: 0,
    totalPills: 0
  });

  const handleAddMedicine = () => {
    if (newMedicine.name) {
      const refillPercentage = Math.round((newMedicine.pillsLeft / newMedicine.totalPills) * 100);
      
      setMedicines([
        ...medicines,
        {
          id: medicines.length + 1,
          ...newMedicine,
          refillPercentage
        }
      ]);
      
      setNewMedicine({
        name: "",
        prescribedBy: "",
        nextRefillDays: 0,
        pillsLeft: 0,
        totalPills: 0
      });
      
      setShowAddForm(false);
    }
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">Medicine Tracker</h1>
      <p className="text-gray-600 mt-1 mb-8">Track your medicine refills and schedule</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{medicine.name}</h2>
              <div className="text-gray-600">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-sm text-gray-600">Prescribed by:</p>
              <p className="text-gray-800">{medicine.prescribedBy}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">Next refill in:</p>
              <p className="text-gray-800 font-medium">{medicine.nextRefillDays} days</p>
            </div>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {medicine.pillsLeft} pills left
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {medicine.totalPills} pills total
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${medicine.refillPercentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddForm ? (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Add New Medicine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={newMedicine.name}
                onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prescribed By</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={newMedicine.prescribedBy}
                onChange={(e) => setNewMedicine({...newMedicine, prescribedBy: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Days Until Next Refill</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={newMedicine.nextRefillDays}
                onChange={(e) => setNewMedicine({...newMedicine, nextRefillDays: parseInt(e.target.value) || 0})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pills Left</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={newMedicine.pillsLeft}
                onChange={(e) => setNewMedicine({...newMedicine, pillsLeft: parseInt(e.target.value) || 0})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Pills</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={newMedicine.totalPills}
                onChange={(e) => setNewMedicine({...newMedicine, totalPills: parseInt(e.target.value) || 0})}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              onClick={toggleAddForm}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={handleAddMedicine}
            >
              Add Medicine
            </button>
          </div>
        </div>
      ) : (
        <button
          className="mt-8 flex items-center px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={toggleAddForm}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Medicine
        </button>
      )}
    </div>
  );
}

export default MedicineTracker;