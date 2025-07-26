import React, { useState, useRef, useEffect } from "react";

const TalkToOriznPage = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const [showFeedback, setShowFeedback] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState("PUCK");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const aiImgRef = useRef(null);
  const feedbackRef = useRef(null);
  const [barHeight, setBarHeight] = useState(250);

  // Feedbacks array
  const [feedbacks] = useState([
    {
      title: "Question",
      content: `Glen Ltd. has taken a loan of ₹ 60,00,000 from Data Bank Ltd. and ₹ 20,00,000 from Satya Bank Ltd. for construction of building. The rate of interest is 8% per annum. The loan amount has been utilized for working capital. Interest paid during the year is ₹ 1,92,000. The building was completed on 31st March, 2023. The company has earned ₹ 30,000 as interest on temporary investment of surplus funds.\n\nCalculate the amount of interest to be capitalized and interest to be charged to profit and loss account as per AS-16.`,
    },
    {
      title: "Question",
      content: `What is the difference between capital and revenue expenditure? Give examples.`,
      audioDuration: "1:00",
      audioUrl: "#", // Placeholder, replace with actual audio file if available
      transcript: `Capital expenditure is spent on acquiring or improving fixed assets that provide long-term benefits to the business. Examples include purchasing machinery, buildings, or vehicles. Revenue expenditure is spent on day-to-day operations and provides short-term benefits. Examples include rent, utilities, and office supplies. The key difference is that capital expenditure creates or improves assets, while revenue expenditure maintains current operations.`,
    },
    {
      title: "Question",
      content: `Glen Ltd. began construction of a new building on 1st January, 2022.\nOn 1st April, 2022, following two loans were obtained to fund the construction cost :\n\n(i) Loan of ₹ 60,00,000 from Data Bank Ltd. was taken at interest rate of 8% per annum. This loan was fully utilized for construction of the new building.\n(ii) Loan of ₹ 20,00,000 from Satya Bank Ltd. Out of this, loan amount of ₹ 6,00,000 was utilized for working capital purpose. Total interest of ₹ 1,92,000 were paid to Satya Bank Ltd. for the financial year 2022–23.\nConstruction of the new building was completed on 31st January, 2023 and was ready for its intended use on the same date.\n\nNone of the loan was repaid during the year. The building is a qualifying asset for the purpose of AS-16.\nOut of loan from Data Bank Ltd., surplus funds were temporarily invested for the short period of time. This temporary investment earned interest of ₹ 30,000.\n\nYou are required to calculate the amount of interest (a) to be capitalized, (b) to be charged to profit and loss account from the total interest incurred as borrowing cost during the year 2022–23. (as per AS–16).`,
      audioDuration: "1:00",
      audioUrl: "#", // Placeholder, replace with actual audio file if available
      transcript: `Glen Ltd. began construction of a new building on 1st January, 2022.\nOn 1st April, 2022, following two loans were obtained to fund the construction cost :\n\n(i) Loan of ₹ 60,00,000 from Data Bank Ltd. was taken at interest rate of 8% per annum. This loan was fully utilized for construction of the new building.\n(ii) Loan of ₹ 20,00,000 from Satya Bank Ltd. Out of this, loan amount of ₹ 6,00,000 was utilized for working capital purpose. Total interest of ₹ 1,92,000 were paid to Satya Bank Ltd. for the financial year 2022–23.\nConstruction of the new building was completed on 31st January, 2023 and was ready for its intended use on the same date.\n\nNone of the loan was repaid during the year. The building is a qualifying asset for the purpose of AS-16.\nOut of loan from Data Bank Ltd., surplus funds were temporarily invested for the short period of time. This temporary investment earned interest of ₹ 30,000.\n\nYou are required to calculate the amount of interest (a) to be capitalized, (b) to be charged to profit and loss account from the total interest incurred as borrowing cost during the year 2022–23. (as per AS–16).`,
    },
  ]);
  // Show/hide state for each feedback
  const [showFeedbacks, setShowFeedbacks] = useState(
    feedbacks.map(() => false)
  );
  // Show/hide transcript for each feedback
  const [showTranscripts, setShowTranscripts] = useState(
    feedbacks.map(() => false)
  );
  // Refs for each feedback's AI image and feedback button
  const aiImgRefs = useRef([]);
  const feedbackRefs = useRef([]);
  // Bar heights for each feedback
  const [barHeights, setBarHeights] = useState(feedbacks.map(() => 250));

  // Voice options
  const voiceOptions = ["PUCK", "ALEX", "SARAH", "MIKE"];
  const languageOptions = ["English", "Hindi", "Spanish", "French"];

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
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      const interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      mediaRecorderRef.current.interval = interval;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Unable to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      if (mediaRecorderRef.current.interval) {
        clearInterval(mediaRecorderRef.current.interval);
      }
    }
  };

  // Handle recording toggle
  const handleRecordingToggle = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Handle start answering
  const handleStartAnswering = () => {
    setIsAnswering(true);
    startRecording();
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  function updateBarHeight() {
    if (aiImgRef.current && feedbackRef.current) {
      const aiImgBottom =
        aiImgRef.current.offsetTop + aiImgRef.current.offsetHeight;
      const feedbackTop = feedbackRef.current.offsetTop;
      const distance = feedbackTop - aiImgBottom;
      setBarHeight(distance > 0 ? distance : 0);
      // console.log('aiImgBottom', aiImgBottom, 'feedbackTop', feedbackTop, 'distance', distance);
    }
  }

  // Calculate bar heights for all feedbacks
  function updateAllBarHeights() {
    setBarHeights(
      feedbacks.map((_, idx) => {
        const aiImg = aiImgRefs.current[idx];
        const feedbackBtn = feedbackRefs.current[idx];
        if (aiImg && feedbackBtn) {
          const aiImgBottom = aiImg.offsetTop + aiImg.offsetHeight;
          const feedbackTop = feedbackBtn.offsetTop;
          const distance = feedbackTop - aiImgBottom;
          return distance > 0 ? distance : 0;
        }
        return 250;
      })
    );
  }

  useEffect(() => {
    function rafUpdate() {
      requestAnimationFrame(updateAllBarHeights);
    }
    rafUpdate();
    window.addEventListener("resize", rafUpdate);
    return () => window.removeEventListener("resize", rafUpdate);
  }, [showFeedbacks, feedbacks.length, showTranscripts]);

  console.log("barHeight", barHeight);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Logo/Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Talk to Orizn Live
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mb-6">
            Tell me everything you need about your CA preparation
          </p>

          {/* Start Practicing Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Start Practicing
          </button>
        </div>

        {/* Settings Section */}
        <div className="bg-white max-w-3xl mx-auto border border-gray-300 rounded-lg shadow-sm mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">SETTINGS</h2>
              <button
                onClick={() => setSettingsOpen(!isSettingsOpen)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isSettingsOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isSettingsOpen && (
              <div className="space-y-4">
                {/* Voice Setting */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">VOICE</span>
                  <button
                    onClick={() => {
                      const currentIndex = voiceOptions.indexOf(selectedVoice);
                      const nextIndex =
                        (currentIndex + 1) % voiceOptions.length;
                      setSelectedVoice(voiceOptions[nextIndex]);
                    }}
                    className="bg-white border w-[80%] border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-orange-500 font-medium">
                      {selectedVoice}
                    </span>
                  </button>
                </div>

                {/* Language Setting */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">LANGUAGE</span>
                  <button
                    onClick={() => {
                      const currentIndex =
                        languageOptions.indexOf(selectedLanguage);
                      const nextIndex =
                        (currentIndex + 1) % languageOptions.length;
                      setSelectedLanguage(languageOptions[nextIndex]);
                    }}
                    className="bg-white border w-[80%] border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-orange-500 font-medium">
                      {selectedLanguage}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Question/Chat Interface */}
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="flex items-start gap-2 relative mb-8">
            <div className="min-w-10 flex flex-col items-center relative">
              <img
                ref={(el) => (aiImgRefs.current[idx] = el)}
                src="/ai.png"
                className="min-w-10 min-h-10"
              />
              <div
                className="w-[2px] rounded-lg bg-gray-200"
                style={{ height: barHeights[idx] }}
              ></div>
              <div
                className={`w-3 h-3 mt-1 rounded-full ${
                  !showFeedbacks[idx] ? "bg-red-500" : "bg-green-500"
                }`}
              ></div>
            </div>
            <div className="w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
                <div className="p-6">
                  {/* AI Speaker */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-1 text-start">
                      <div className="text-gray-900 font-medium">AI</div>
                      <div className="text-gray-900 font-bold text-lg mb-2">
                        {fb.title}
                      </div>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {fb.content}
                      </div>
                    </div>
                  </div>

                  {/* User Interaction */}
                  <div className="flex flex-col space-x-3 gap-2 text-start mt-6">
                    <span className="text-gray-900 px-4 font-medium">You</span>
                    {/* If audioUrl exists, show audio player UI, else show Start Answering button */}
                    {fb.audioUrl ? (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center px-4 py-2 rounded-lg bg-white border border-orange-300 text-orange-500 font-medium shadow">
                          <button
                            className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors mr-2"
                            onClick={() => {
                              /* play audio logic here if needed */
                            }}
                          >
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <span>{fb.audioDuration}</span>
                          {/* Waveform */}
                          <div className="flex items-end space-x-1 ml-2">
                            {[8, 12, 16, 10, 18, 8, 14, 10].map((h, i) => (
                              <div
                                key={i}
                                className="w-1 bg-orange-400 rounded-sm"
                                style={{ height: `${h + Math.random() * 8}px` }}
                              />
                            ))}
                          </div>
                        </div>
                        <button
                          className="px-3 py-1 rounded bg-gray-100 border text-gray-700 text-xs"
                          onClick={() =>
                            setShowTranscripts((showTranscripts) =>
                              showTranscripts.map((v, i) =>
                                i === idx ? !v : v
                              )
                            )
                          }
                        >
                          {showTranscripts[idx]
                            ? "Hide Transcript"
                            : "Show Transcript"}
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        {" "}
                        <button
                          onClick={handleStartAnswering}
                          disabled={isAnswering}
                          className={`px-4 py-2 w-fit rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                            isAnswering
                              ? "bg-red-100 text-red-600 cursor-not-allowed"
                              : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                          }`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>
                            {isAnswering ? "Recording..." : "Start Answering"}
                          </span>
                        </button>
                        {isAnswering && (
                          <button
                            onClick={() => {
                              stopRecording();
                              setIsAnswering(false);
                            }}
                            className={`px-4 py-2 w-fit rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${"bg-orange-100 text-orange-600 hover:bg-orange-200"}`}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Stop</span>
                          </button>
                        )}
                      </div>
                    )}
                    {/* Transcript Section */}
                    {fb.audioUrl && showTranscripts[idx] && (
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <div className="text-gray-900 font-bold text-lg mb-2">
                          Transcript
                        </div>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {fb.transcript}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-start">
                  {/* Toggle */}
                  <div className="flex items-center space-x-2 mb-4">
                    <button
                      ref={(el) => (feedbackRefs.current[idx] = el)}
                      onClick={() =>
                        setShowFeedbacks((showFeedbacks) =>
                          showFeedbacks.map((v, i) => (i === idx ? !v : v))
                        )
                      }
                      className="text-orange-600 underline hover:text-orange-700 transition-colors"
                    >
                      {!showFeedbacks[idx] ? "Check feedback" : "Hide feedback"}
                    </button>
                  </div>
                  {/* Question Content (when feedback is shown) */}
                  {showFeedbacks[idx] && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-gray-900 font-bold text-lg mb-2">
                        {fb.title}
                      </div>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {fb.content}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkToOriznPage;
