import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { SAMPLE_USERS } from '../../utils/constants';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! Welcome to our chat app! 😊\nHow can I help you today?',
      sender: SAMPLE_USERS.bot,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: SAMPLE_USERS.currentUser,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botMessage = {
        id: Date.now() + 1,
        text: `Thanks for your message! I received: "${text}"\nIs there anything else I can help with?`,
        sender: SAMPLE_USERS.bot,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 2000);
  };

  const handleFileUpload = (file) => {
    const fileMessage = {
      id: Date.now(),
      file: {
        name: file.name,
        size: file.size,
        type: file.type
      },
      sender: SAMPLE_USERS.currentUser,
      timestamp: new Date(),
      type: 'file'
    };

    setMessages(prev => [...prev, fileMessage]);

    // Simulate file upload and bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `I received your file: ${file.name}`,
        sender: SAMPLE_USERS.bot,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      <ChatHeader />
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput 
        onSendMessage={handleSendMessage} 
        onFileUpload={handleFileUpload}
      />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;