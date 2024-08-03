import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import { BsEmojiSmile } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import { PiLinkBold } from "react-icons/pi";
//THIS SECTION WILL DESCRIBE ABOUT THE INPUT AND THE SEND BUTTON AT THE BOTTOM OF THE CHAT APPLICATION
const MessageInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  }, [input, onSendMessage]);

  return (
    // Taking Input Filed
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* emoji button */}
      <BsEmojiSmile className='increase one roundup'/>
      {/* link button */}
      <PiLinkBold className='increase one roundup'/>
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
        style={{ marginRight: '10px',backgroundColor:'white'}}
      />
      {/* button Section */}
      <Button onClick={handleSendMessage} >
      <LuSendHorizonal style = {{color : 'black', fontSize:'25px'}}/>
      </Button>
    </div>
  );
};

export default MessageInput;
