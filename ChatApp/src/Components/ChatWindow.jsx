import React from 'react';
import { List, ListItem, Paper, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

// ChatWindow component to display chat messages
const ChatWindow = ({ messages }) => {
  return (
    <List style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
      {/* Iterate over the messages array and render each message */}
      {messages.map(message => (
        <ListItem
          key={message.id}
          style={{ 
            justifyContent: message.isUser ? 'flex-end' : 'flex-start' 
          }}
        >
          <Paper
            elevation={1}
            style={{
              padding: '10px', // Padding inside the message bubble
              borderRadius: '8px', // Rounded corners for the message bubble
              maxWidth: '60%', // Maximum width of the message bubble
              backgroundColor: message.isUser ? '#e0f7fa' : '#f1f8e9' // Background color based on whether the message is from the user or bot
            }}
          >
            <Typography variant="body1">
              {/* Display the message content*/}
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </Typography>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatWindow;
