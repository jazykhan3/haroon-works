import React, { useState } from "react";

const FeedbackList = ({ feedbacks }) => {
  // State to track visibility of each feedback section
  const [visibleFeedback, setVisibleFeedback] = useState(
    feedbacks.map(() => true)
  );
  
  // State to track transcript visibility for each feedback
  const [showTranscript, setShowTranscript] = useState(
    feedbacks.map(() => false)
  );

  // Toggle feedback visibility for specific index
  const toggleFeedback = (idx) => {
    setVisibleFeedback((prev) =>
      prev.map((v, i) => (i === idx ? !v : v))
    );
  };

  // Toggle transcript visibility for specific index
  const toggleTranscript = (idx) => {
    setShowTranscript((prev) =>
      prev.map((v, i) => (i === idx ? !v : v))
    );
  };

  return (
    <div className="space-y-6">
      {feedbacks.map((fb, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-sm">
          {/* Feedback Toggle Header */}
          <div className="flex items-center space-x-2 p-4 border-b border-gray-200">
            <div className={`w-3 h-3 rounded-full ${visibleFeedback[idx] ? "bg-green-500" : "bg-gray-400"}`}></div>
            <button
              className="text-orange-600 underline hover:text-orange-700 transition-colors"
              onClick={() => toggleFeedback(idx)}
            >
              {visibleFeedback[idx] ? "Hide feedback" : "Check feedback"}
            </button>
          </div>
          
          {/* Feedback Content */}
          {visibleFeedback[idx] && (
            <div className="p-6">
              {/* AI Question Section */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 font-medium">AI</div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{fb.title}</div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {fb.content}
                  </div>
                </div>
              </div>

              {/* User Response Section */}
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-gray-900 font-medium">You</span>
                
                {/* Audio Player */}
                <div className="flex items-center space-x-2 px-4 py-2 bg-white border border-orange-300 rounded-lg shadow-sm">
                  <button className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Audio Duration */}
                  <span className="text-sm text-gray-600">{fb.audioDuration || "1:00"}</span>
                  
                  {/* Audio Waveform */}
                  <div className="flex items-end space-x-1">
                    {Array.from({ length: 8 }, (_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-orange-400 rounded-sm"
                        style={{
                          height: `${Math.random() * 20 + 8}px`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Transcript Toggle Button */}
                <button
                  onClick={() => toggleTranscript(idx)}
                  className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {showTranscript[idx] ? "Hide Transcript" : "Show Transcript"}
                </button>
              </div>

              {/* Transcript Section */}
              {showTranscript[idx] && fb.transcript && (
                <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-2">Transcript</div>
                  <div className="text-sm text-gray-700 whitespace-pre-line">
                    {fb.transcript}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedbackList; 