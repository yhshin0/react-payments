import React from 'react';

export const PageBody = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return <div className={className}>{children}</div>;
};
