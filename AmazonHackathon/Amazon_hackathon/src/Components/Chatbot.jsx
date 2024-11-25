import * as React from 'react';
import { useState } from 'react';

// The code is for displaying a chatbot icon that opens the chatbot when clicked
export default function Chatbot() {
  const [openChat, setOpenChat] = useState(false);

  // Toggle the chatbot window
  const toggleChatbot = () => {
    setOpenChat(!openChat);
  };

  return (
    <div>
      {/* Chatbot Icon Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#fff', // Background color for the button
          border: 'none',
          borderRadius: '50%',
          padding: '15px',
          fontSize: '24px',
          color: '#000', // Color for the SVG icon
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          zIndex: 1001,
        }}
      >
        {/* Chatbot SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M8 13.5H16M8 8.5H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Chatbot Window (Iframe) */}
      {openChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '350px',  // Adjusted width
            height: '450px', // Adjusted height
            border: 'none',
            zIndex: 1000,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
          }}
        >
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/18/19/20241118195522-7HM42EQT.json&theme=light"
            title="Chatbot"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px', // Rounded corners for the iframe
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
