import React, { useState } from "react";

const PrioritySupportPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "omg, this is amazing",
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
    {
      id: 3,
      type: "bot",
      content: "perfect! ✔",
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    },
    {
      id: 7,
      type: "bot",
      content: "just ideas for next time",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    },
    {
      id: 2,
      type: "user",
      content: "How are you?",
      timestamp: new Date(Date.now() - 280000), // 4.7 minutes ago
    },

    {
      id: 5,
      type: "bot",
      content: "Wow, this is really epic",
      timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    },

    {
      id: 8,
      type: "user",
      content: "Haha that's terrifying 😂",
      timestamp: new Date(Date.now() - 100000), // 1.7 minutes ago
    },
    {
      id: 4,
      type: "user",
      content: "woohoooo",
      timestamp: new Date(Date.now() - 220000), // 3.7 minutes ago
    },
    {
      id: 6,
      type: "user",
      content: "Haha oh man",
      timestamp: new Date(Date.now() - 160000), // 2.7 minutes ago
    },
    {
      id: 9,
      type: "bot",
      content: "I'll be there in 2 mins ⏰",
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
    },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        type: "user",
        content: message,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");

      // TODO: Here you would typically make an API call to send the message
      // and then receive the bot's response
      // Example:
      // sendMessageToAPI(message).then(response => {
      //   const botResponse = {
      //     id: Date.now() + 1,
      //     type: 'bot',
      //     content: response.message,
      //     timestamp: new Date()
      //   };
      //   setMessages(prevMessages => [...prevMessages, botResponse]);
      // });
    }
  };

  return (
    <div className="p-5 bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white py-4">
        <h1 className="text-2xl text-start font-bold text-gray-900">
          Priority Support
        </h1>
        <p className="text-gray-600 text-start mt-1">
          Get faster responses from our support team.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 border rounded-md border-gray-200 p-6 h-fit">
        <div className="">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start my-4 gap-2 ${
                msg.type === "user" ? "justify-end" : ""
              }`}
            >
              {msg.type === "bot" && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
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
              )}

              <div
                className={`rounded-lg px-4 py-3 max-w-xs ${
                  msg.type === "bot" ? "bg-gray-100" : "bg-orange-gradient"
                }`}
              >
                <p
                  className={
                    msg.type === "bot" ? "text-gray-800 mb-0" : "text-white mb-0"
                  }
                >
                  {msg.content}
                </p>
                {/* <p
                  className={`text-xs mt-1 ${
                    msg.type === "bot" ? "text-gray-500" : "text-orange-200"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p> */}
              </div>

              {msg.type === "user" && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
         {/* Message Input */}
      <div className="bg-white px-6 py-4">
        <form
          onSubmit={handleSendMessage}
          className="relative mx-auto flex items-center space-x-3"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 rounded-lg px-4 border border-gray-200 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            type="submit"
            className=" absolute right-1 rotate-45 hover:bg-orange-200 text-white p-3 rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="#ea580c" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </div>
      </div>

     
    </div>
  );
};

export default PrioritySupportPage;
