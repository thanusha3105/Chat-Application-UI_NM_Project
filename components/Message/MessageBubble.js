import React from 'react';
import Avatar from './Avatar';

const MessageBubble = ({ message, isCurrentUser }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', minute: '2-digit' 
    });
  };

  if (message.type === 'file') {
    return (
      <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} space-x-2`}>
        {!isCurrentUser && (
          <Avatar user={message.sender} size="small" showStatus={true} />
        )}
        <div
          className={`max-w-[70%] rounded-2xl px-4 py-3 ${
            isCurrentUser
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-600'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">📎</span>
            <div>
              <p className="text-sm font-medium">{message.file.name}</p>
              <p className="text-xs opacity-75">
                {(message.file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className={`text-xs ${isCurrentUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
        {isCurrentUser && (
          <Avatar user={message.sender} size="small" />
        )}
      </div>
    );
  }

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} space-x-2`}>
      {!isCurrentUser && (
        <Avatar user={message.sender} size="small" showStatus={true} />
      )}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isCurrentUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-600'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        <div className="flex justify-between items-center mt-1">
          <p className={`text-xs ${isCurrentUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
            {formatTime(message.timestamp)}
          </p>
        </div>
      </div>
      {isCurrentUser && (
        <Avatar user={message.sender} size="small" />
      )}
    </div>
  );
};

export default MessageBubble;