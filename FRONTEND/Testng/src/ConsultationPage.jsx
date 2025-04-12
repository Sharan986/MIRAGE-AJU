import React, { useEffect, useState } from 'react';
import VideoConsultation from './VideoConsultation';
import axios from 'axios';

const ConsultationPage = ({ consultationId }) => {
  const [consultation, setConsultation] = useState(null);

  useEffect(() => {
    const fetchConsultation = async () => {
      const res = await axios.get(`/api/consultations/${consultationId}`);
      setConsultation(res.data);
    };

    fetchConsultation();
  }, [consultationId]);

  if (!consultation) return <div>Loading...</div>;

  return (
    <div>
      <h2>Consultation with {consultation.doctor.name}</h2>
      {consultation.type === 'online' ? (
        <VideoConsultation videoLink={consultation.videoLink} />
      ) : (
        <p>This is an offline consultation.</p>
      )}
    </div>
  );
};

export default ConsultationPage;
