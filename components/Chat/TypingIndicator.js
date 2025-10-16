import React from 'react';
import Avatar from '../Message/Avatar';
import { SAMPLE_USERS } from '../../utils/constants';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start space-x-2">
      <Avatar user={SAMPLE_USERS.bot} size="small" showStatus={true} />
      <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-none border border-gray-200 dark:border-gray-600 px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;