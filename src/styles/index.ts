import styled from 'styled-components';

export const Header = styled.header`
  height: 4rem;
  background-color: #000;
  color: #fff;

  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.125rem;
`;

export const Nav = styled.div``;

export const ContactButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: 2px solid #fff;

  font-weight: 300;
  letter-spacing: 0.125rem;

  color: #fff;
  background-color: #000;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

interface ISectionProps {
  src: string;
}

export const Section = styled.section<ISectionProps>`
  height: 450px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});

  filter: grayscale(0.5);

  display: grid;
  place-content: center;
`;

export const TransparentButton = styled(ContactButton)`
  background-color: transparent;
  transform: scale(1.125);
`;
