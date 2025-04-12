import React from "react";

const HealthDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 border-r shadow-sm pt-7">
        <h2 className="text-2xl font-bold text-purple-600 mb-10">🫀 SwasthyaSetu</h2>
        <nav className="flex flex-col  gap-16 text-gray-700 font-medium">
          <a href="#" className="flex items-center gap-3 text-purple-600 bg-purple-50 p-2 rounded-md">
            📊 Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-purple-600">
            📅 My Appointments
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-purple-600">
            🧑‍⚕️ My Doctors
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-purple-600">
            📖 Medical History
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-purple-600">
            💊 Prescriptions
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-purple-600">
            🧪 Test Reports
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
            <p className="text-gray-600">Monitor your health activities</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Next Appointment 📅
            </p>
            <h3 className="text-xl font-bold">Today</h3>
            <p className="text-purple-600 font-medium">2:30 PM</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Medications 💊
            </p>
            <h3 className="text-xl font-bold">3</h3>
            <p className="text-gray-500">Due today</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Test Results 🧪
            </p>
            <h3 className="text-xl font-bold">2</h3>
            <p className="text-purple-600 font-medium">New reports</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Health Score 🩺
            </p>
            <h3 className="text-xl font-bold">85%</h3>
            <p className="text-green-600 font-medium">↑ Good</p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Upcoming Appointments */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">Upcoming Appointments</h2>
              <a href="#" className="text-purple-600 text-sm">View All</a>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. John"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Dr. John Smith</p>
                  <p className="text-sm text-gray-500">General Checkup</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">Today, 2:30 PM</p>
                <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-xs">Get In Touch</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  alt="Dr. Robert"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Dr. Robert Wilson</p>
                  <p className="text-sm text-gray-500">Follow-up</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">Tomorrow, 11:00 AM</p>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">In Person</span>
              </div>
            </div>
          </div>

          {/* Today's Medications */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">Today's Medications</h2>
              <a href="#" className="text-purple-600 text-sm">View All</a>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-semibold">Amoxicillin</p>
                  <p className="text-sm text-gray-500">500mg - 1 tablet</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">After Breakfast</p>
                <p className="text-gray-500">8:00 AM</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-semibold">Vitamin D3</p>
                  <p className="text-sm text-gray-500">1000 IU - 1 tablet</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">After Lunch</p>
                <p className="text-gray-500">2:00 PM</p>
              </div>
            </div>
          </div>


          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">Upcoming Appointments</h2>
              <a href="#" className="text-purple-600 text-sm">View All</a>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. John"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Dr. John Smith</p>
                  <p className="text-sm text-gray-500">General Checkup</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">Today, 2:30 PM</p>
                <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-xs">Get In Touch</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  alt="Dr. Robert"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Dr. Md Rizwan Khan</p>
                  <p className="text-sm text-gray-500">Follow-up</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">Tomorrow, 11:00 AM</p>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">In Person</span>
              </div>
            </div>
          </div>


          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">Today's Medications</h2>
              <a href="#" className="text-purple-600 text-sm">View All</a>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-semibold">Amoxicillin</p>
                  <p className="text-sm text-gray-500">500mg - 1 tablet</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">After Breakfast</p>
                <p className="text-gray-500">8:00 AM</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">💊</span>
                <div>
                  <p className="font-semibold">Vitamin D3</p>
                  <p className="text-sm text-gray-500">1000 IU - 1 tablet</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-purple-600">After Lunch</p>
                <p className="text-gray-500">2:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default HealthDashboard;
