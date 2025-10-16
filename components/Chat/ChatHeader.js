import React from 'react';
import Avatar from '../Message/Avatar';
import ThemeToggle from '../ThemeToggle/UI/ThemeToggle';
import { SAMPLE_USERS } from '../../utils/constants';

const ChatHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar user={SAMPLE_USERS.bot} size="large" showStatus={true} />
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {SAMPLE_USERS.bot.name}
            </h1>
            <p className="text-sm text-green-500 dark:text-green-400">
              {SAMPLE_USERS.bot.status}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;