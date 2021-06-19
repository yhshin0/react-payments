import React, { ReactElement } from 'react';

export const InputSection = ({ className, children }: { className: string; children: ReactElement[] }) => {
  return <section className={className}>{children}</section>;
};
