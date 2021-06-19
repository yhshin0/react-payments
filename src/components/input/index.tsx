import React, { ChangeEvent } from 'react';

interface IInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  maxLength: string;
  minLength: string;
}

export const Input = ({ onChange, type, name, maxLength, minLength }: IInputProps) => {
  return (
    <input
      onChange={(e) => onChange(e)}
      type={type}
      name={name}
      maxLength={Number(maxLength)}
      minLength={Number(minLength)}
    />
  );
};
