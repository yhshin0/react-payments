import React from 'react';
import { Link } from 'react-router-dom';

interface IPageHeaderProps {
  hasBackButton: boolean;
  title: string;
}

export const PageHeader = ({ hasBackButton, title }: IPageHeaderProps) => {
  return (
    <header className="page-header">
      {hasBackButton ? (
        <Link to="/">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30424 1L1.36474 8.78658L9.15132 15.7261" stroke="#525252" strokeWidth="1.5" />
          </svg>
        </Link>
      ) : null}
      <span>{title}</span>
    </header>
  );
};
