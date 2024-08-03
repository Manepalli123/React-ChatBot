import React, { useState, useCallback } from 'react';
import { Container, Paper } from '@mui/material';
import ChatWindow from './Components/ChatWindow';
import MessageInput from './Components/MessageInput';
import './App.css';
import TopSection from './Components/TopSection';

// Initial chat messages to populate the chat window when the app loads
const initialMessages = [
  { id: 1, content: "Hello !!!", isUser: false },
  { id: 2, content: 'Who are you?', isUser: true },
  { id: 3, content: 'Hello, I am Nucleus.ai Chat Bot', isUser: false },
];

const App = () => {
  // State to hold chat messages
  const [chatMessages, setChatMessages] = useState(initialMessages);

  // List of predefined responses for the chat bot
  const RandomList = [
    "NucleusAI is a Green Artificial Intelligence, oriented company that offers a platform to automate IT operations.",
    "The first marketplace is focused on healthcare and financial services",
    "NucleusAI is a team of 4 individuals, all of whom are former founders who were AI researchers at Amazon, one worked at Samsung Research. They have joined forces to pursue a long-held passion project of making agriculture one of the most lucrative things to do",
    "This is a real-time engagement engine for streaming platforms that helps optimize revenue and improve user experience.",
    "The company's mission is to revolutionize the way publishers understand, engage with, and monetize their audiences by leveraging the power of advanced analytics and AI"
  ];

  // Callback function to handle sending a message
  const handleSendMessage = useCallback((message) => {
    if (message.trim()) {
      // Update state with the new user message
      setChatMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now(), content: message, isUser: true }
      ]);
      // Simulate a response from the chat bot
      simulateResponse();
    }
  }, []);

  // Function to simulate a chat bot response
  const simulateResponse = () => {
    setTimeout(() => {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now(), content: RandomList[Math.floor(Math.random() * RandomList.length)], isUser: false }
      ]);
    }, 1000); // A delay of 1 second
  };

  return (
    <>
      <Container maxWidth="sm" style={{ padding: '20px', height: '90vh', margin: '110px', marginBottom: '400px', width: '100%' }}>
        <Paper elevation={2} style={{ padding: '20px', height: '90vh', display: 'flex', flexDirection: 'column', borderRadius: '15px', backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/68/74/87/1000_F_168748763_Mdv7zO7dxuECMzItERhPzWhVJSaORTKd.jpg')`, backgroundSize: '120px' }}>
          {/* TopSection component*/}
          <TopSection />
          {/* ChatWindow component to display the chat messages */}
          <ChatWindow messages={chatMessages} />
          {/* MessageInput component for typing and sending messages */}
          <MessageInput onSendMessage={handleSendMessage} />
        </Paper>
      </Container>
    </>
  );
};

export default App;
