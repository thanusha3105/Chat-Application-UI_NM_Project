import React from 'react';

const MessageStatus = ({ status = 'sent' }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return <span className="text-blue-400">✓✓</span>;
      case 'sending':
        return <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />;
      default:
        return '✓';
    }
  };

  return (
    <span className="text-xs ml-2">
      {getStatusIcon()}
    </span>
  );
};

export default MessageStatus;