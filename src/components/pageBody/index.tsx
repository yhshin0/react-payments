import React, { ReactElement } from 'react';

export const PageBody = ({ className, children }: { className: string; children: ReactElement[] }) => {
  return <div className={className}>{children}</div>;
};
