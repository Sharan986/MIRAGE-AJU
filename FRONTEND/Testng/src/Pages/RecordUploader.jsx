import React, { useState } from 'react';
import axios from 'axios';

const RecordUploader = () => {
  const [recordId, setRecordId] = useState('');
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!recordId || !file) {
      alert('Please provide both Record ID and a file');
      return;
    }

    const formData = new FormData();
    formData.append('report', file);

    try {
      const res = await axios.post(`http://localhost:5000/api/records/upload-to-record/${recordId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('File uploaded successfully!');
      const updatedRecord = res.data.record;
      const latestFile = updatedRecord.reports[updatedRecord.reports.length - 1];
      setUploadedFile(latestFile);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };

  const handleDownload = () => {
    if (!uploadedFile) return;
    const link = document.createElement('a');
    link.href = `http://localhost:5000/${uploadedFile}`;
    link.download = uploadedFile.split('/').pop();
    link.click();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold text-gray-800">📤 Upload PDF to a Record</h2>

      <form onSubmit={handleUpload} className="space-y-3">
        <input
          type="text"
          placeholder="Enter Record ID"
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
          className="w-full border px-4 py-2 rounded shadow-sm"
          required
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border px-4 py-2 rounded shadow-sm"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
        >
          Upload File
        </button>
      </form>

      {uploadedFile && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">✅ Uploaded File:</p>
          <button
            onClick={handleDownload}
            className="mt-1 text-blue-600 hover:underline text-sm"
          >
            {uploadedFile.split('/').pop()}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordUploader;
