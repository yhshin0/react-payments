import React from 'react';

export const InputSection = ({ className, children }: { className: string; children: React.ReactNode[] }) => {
  return <section className={className}>{children}</section>;
};
