import { useState } from 'react';

function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [treatmentFilter, setTreatmentFilter] = useState("All Treatments");
  const [dateRange, setDateRange] = useState("Date Range");
  
  // Mock data for medical records
  const records = [
    {
      id: 1,
      title: "Dental Check-up",
      doctor: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      time: "10:30 AM",
      type: "Check-up"
    },
    {
      id: 2,
      title: "Root Canal Treatment",
      doctor: "Dr. Michael Chen",
      date: "February 28, 2025",
      time: "2:15 PM",
      type: "Treatment"
    },
    {
      id: 3,
      title: "Teeth Cleaning",
      doctor: "Dr. Emily Wilson",
      date: "January 15, 2025",
      time: "9:00 AM",
      type: "Cleaning"
    }
  ];
  
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM4 20V8h16v12H4z" />
            <path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3v-3z" />
          </svg>
          <h1 className="text-lg font-medium">Medical Records</h1>
        </div>
        <div className="flex items-center">
          <button className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="p-4">
        <div className="flex mb-4">
          <div className="relative flex-grow mr-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex">
            <select
              className="px-4 py-2 border rounded-md mr-4"
              value={treatmentFilter}
              onChange={(e) => setTreatmentFilter(e.target.value)}
            >
              <option>All Treatments</option>
              <option>Check-ups</option>
              <option>Treatments</option>
              <option>Cleanings</option>
            </select>
            <select
              className="px-4 py-2 border rounded-md"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option>Date Range</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Records list */}
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow">
          {records.map((record) => (
            <div key={record.id} className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-medium text-gray-800">{record.title}</h2>
                  <p className="text-gray-600">{record.doctor}</p>
                  <div className="flex items-center mt-2 text-gray-500">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="mr-4">{record.date}</span>
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{record.time}</span>
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center p-4">
        <div className="flex">
          <button 
            className="px-3 py-1 mx-1 border rounded-md"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          >
            &lt;
          </button>
          <button 
            className={`px-3 py-1 mx-1 border rounded-md ${currentPage === 1 ? 'bg-gray-800 text-white' : ''}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button 
            className={`px-3 py-1 mx-1 border rounded-md ${currentPage === 2 ? 'bg-gray-800 text-white' : ''}`}
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button 
            className={`px-3 py-1 mx-1 border rounded-md ${currentPage === 3 ? 'bg-gray-800 text-white' : ''}`}
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
          <button 
            className="px-3 py-1 mx-1 border rounded-md"
            onClick={() => handlePageChange(Math.min(3, currentPage + 1))}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicalRecords;