import React from 'react';

const Avatar = ({ user, size = 'medium', showStatus = false }) => {
  const sizeClasses = {
    small: 'w-6 h-6 text-xs',
    medium: 'w-8 h-8 text-sm',
    large: 'w-10 h-10 text-base',
    xlarge: 'w-12 h-12 text-lg'
  };

  return (
    <div className="relative">
      <div
        className={`${user.color || 'bg-gray-400'} rounded-full flex items-center justify-center text-white font-semibold ${sizeClasses[size]}`}
      >
        {user.avatar}
      </div>
      {showStatus && user.status && (
        <div
          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
            user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
      )}
    </div>
  );
};

export default Avatar;