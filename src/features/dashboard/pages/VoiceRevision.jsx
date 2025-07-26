import React, { useState } from "react";
import VoiceRecordModal from "../components/VoiceRecordModal";

const VoiceRevision = () => {
  const [dropdown1Value, setDropdown1Value] = useState("All Subject");
  const [dropdown2Value, setDropdown2Value] = useState("Bookmarked");
  const [dropdown3Value, setDropdown3Value] = useState("Marked");
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);

  // Dropdown options arrays
  const subjectOptions = ["All Subject", "Biology", "Mathematics", "General", "Psychology"];
  const bookmarkedOptions = ["All Bookmarked", "Biology", "Mathematics", "General", "Psychology"];
  const markedOptions = ["All Marked", "Biology", "Mathematics", "General", "Psychology"];

  // Sample data for voice records/insights
  const [voiceRecords, setVoiceRecords] = useState([
    {
      id: 1,
      title: "Tips to score maximum in your next attempt",
      description: "Explore the latest breakthroughs in genetics, biotech, medicine, and environmental science — all curated to boost your exam readiness.",
      duration: "20:00",
      isBookmarked: false,
      isMarked: false,
      subject: "Biology"
    },
    {
      id: 2,
      title: "Advanced problem solving techniques",
      description: "Master complex mathematical concepts and learn advanced problem-solving strategies for competitive exams.",
      duration: "15:30",
      isBookmarked: true,
      isMarked: false,
      subject: "Mathematics"
    },
    {
      id: 3,
      title: "Effective time management strategies",
      description: "Learn how to optimize your study schedule and manage time effectively during exams for better performance.",
      duration: "18:45",
      isBookmarked: false,
      isMarked: true,
      subject: "General"
    },
    {
      id: 4,
      title: "Memory enhancement techniques",
      description: "Discover proven methods to improve memory retention and recall for better exam performance.",
      duration: "22:15",
      isBookmarked: true,
      isMarked: true,
      subject: "Psychology"
    },
    {
      id: 5,
      title: "Stress management during exams",
      description: "Learn effective techniques to manage stress and anxiety during exam preparation and test-taking.",
      duration: "16:20",
      isBookmarked: false,
      isMarked: false,
      subject: "General"
    },
    {
      id: 6,
      title: "Critical thinking and analysis",
      description: "Develop critical thinking skills and analytical abilities essential for solving complex problems.",
      duration: "19:30",
      isBookmarked: true,
      isMarked: false,
      subject: "Logic"
    }
  ]);

  // Handle delete record
  const handleDeleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete this voice record?")) {
      setVoiceRecords(prevRecords => prevRecords.filter(record => record.id !== id));
    }
  };

  // Handle revise now (play audio)
  const handleReviseNow = (record) => {
    if (record.audioUrl) {
      const audio = new Audio(record.audioUrl);
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('Error playing audio recording');
      });
    } else {
      console.log("Revising record:", record.title);
      // TODO: Implement revise functionality for non-audio records
      alert(`Starting revision for: ${record.title}`);
    }
  };

  // Handle save voice record
  const handleSaveVoiceRecord = (recordData) => {
    const newRecord = {
      id: Date.now(),
      title: recordData.name,
      description: `Voice record for ${recordData.paper} - Duration: ${formatTime(recordData.duration)}`,
      duration: formatTime(recordData.duration),
      isBookmarked: false,
      isMarked: false,
      subject: recordData.paper,
      audioBlob: recordData.audioBlob,
      audioUrl: recordData.audioUrl
    };
    
    setVoiceRecords(prevRecords => [newRecord, ...prevRecords]);
    
    // TODO: Here you would typically upload the audioBlob to your server
    // Example:
    // const formData = new FormData();
    // formData.append('audio', recordData.audioBlob, `${recordData.name}.wav`);
    // formData.append('paper', recordData.paper);
    // formData.append('duration', recordData.duration);
    // 
    // fetch('/api/upload-voice-record', {
    //   method: 'POST',
    //   body: formData
    // });
  };

  // Format time helper
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // For now, show all records (you can implement filtering logic later)
  const filteredRecords = voiceRecords;
  const closeAllDropdowns = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
  };
  return (
    <div className="min-h-screen p-5">
      {/* Header Section */}
      <div className=" rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          {/* Title */}
                    <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Rankers Insights</h1>
            
            {/* Dropdown 1 - All Subject */}
            <div className="relative">
              <button 
                onClick={() => { closeAllDropdowns(); setShowDropdown1(!showDropdown1);}}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span className="text-gray-700">{dropdown1Value}</span>
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Dropdown 1 Menu */}
              {showDropdown1 && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {subjectOptions.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => { setDropdown1Value(option); setShowDropdown1(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        index === 0 ? 'rounded-t-lg' : index === subjectOptions.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown 2 - Bookmarked */}
            <div className="relative">
              <button 
                onClick={() => {closeAllDropdowns(); setShowDropdown2(!showDropdown2); }}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span className="text-gray-700">{dropdown2Value}</span>
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Dropdown 2 Menu */}
              {showDropdown2 && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {bookmarkedOptions.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => { setShowDropdown2(false); setDropdown2Value(option); }}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        index === 0 ? 'rounded-t-lg' : index === bookmarkedOptions.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown 3 - Marked */}
            <div className="relative">
              <button 
                onClick={() => { closeAllDropdowns(); setShowDropdown3(!showDropdown3);}}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span className="text-gray-700">{dropdown3Value}</span>
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Dropdown 3 Menu */}
              {showDropdown3 && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {markedOptions.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => { setDropdown3Value(option); setShowDropdown3(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        index === 0 ? 'rounded-t-lg' : index === markedOptions.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="">
           

            {/* Add Voice Records Button */}
            <button
              onClick={() => setShowVoiceModal(true)}
              className="text-white px-6 py-4 rounded-lg font-medium transition-all duration-200"
              style={{
                background: 'linear-gradient(90deg, #F6581C 0%, #F57900 100%)'
              }}
            >
              Add Voice Records
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((record) => (
          <div
            key={record.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              {/* Voice Icon */}
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.5 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.5l3.883-2.794a1 1 0 011.617.794zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Duration */}
              <span className="text-sm text-gray-500 font-medium">{record.duration}</span>
            </div>

            {/* Card Content */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {record.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {record.description}
              </p>
            </div>

            {/* Card Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleReviseNow(record)}
                className="border border-orange-500 text-orange-500 bg-white hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Revise Now
              </button>

              <button
                onClick={() => handleDeleteRecord(record.id)}
                className="text-orange-500 hover:text-orange-700 p-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRecords.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.5 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.5l3.883-2.794a1 1 0 011.617.794z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No voice records found</h3>
          <p className="text-gray-500">Try adjusting your filters or add a new voice record.</p>
        </div>
      )}

      {/* Voice Record Modal */}
      <VoiceRecordModal
        isOpen={showVoiceModal}
        onClose={() => setShowVoiceModal(false)}
        onSave={handleSaveVoiceRecord}
      />
    </div>
  );
};

export default VoiceRevision; 