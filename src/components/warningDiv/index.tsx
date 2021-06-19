import React from 'react';

export const WarningDiv = ({ className, warningMsg }: { className: string; warningMsg: string }) => {
  return <div className={className}>{warningMsg}</div>;
};
