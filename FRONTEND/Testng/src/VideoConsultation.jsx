import React from 'react';

const VideoConsultation = ({ videoLink }) => {
  return (
    <div className="h-screen w-full p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full aspect-video">
          <iframe
            src={videoLink}
            allow="camera; microphone; fullscreen; display-capture"
            className="w-full h-full border-none rounded-2xl"
            title="Jitsi Video Consultation"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;
