/* eslint-disable react/prop-types */
import { Dispatch, SetStateAction } from 'react';
import { InputWrapper, Input, Label } from './styles';

interface ITextInput {
  label: string;
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}

export const TextInput: React.FC<ITextInput> = ({ label, value, onValueChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type='text' value={value} onChange={(event) => onValueChange(event.target.value)} />
    </InputWrapper>
  );
};
