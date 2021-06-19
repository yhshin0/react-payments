import React, { ChangeEvent } from 'react';

interface IInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
  maxLength: string;
  minLength: string;
  placeholder?: string;
}

export const Input = ({ onBlur, onChange, maxLength, minLength, ...rest }: IInputProps) => {
  return onBlur ? (
    <input onBlur={(e) => onBlur(e)} maxLength={Number(maxLength)} minLength={Number(minLength)} {...rest} />
  ) : onChange ? (
    <input onChange={(e) => onChange(e)} maxLength={Number(maxLength)} minLength={Number(minLength)} {...rest} />
  ) : null;
};
