import React from 'react';
import ChatContainer from './components/Chat/ChatContainer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 flex items-center justify-center p-4">
      <ChatContainer />
    </div>
  );
}

export default App;