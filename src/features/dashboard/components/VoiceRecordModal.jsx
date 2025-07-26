import React, { useState, useEffect, useRef } from "react";

const VoiceRecordModal = ({ isOpen, onClose, onSave }) => {
  const [selectedPaper, setSelectedPaper] = useState("Subject - 1");
  const [saveAsName, setSaveAsName] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);

  // Paper options
  const paperOptions = ["Subject - 1", "Subject - 2", "Subject - 3"];

  // Real recording functionality
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks = [];
      
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        
        // Stop all tracks
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      // Start timer
      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
      // Store interval reference
      mediaRecorderRef.current.interval = interval;
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Clear timer
      if (mediaRecorderRef.current.interval) {
        clearInterval(mediaRecorderRef.current.interval);
      }
    }
  };

  // Handle start/stop recording
  const handleRecordingToggle = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle save
  const handleSave = () => {
    if (!saveAsName.trim()) {
      alert("Please enter a name for your voice record");
      return;
    }
    
    if (!audioBlob) {
      alert("Please record something before saving");
      return;
    }

    const recordData = {
      name: saveAsName,
      paper: selectedPaper,
      duration: recordingTime,
      timestamp: new Date(),
      audioBlob: audioBlob,
      audioUrl: audioUrl
    };

    onSave(recordData);
    onClose();
    
    // Reset form
    setSaveAsName("");
    setRecordingTime(0);
    setIsRecording(false);
    setAudioBlob(null);
    setAudioUrl(null);
  };

  // Close modal and reset
  const handleClose = () => {
    if (isRecording) {
      if (window.confirm("Recording is in progress. Are you sure you want to close?")) {
        stopRecording();
        onClose();
      }
    } else {
      onClose();
    }
    
    // Clean up audio URL
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Choose Appropriate</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Paper Selection */}
          <div>
            <div className="flex space-x-2 items-center">
            <label className="block text-sm font-bold text-gray-700">
              Paper
            </label>
              {paperOptions.map((paper, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPaper(paper)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedPaper === paper
                      ? "bg-orange-100 border border-orange-500 text-orange-700"
                      : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {paper}
                </button>
              ))}
            </div>
          </div>

          {/* Save As Input */}
          <div>
            <label className="block text-sm text-start font-bold text-gray-700 mb-2">
              Save As
            </label>
            <input
              type="text"
              value={saveAsName}
              onChange={(e) => setSaveAsName(e.target.value)}
              placeholder="Enter voice record name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Voice Recording Interface */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {/* Waveform Visualization */}
            <div className="flex items-end justify-center space-x-1 mb-6 h-20">
              {isRecording ? (
                // Animated waveform when recording
                Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-orange-500 rounded-sm animate-pulse"
                    style={{
                      width: '3px',
                      height: `${Math.random() * 60 + 10}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))
              ) : (
                // Static waveform when not recording
                Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-300 rounded-sm"
                    style={{
                      width: '3px',
                      height: `${Math.random() * 40 + 5}px`
                    }}
                  />
                ))
              )}
            </div>

            {/* Recording Controls */}
            <div className="text-center">
              {isRecording && (
                <div className="text-lg font-mono text-gray-700 mb-4">
                  {formatTime(recordingTime)}
                </div>
              )}
              
              <button
                onClick={handleRecordingToggle}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? "bg-red-100 text-red-600 hover:bg-red-200"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isRecording ? (
                    <>
                      <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                      <span>Stop Recording</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>Start Recording</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Audio Preview Section */}
          {audioUrl && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Preview Recording</h3>
              
              {/* Audio Player */}
              <div className="flex items-center space-x-3 mb-3">
                <button
                  onClick={() => {
                    const audio = new Audio(audioUrl);
                    audio.play().catch(error => {
                      console.error('Error playing preview:', error);
                      alert('Error playing audio preview');
                    });
                  }}
                  className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="flex-1">
                  <div className="text-sm text-gray-600">
                    Duration: {formatTime(recordingTime)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Click play to preview your recording
                  </div>
                </div>
              </div>

              {/* Re-record Button */}
              <button
                onClick={() => {
                  setAudioBlob(null);
                  setAudioUrl(null);
                  setRecordingTime(0);
                  if (audioUrl) {
                    URL.revokeObjectURL(audioUrl);
                  }
                }}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Re-record
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(90deg, #F6581C 0%, #F57900 100%)'
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceRecordModal; 