import React, { useState } from 'react';
import styled from 'styled-components';

const MessageFeed = () => {
  const [messages, setMessages] = useState(["The minute she landed she understood the reason this was a fly-over state.", "She thought there'd be sufficient time if she hid her watch."]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      console.log("Shift + Enter pressed.", inputValue);
      setMessages((prevMessages) => [...prevMessages, inputValue]); // REMINDER: Needed help with this. 
      setInputValue("");

    } else {
      console.log("Not here.");
    }
  };

  return (
    <MessageFeedContainer aria-label='Submit messages.' tabIndex={0}>
      <h3>Submit messages:</h3>
      <MessageContainer data-testid="message-container">
        {messages.map((message, index) => (
          <Message data-testid="message" key={index} tabIndex={0}>{message}</Message>
        ))}
      </MessageContainer>
      <MessageInput
        data-testid="message-input"
        type="text"
        value={inputValue}
        onKeyDown={handleChange}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message and press Shift + Enter to send"
        aria-label='Input field.'
      />
    </MessageFeedContainer>
  );
};

export default MessageFeed;

const MessageFeedContainer = styled.div`
  display: inline-block;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  border: 8px solid red;
  border-radius: 5px;
  width: 70%;
  margin: 1rem 1rem 1rem 1rem;
  padding: 1rem;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  width: 100%;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageInput = styled.input`
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #999;
  }
`;