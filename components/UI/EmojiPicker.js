import React from 'react';
import { EMOJIS } from '../../utils/constants';

const EmojiPicker = ({ onEmojiSelect, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 w-80 max-h-60 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Emojis</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {EMOJIS.map((emoji, index) => (
          <button
            key={index}
            onClick={() => onEmojiSelect(emoji)}
            className="text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1 transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;