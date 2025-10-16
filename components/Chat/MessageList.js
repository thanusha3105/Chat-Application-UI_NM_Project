import React from 'react';
import MessageBubble from '../Message/MessageBubble';
import { SAMPLE_USERS } from '../../utils/constants';

const MessageList = ({ messages, isTyping }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isCurrentUser={message.sender.id === SAMPLE_USERS.currentUser.id}
          />
        ))}
        {isTyping && (
          <div className="flex justify-start space-x-2">
            <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-none border border-gray-200 dark:border-gray-600 px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;