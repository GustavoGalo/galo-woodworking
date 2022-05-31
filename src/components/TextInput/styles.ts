import styled from 'styled-components';

export const InputWrapper = styled.div``;

export const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  font-family: inherit;

  border: none;
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
`;

export const Label = styled.p`
  color: #fff;
  letter-spacing: 0.05rem;
  font-size: 0.85rem;
  line-height: 1.75rem;
`;
